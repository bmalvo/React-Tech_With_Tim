import { useState } from 'react';
import './App.css';
import SearchBar from './searchBar';
import AddItem from './addItem';
import ItemsDisplay from './itemDisplay';

function App() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState({ items: [] });

  const updateFilters = (searchParams) => {
    setFilters(searchParams);
  }

  const addItemToData = (item) => {
    let items = data['items'];
    item.id = items.length;
    items.push(item);
    setData({items: items});
    console.log(data); 
  }

  return (
    <div className="App">
    <SearchBar updateSearchParams = { updateFilters } />   
    <ItemsDisplay items= {data["items"]} />
    <AddItem addItem= { addItemToData } />       
    </div>  
  );
}

export default App;
