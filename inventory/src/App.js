import React from 'react';
import { useState } from 'react';
// import './App.css';
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

  const updateFilters = (searchParams) => {
    setFilters(searchParams);
  }

  const addItemToData = (item) => {
    let items = data['items'];
    // item.id = items.length+1;
    
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
    
    // items.push(item);
    // setData({items: items});
    // console.log(data); 
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
      <Title color='green'>Testing paragraph</Title>
    <div className='row mt-3'>
    <ItemsDisplay items= { filterData(data["items"]) } />
    </div>
    <div className='row mt-3'>
    <SearchBar updateSearchParams = { updateFilters } />   
    </div>
    <div className='row mt-3'>
    <AddItem addItem= { addItemToData } />       
    </div>
    </div>  
  );
}

export default App;
