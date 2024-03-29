import React from "react";
import { useHistory, useParams } from "react-router-dom";

import { ProductShowcase, PopularFlavors } from "../../components";

const Product = (props) => {
  const { slug, sizeOrBrand } = useParams();

  return (
    <>
      <ProductShowcase
        product={props.products.find((p) => p.product_slug === slug)}
        sizeOrBrand={sizeOrBrand}
      />
      <PopularFlavors featured={props.featured} featured2={props.featured2} />
    </>
  );
};

export default Product;
