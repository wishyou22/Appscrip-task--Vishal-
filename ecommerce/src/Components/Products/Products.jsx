import React, { useEffect, useState } from 'react';
import './Products.css';
import Dropdown from '../SideBar/Dropdown';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {

    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div >
        {/* <div className='parent-product-container'>
            <div></div>
            <div><Dropdown/></div>
        </div> */}
        <div className="products-container">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.title} className="product-image" />
          <h3 className="product-title">{product.title}</h3>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Products;
