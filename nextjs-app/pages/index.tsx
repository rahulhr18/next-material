import React from 'react'
import Head from 'next/head'
import { App } from '@src/app'
import { Box, makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import Link from 'next/link'
import { useStyles } from '../src/components/product-card/style'
import { NextJsTraining } from '@src/components/next-training/nextjs-training'
import { ProductCard} from '@src/components/product-card/product-card'
import data from '../public/products.json' 
import { Cart } from '@src/components/cart/cart'
import Button from "@material-ui/core/Button";
import ButtonGroup from '@material-ui/core/ButtonGroup';
import {useState, useEffect} from 'react';

const cartItems = data.products.map((item) => {
    return {
      id: item.id,
      image: item.img,
      title: item.title,
      price: parseFloat(item.prod_price),
      quantity: 0 
    }
  });

const WelcomePage: React.FC = (props: data.products) => {
  const [products] = useState([
    data.products
  ]);
  const [count, setCount] = useState(1);
  const [cart, setCart] = useState(cartItems) 

  const addToCart = product => {
    setCart(cart.map((item) => {
      if(item.id === product){
        return {
          id: item.id,
          image: item.image,
          title: item.title,
          price: item.price,
          quantity: ++item.quantity
        }
      }
        
      else
        return {
          id: item.id,
          image: item.image,
          title: item.title,
          price: item.price,
          quantity: item.quantity
        }
    }))
  }

  const remove = product => {
    setCart(cart.map((item) => {
      if(item.id === product){
        return {
          id: item.id,
          image: item.image,
          title: item.title,
          price: item.price,
          quantity: 0
        }
      }
        
      else
        return {
          id: item.id,
          image: item.image,
          title: item.title,
          price: item.price,
          quantity: item.quantity
        }
    }))
  }

  const removeProduct = (productid) => {
    setCart(cart.map((item) => {
      if(item.id === productid)
        return {
          id: item.id,
          image: item.image,
          title: item.title,
          price: item.price,
          quantity: --item.quantity
        }
      else
        return {
          id: item.id,
          image: item.image,
          title: item.title,
          price: item.price,
          quantity: item.quantity
        }
    }))
  }
  const classes = useStyles()
  useEffect(() => {
    const data = localStorage.getItem('cart-items');
    if(data){
      setCart(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart-items', JSON.stringify(cart));
  });

  return (
    <App>
      <Head>
        <title>Product listing Page</title>
      </Head>
      <>
        <NextJsTraining />
        <div className={classes.root}>
      <div className={classes.content}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={9}>
            <Grid container spacing={4}>
            {data.products.map((product, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
            <ProductCard key={index} product={product}>
              <button key={product.id} className={classes.button} onClick={() => addToCart(product.id)}>Add to cart</button>
            </ProductCard>
            </Grid>
            ))}   
            </Grid>
            </Grid>
      <Grid item xs={12} sm={6} md={3}>     
      <Box display={{ xs: 'block', sm: 'block', md: 'block' }} style={{flex: 'auto', marginLeft:'30px'}}>  
      <div className={classes.cart}>
      <Cart cart={cart.filter((e) => {
            return e.quantity > 0
          })} increment={addToCart} decrement={removeProduct} remove={remove}>
      </Cart>
      </div>
      </Box>
      </Grid>
      </Grid>
      </div>
      </div>
      </>
    </App>
) 
}

export default WelcomePage