import React from "react";
import PropTypes from "prop-types";

const Product = ({ title, description, open, toggleOpenProduct, id }) => {
  const productClick = () => toggleOpenProduct(id);
  return (
    <div onClick={productClick}>
      {title}
      {open && <div>{description}</div>}
    </div>
  );
};

Product.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  toggleOpenProduct: PropTypes.func.isRequired
};

export default Product;
