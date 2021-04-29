import React, { useEffect, useState } from 'react';
import LoadProduct from '../LoadProduct/LoadProduct';
import CircularProgress from '@material-ui/core/CircularProgress';

const Home = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/events')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    

    return (
       <div className="container">
            <div className="row">
            
            {
                products.length === 0 && <CircularProgress color="secondary" />
            }
        {
            products.map(product =><LoadProduct product={product}></LoadProduct>)
        }
    </div>
       </div>
    );
};

export default Home;