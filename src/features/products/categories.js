import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const CategoryPresentation = ({ categories }) => (
  <div>
    {categories.map(category => (
      <div key={category.id}>
        <NavLink to={`/products/${category.id}`}>{category.title}</NavLink>
      </div>
    ))}
  </div>
);

CategoryPresentation.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired
};

export default CategoryPresentation;
