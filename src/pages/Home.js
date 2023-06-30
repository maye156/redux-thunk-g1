import  Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ProductsList } from '../components/ProductList';

const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [products, setProducts]=useState([]);
    const user = useSelector(state=> state.user);

    useEffect(()=>{
        Axios.get('http://localhost:3000/products')
        .then(res=>{
            setProducts(res.data);
        })
    }, [])

     function handleClick(e){
        e.preventDefault();
        navigate('/cart')
     }

  return (
    <>
    <h2> Home</h2>
    <p> Bienvenido {user.fullName} / {user.email}</p>
    <button onClick={handleClick}> Cart </button>
    <ProductsList products={products}/>
    </>
  )
}

export default Home
