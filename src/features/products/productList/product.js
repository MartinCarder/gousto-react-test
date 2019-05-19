import React from "react";
import PropTypes from "prop-types";

import { Description, Title } from "./product.styled"

const Product = ({ title, description, open, toggleOpenProduct, id }) => {
  const productClick = () => toggleOpenProduct(id);
  return (
    <div onClick={productClick}>
      <Title open={open}>{title}</Title>
      {open && <Description>{description}</Description>}
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
