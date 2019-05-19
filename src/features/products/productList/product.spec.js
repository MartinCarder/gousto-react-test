import React from "react";
import { shallow } from "enzyme";

import Product from "./product";
import { Description, Title } from "./product.styled";

describe("Product", () => {
  let wrapper;
  const props = {
    title: "A title",
    description: "A description",
    open: false,
    toggleOpenProduct: jest.fn(),
    id: "1234"
  };

  beforeEach(() => {
    wrapper = shallow(<Product {...props} />);
    jest.resetAllMocks();
  });

  it("Renders and matches snapshoot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("displays correct title", () => {
    expect(wrapper.find(Title).text()).toEqual(props.title);
  });

  it("Don't show description if open false", () => {
    expect(wrapper.find(Description).length).toEqual(0);
  });

  it("Show description if open true", () => {
    wrapper.setProps({
      open: true
    });
    expect(wrapper.find(Description).length).toEqual(1);
  });

  it("Show correct description if open true", () => {
    wrapper.setProps({
      open: true
    });
    expect(wrapper.find(Description).text()).toEqual(props.description);
  });

  it("Clicking on title fires toggleOpenProduct with id", () => {
      wrapper.simulate('click');

      expect(props.toggleOpenProduct.mock.calls.length).toEqual(1);
      expect(props.toggleOpenProduct.mock.calls[0][0]).toEqual(props.id)
  })
});
