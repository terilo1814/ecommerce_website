import './Products.css'
import React, { useState } from 'react'

export const Products = () => {
    const [itemList, setItemList] = useState([
        {
            title: 'Colors',
            price: 100,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        },
        {
            title: 'Black and white Colors',
            price: 50,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        },
        {
            title: 'Yellow and Black Colors',
            price: 70,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        },
        {
            title: 'Blue Color',
            price: 100,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        }
    ])

    return (
        <div className="products-container">
            {itemList.map((item) =>
                <div className="product" key={item.title}>
                    <img className="product-image" src={item.imageUrl} alt={item.title} />
                    <h2 className="product-title">{item.title}</h2>
                    <p className="product-price">Price: {item.price}</p>
                </div>
            )}
        </div>
    );
      
    
}
