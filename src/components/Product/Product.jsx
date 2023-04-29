import React from 'react';
import './Product.css'

const Product = (props) => {
    const {img, name, seller, quantity, price, ratings} = props.product;

   const handleAddToCart = props.handleAddToCart
    
    return (
        <div className='product'>
           <img src={img} alt="" />
           <div className="product-info">
           <h4 className='product-name'>{name}</h4>
           <p><b>Price: </b>${price}</p>
           <p><b>Manufacturer: </b>{seller}</p>
           <p><b>Rating:</b> {ratings}⭐</p>
           </div>
            <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>Add to cart</button>
        </div>
    );
};

export default Product;