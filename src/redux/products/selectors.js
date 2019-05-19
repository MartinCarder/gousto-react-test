import { createSelector } from "reselect";

const getProducts = state => state.products.products;

const getSelectedCategory = (state, categoryId) => categoryId;

export const getCategoryProducts = createSelector(
  [getProducts, getSelectedCategory],
  (products, categoryId) =>
    products.filter(
      product =>
        product.categories.filter(category => category.id === categoryId).length
    )
);
