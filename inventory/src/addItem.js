import React from 'react';
import { useState } from "react";
import styles from './App.module.css';

function AddItem(props) {

    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [type, setType] = useState("");
    const [brand, setBrand] = useState("");

    const AddItemButtonPressed = () => {
        props.addItem({
            name: name, price: price, type: type, brand: brand});
        setName("");
        setPrice(0);
        setType("");
        setBrand("");
    };

    return (
        <div className='container'>
            <div className='row'>
            <h2 className= {styles.blue}>Add a Item</h2>
            </div>
            
            <div className='row'>
            <label htmlFor="name-field">Name: </label>
            <input id="name-field" type="text" value={name} placeholder={props.forName} className='form-control'
                   onChange={(e) => setName(e.target.value)} />

            <label htmlFor="price-field">Price: </label>
            <input id="price-field" type="number" value={price} className='form-control'
                   onChange={(e) => setPrice(e.target.value)}/>

            <label htmlFor="type-field">Type: </label>
            <input id="type-field" type="text" value={type} placeholder={props.forType} className='form-control'
                   onChange={(e) => setType(e.target.value)} />
                   
            <label htmlFor="brand-field">Brand: </label>
            <input id="brand-field" type="text" value={brand} placeholder={props.forBrand} className='form-control'
                   onChange={(e) => setBrand(e.target.value)} />
            </div>
            
            <div className='row mt-2'>
            <button type="button" className='btn btn-info mb-4' onClick={AddItemButtonPressed}>Add Item</button>
            </div>
            
        </div>
    )
}

export default AddItem;