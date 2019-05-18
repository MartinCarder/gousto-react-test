import React, { useEffect } from "react";
import { connect } from "react-redux";

import { categoryFetch } from "redux/products/categories/actions";
import { productsFetch } from "redux/products/actions";

export const Product = ({ getCategory, getProducts }) => {
  useEffect(() => {
    getCategory();
    getProducts();
  }, []);
  return <div>Product</div>;
};

export const mapDispatchToProps = {
  getCategory: categoryFetch,
  getProducts: productsFetch,
};

export default connect(
  null,
  mapDispatchToProps
)(Product);
