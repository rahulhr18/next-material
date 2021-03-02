import React from 'react'
import Head from 'next/head'
import { App } from '@src/app'
import { useStyles } from '../../src/components/product-card/style'
import { NextJsTraining } from '@src/components/next-training/nextjs-training'
import { ProductCard } from '@src/components/product-card/product-card'
import data from '../../public/products.json'
import {useState} from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

const ProductDetails: React.FC = ({product}) => {
  const [value,setValue]=useState('');
  
  const handleSelect=(e)=>{
    setValue(e)
  }

  const newavail = product.variants.filter(isAvail => isAvail.title === value);
  const avail = newavail.map(avail => avail.available);
  const styles = useStyles()
  const options = (product.variants);
  return (
    <App>
      <Head>
        <title>Product detail Page</title>
      </Head>
      <>
      <NextJsTraining />
    <div className={styles.container} key={product.id}>
      <main className={styles.main}>
        <div>
          <img className={styles.imgnew} src={product.img} alt="tshirts" />
        </div>
        <div className={styles.proddet}>
          <h3>
            {product.title }
          </h3>
          <span dangerouslySetInnerHTML={{ __html: product.body_html}} />
          <br/>
          <p><b>Vendor:</b> {product.vendor}</p>
          <b>Variant:</b><DropdownButton
                alignRight
                title={value}
                name="variant"
                key={product.id}
                label="variant"
                id="dropdown-menu-align-right"
                onSelect={handleSelect}
            >
            {product.variants.map((variant, index) => 
                  <Dropdown.Item key={variant.id} eventKey={variant.title}>{variant.title}</Dropdown.Item>)}
            </DropdownButton>
            <br/>
         <p><b>Available:</b> {(avail).toString()}</p>
         <p className={styles.description}>
            <b>Price: $</b>{product.prod_price}
         </p>
      </div>
      </main>
    </div>
    </>
    </App>
  )
}

export const getStaticProps = async ({ params }) => {
  const productDet = data.products.filter((p) => p.handle.toString() === params.productId);
  return {
    props: {
      product: productDet[0],
    },
  };
}

export const getStaticPaths = async () => {
  const paths = data.products.map((product) => {
    const { id } = product;
    return {
      params: {
        productId: product.handle.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false
  };
}

export default ProductDetails
