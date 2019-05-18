import React, { useEffect } from "react";
import { connect } from "react-redux";

import { categoryFetch } from "redux/products/categories/actions";

export const Product = ({ getCategory }) => {
  useEffect(() => {
    getCategory();
  }, []);
  return <div>Product</div>;
};

export const mapDispatchToProps = {
  getCategory: categoryFetch
};

export default connect(
  null,
  mapDispatchToProps
)(Product);
