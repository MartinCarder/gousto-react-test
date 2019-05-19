import React from "react";
import PropTypes from "prop-types";

import { CategoryLink } from "./categories.styled";

const CategoryList = ({ categories }) => (
  <div>
    {categories.map(category => (
      <CategoryLink key={category.id} to={`/products/${category.id}`}>
        {category.title}
      </CategoryLink>
    ))}
  </div>
);

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired
};

export default CategoryList;
