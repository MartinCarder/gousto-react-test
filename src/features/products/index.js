import React, { useEffect, useState, useMemo } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { categoryFetch } from "redux/products/categories/actions";
import { productsFetch } from "redux/products/actions";
import {
  getCategories,
  getCategoriesStatus
} from "redux/products/categories/selectors";
import { getCategoryProducts } from "redux/products/selectors";
import ProductPresentation from "./presentation";

export const Product = ({
  getCategory,
  getProducts,
  categories,
  products,
  productId
}) => {
  useEffect(() => {
    getCategory();
    getProducts();
  }, []);

  const [search, setSearch] = useState("");

  useEffect(() => {
    setSearch("");
  }, [productId]);

  const filterProducts = useMemo(
    () =>
      products.filter(product => {
        return (
          product.title.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
          product.description.toLowerCase().indexOf(search.toLowerCase()) !== -1
        );
      }),
    [search, products]
  );

  return (
    <ProductPresentation
      categories={categories}
      products={filterProducts}
      search={search}
      setSearch={setSearch}
    />
  );
};

export const mapStateToProps = (state, props) => ({
  categories: getCategories(state),
  categoriesStatus: getCategoriesStatus(state),
  products: getCategoryProducts(state, props.match.params.productId),
  productId: props.match.params.productId
});
export const mapDispatchToProps = {
  getCategory: categoryFetch,
  getProducts: productsFetch
};

Product.propTypes = {
  categoriesStatus: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  ).isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product);
