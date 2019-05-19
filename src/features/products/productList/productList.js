import React, { useState } from "react";
import PropTypes from "prop-types";

import Product from "./product";

const ProductList = ({ products }) => {
  const [openProducts, setOpenProducts] = useState([]);

  const toggleOpenProduct = productId => {
    let newOpenProducts = [];
    if (openProducts.includes(productId)) {
      newOpenProducts = openProducts.filter(product => product !== productId);
    } else {
      newOpenProducts = [...openProducts, productId];
    }

    setOpenProducts(newOpenProducts);
  };

  return (
    <div>
      {products.map(product => (
        <Product
          key={product.id}
          title={product.title}
          description={product.description}
          open={openProducts.includes(product.id)}
          toggleOpenProduct={toggleOpenProduct}
          id={product.id}
        />
      ))}
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  ).isRequired
};

export default ProductList;
