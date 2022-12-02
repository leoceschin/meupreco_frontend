import React from "react";
import "./Product.css";

const Product = ({product}) => {
    return(
        <div className="container-product">
            <div className="container-img">
                <img src={product.imgUrl} alt={product.name}></img>
            </div>
            <div className="information">
                <span><h3>{product.name}</h3></span>
                <span className="price">Price: {product.price}</span>
                <button className="delete"><p>Excluir</p></button>
            </div>

        </div>

    )
}

export default Product