import React from 'react';
import { useState, useEffect } from 'react';
import SearchBar from './searchBar';
import AddItem from './addItem';
import ItemsDisplay from './itemDisplay';
import styled from "styled-components";


const Title = styled.h1 `
  color: ${props => props.color ? props.color : 'black'};
`


function App() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState({ items: [] });

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

      {/* Section title */}
      <div className='row'>
        <div className='col-4'></div>
      <Title color='darkblue' className='col-4'>Items storage</Title>
      </div>
      {/* End section title */}

      {/* Section display */}
    <div className='row mt-3'>
    <ItemsDisplay deleteItem= {deleteItem} 
                  items= { filterData(data["items"]) } />
    </div>
     {/* End section display */}

     {/* Section search */}
    <div className='row mt-3'>
    <SearchBar updateSearchParams = { updateFilters } />   
    </div>
     {/* End section search */}

     {/* Section add items */}
    <div className='row mt-3'>
    <AddItem addItem= { addItemToData } forName= "Your item's name" forType= "What kind of item it is" forBrand="Title your item"/>       
    </div>
    {/* End section add item */}
    
    </div>  
  );
}

export default App;
