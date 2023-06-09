import React from 'react';
import { useState } from "react";

function SearchBar(props) {

    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [type, setType] = useState("");
    const [brand, setBrand] = useState("");

    const searchButtonPressed = () => {
        props.updateSearchParams({
            name: name, 
            price: price, 
            type: type, 
            brand: brand});
    };

    return (
        <div className='container'>
            <div className='row'>
            <h2>Search for an Item</h2>
            </div>
            <div className='row'>
                <div className='col'>
            <label htmlFor="name-field">Name: </label>
            <input id="name-field" type="text" value={name} className='form-control' 
                   onChange={(e) => setName(e.target.value)}
                   placeholder='Spell name You want to find out'/>
                </div>
                <div className='col'>
            <label htmlFor="price-field">Max Price: </label>
            <input id="price-field" type="number" value={price} className='form-control'
                   onChange={(e) => setPrice(e.target.value)}/>
                </div>
                <div className='col'>
            <label htmlFor="type-field">Type: </label>
            <input id="type-field" type="text" value={type} className='form-control'
                   onChange={(e) => setType(e.target.value)}
                   placeholder='What type are You interested in?'/>
                </div>
                <div className='col'>
            <label htmlFor="brand-field">Brand: </label>
            <input id="brand-field" type="text" value={brand} className='form-control'
                   onChange={(e) => setBrand(e.target.value)} 
                   placeholder='What brand are You looking for?'/>
                </div>
            </div>
            <div className='row mt-2'>
            <div className='col-4'/> 
            <button type="button" className=' col-4 btn btn-primary' onClick={searchButtonPressed}>Search</button>
            </div>
            
        </div>
    )
}

export default SearchBar;