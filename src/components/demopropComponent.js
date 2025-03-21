import React from "react";
import ProductCard from "../sharable/propcomp";

const DemoPropComp = () => {
  return (
    <div>
        <h1>Reusable Component</h1>
        <ProductCard title="Product Card" Description="Contains details about product and allows user to read more" />
    </div>
  )
}
export default DemoPropComp;