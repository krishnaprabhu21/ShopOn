import React from 'react';
import css from "./Product.css";
import { Link } from "react-router-dom";
import { MdAddShoppingCart } from "react-icons/md";
import ReactStars from "react-rating-stars-component";

const Product = (props) => {
    const { product } = props;

    console.log("product", product);

    return (
        <div>
            <Link to={`/product/${product.id}`}>
                <img src={product.image}
                    alt={product.title}
                    className="product__img" />
            </Link>
            <br />

            <div className="product_details">
                <span className="product_title">
                    {/* {product.title} */}
                        Hi
                </span>
                <br />

                <span className="product_name">
                    {product.category}
                </span>
                <br />

                <ReactStars
                    count={5}
                    // onChange={ratingChanged}
                    size={21}
                    activeColor="#000"
                />
            </div>

            <div className="product_details">
                <span className="product__price">
                    ${product.price}
                </span>
                <br />

                <MdAddShoppingCart />
            </div>

        </div>
    )
}

export default Product
