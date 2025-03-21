import React from "react";
import '../styles/propcomp.css';

const ProductCard = ({title, Description}) => {
  return(
    <div className="card">
        <h2>{title}</h2>
        <p>{Description}</p>
    </div>
  )
}

export default ProductCard;