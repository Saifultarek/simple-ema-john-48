import React from 'react';
// import { useEffect, useState } from 'react';
import { useEffect, useState } from 'react';
import Product from '../Product/Product';
import '../Shop/Shop.css';
import Cart from './Cart/Cart';

const Shop = () => {
    const url = 'https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON'
    //data load
    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data));
    }
        , [])
    //console.log(product);

    const handleAddToCart = (product) => {
        // console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }



    return (
        <div className="shop-container">
            <div className="product-container">
                <h3>product:{products.length}</h3>
                {
                    products.map(product => <Product
                        key={product.key}
                        product={product}
                        handleAddToCart = {handleAddToCart}
                        >
                        
                    </Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>

            </div>

        </div>
    );
};

export default Shop;