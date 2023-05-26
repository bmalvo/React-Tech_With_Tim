import React from 'react';
import { useState, useEffect } from 'react';
// import './App.css';
import SearchBar from './searchBar';
import AddItem from './addItem';
import ItemsDisplay from './itemDisplay';
import styled from "styled-components";
// import Test from './Class';

const Title = styled.h1 `
  color: ${props => props.color ? props.color : 'black'};
`


function App() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState({ items: [] });
  // const [showTest, setShowTest] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/items")
    .then((response) => response.json())
    .then((data) =>setData({items:data}));
  }, []);

  const updateFilters = (searchParams) => {
    setFilters(searchParams);
  }

  const deleteItem = (item) => {
    const items = data["items"];
    const requestOptions = {
      method: "DELETE"
    } 
    fetch(`http://localhost:3000/items/${item.id}`, requestOptions)
    .then((response) => {
      if (response.ok) {
        const idx = items.indexOf(item);
        items.splice(idx, 1);
        setData({items: items});
      }
    })
  };

  const addItemToData = (item) => {
    let items = data['items'];
  
  
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(item),
    };
    fetch("http://localhost:3000/items", requestOptions)
    .then((response) => response.json())
    .then((data) => { items.push(data);
      setData({items: items}); });
     
  }

  const filterData = (data) => {
    const filteredData = [];

    if (! filters.name) {
      return data;
    }

    for (const item of data) {
        if (filters.name !== "" && item.name !== filters.name) {
          continue;
        }

        if (filters.price !== 0 && item.price > filters.price) {
          continue;
        }

        if (filters.type !== "" && item.type !== filters.type) {
          continue;
        }

        if (filters.brand !== "" && item.brand !== filters.brand) {
          continue;
        }

        filterData.push(item);
    }

    return filteredData;
  } 

  return (
    <div className="container">
      <Title color='green'>Items storage</Title>
    <div className='row mt-3'>
    <ItemsDisplay deleteItem= {deleteItem} 
                  items= { filterData(data["items"]) } />
    </div>
    <div className='row mt-3'>
    <SearchBar updateSearchParams = { updateFilters } />   
    </div>
    <div className='row mt-3'>
    <AddItem addItem= { addItemToData } forName= "Your item's name" forType= "What kind of item it is" forBrand="Title your item"/>       
    </div>
    {/* { showTest ? <Test destroy = {setShowTest}/> : null } */}
    </div>  
  );
}

export default App;
