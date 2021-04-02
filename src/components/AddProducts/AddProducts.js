import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Redirect } from 'react-router';

const AddProducts = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);


    const onSubmit = data => {
        window.location.reload();
        const productData = {
            name: data.name,
            weight: data.weight,
            price: data.price,
            imageURL: imageURL
        }
        const url = `http://localhost:5000/addProduct`;

        console.log(productData);
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
            .then(res => console.log('server side response', res))

    };


    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '91da827a2200ca59af37de34cafccd30')
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="container">
            <h1>This is to add products</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="name" defaultValue="Product Name" ref={register} />
                <br />
                <input name="weight" defaultValue="Product weight" ref={register} />
                <br />
                <input name="price" defaultValue="Product Price" ref={register} />
                <br />
                <input name="exampleRequired" type="file" onChange={handleImageUpload} />
                <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddProducts;