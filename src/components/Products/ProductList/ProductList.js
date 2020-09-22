import React from 'react';
import Product from "../Product/Product";
import css from "./ProductList.css";

const ProductList = (props) => {
    const { productsProps } = props;

    return (
        <div className="flex__container">
            {productsProps.map(product => (
                <Product
                    key={product.id}
                    product={product}
                />
            ))}
        </div>
    )
}

export default ProductList
