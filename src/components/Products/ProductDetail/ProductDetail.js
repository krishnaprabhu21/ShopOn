import React, { useState, useEffect } from 'react';
import css from "./ProductDetail.css";
import axios from "axios";
import { Button } from 'react-bootstrap';
import { MdAddShoppingCart } from "react-icons/md";
import Loader from "../../Loader";

const ProductDetail = (props) => {
    const { match: { params: { id } } } = props;
    const [product, setProduct] = useState({});
    const [loadingState, setLoadingState] = useState(false);

    useEffect(() => {
        getProductByID();
    }, []);

    const getProductByID = () => {
        setLoadingState(true);

        axios
            .get(`https://fakestoreapi.com/products/${id}`)
            .then(res => {
                setProduct(res.data);
                setLoadingState(false);
            })
    }

    return (
        loadingState ?
            <Loader />
            :
            <div className="flex__container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6" id="product__img__container">
                        <img src={product.image}
                            alt={product.title}
                            className="product__detail__img" />
                    </div>

                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6" id="product__desc__container">
                        <p>{product.title}</p>
                        <h3 id="category">{product.category}</h3>

                        <p id="product__desc">{product.description}</p>

                        <div id="product__detail_actions">
                            <div>
                                <span>Price per unit</span> <br />
                                <h4 id="price">${product.price}</h4>
                            </div>

                            <Button variant="light" className="btn-sm" id="buy__now__btn">Buy Now</Button>

                            <MdAddShoppingCart />
                        </div>

                    </div>
                </div>
            </div>
    )
}

export default ProductDetail
