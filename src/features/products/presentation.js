import React from "react";
import CategoryList from "./categories";
import ProductList from "./productList";
import { SearchInput } from "./presentation.styled";

export default ({ categories, products, search, setSearch }) => {
  const updateSearch = ev => setSearch(ev.target.value);
  return (
    <>
      <CategoryList categories={categories} />
      <SearchInput type="text" value={search} onChange={updateSearch} />
      <ProductList products={products} />
    </>
  );
};
