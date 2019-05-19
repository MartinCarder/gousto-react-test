import React from "react";
import CategoryPresentation from "./categories";
import ProductList from "./productList";

export default ({ categories, products }) => (
  <>
    <CategoryPresentation categories={categories} />
    <ProductList products={products} />
  </>
);
