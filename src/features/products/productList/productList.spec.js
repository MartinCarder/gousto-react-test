import React from "react";
import { shallow } from "enzyme";

import ProductList from "./productList";
import Product from "./product";

describe("ProductList", () => {
  let wrapper;
  const props = {
    products: [
      {
        title: "A title",
        description: "A description",
        id: "1"
      },
      {
        title: "A title",
        description: "A description",
        id: "2"
      }
    ]
  };

  beforeEach(() => {
    wrapper = shallow(<ProductList {...props} />);
  });

  it("Renders and matches snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("Displays correct number of products", () => {
    expect(wrapper.find(Product).length).toEqual(2);
  });

  it("Firing toggleOpenProduct prop on Product sets open to true", () => {
    wrapper.find(Product).at(0).props().toggleOpenProduct("1");
    expect(wrapper.find(Product).at(0).props().open).toEqual(true)
  });

  it("Firing toggleOpenProduct prop on Product twice sets open to false", () => {
    wrapper.find(Product).at(0).props().toggleOpenProduct("1");
    expect(wrapper.find(Product).at(0).props().open).toEqual(true)

    wrapper.find(Product).at(0).props().toggleOpenProduct("1");
    expect(wrapper.find(Product).at(0).props().open).toEqual(false)
  })
});
