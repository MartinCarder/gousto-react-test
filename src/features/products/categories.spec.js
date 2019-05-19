import React from "react";
import { shallow } from "enzyme";

import CategoryList from "./categories";
import { CategoryLink } from "./categories.styled";

describe("CategoryList", () => {
  let wrapper;
  const props = {
    categories: [
      {
        id: "1",
        title: "Title 1"
      },
      {
        id: "2",
        title: "Title 2"
      }
    ]
  };

  beforeEach(() => {
    wrapper = shallow(<CategoryList {...props} />);
  });

  it("Renders and matches snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("Displays correct number of CategoryLink", () => {
    expect(wrapper.find(CategoryLink).length).toEqual(2);
  });

  it("CategoryLink display correct title", () => {
    expect(
      wrapper
        .find(CategoryLink)
        .at(0)
        .text()
    ).toEqual(props.categories[0].title);
  });

  it("CategoryLink uses correct link", () => {
    expect(
      wrapper
        .find(CategoryLink)
        .at(0)
        .props()
        .to
    ).toEqual(`/products/${props.categories[0].id}`);
  });
});
