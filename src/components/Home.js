import React, { Fragment, useState, useEffect } from 'react';
import Sidebar from "./Sidebar/Sidebar";
import ProductList from "./Products/ProductList/ProductList";
import Loader from "./Loader";
import css from "./Home.css";
import axios from "axios";

const Home = () => {
    const [products, setProducts] = useState([]);
    const [loadingState, setLoadingState] = useState(false);

    useEffect(() => {
        setLoadingState(true);

        axios
            .get('https://fakestoreapi.com/products?limit=20')
            .then(res => {
                setProducts(res.data);
                setLoadingState(false);
            })
    }, [])

    return (
        loadingState ?
            <Loader />
            :
            <Fragment>
                <Sidebar />
                <div className="col-sm-9 col-md-9 col-lg-9">
                    <ProductList
                        productsProps={products}
                    />
                </div>
            </Fragment>
    )
}

export default Home
