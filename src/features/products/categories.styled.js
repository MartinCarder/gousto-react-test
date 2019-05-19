import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const CategoryLink = styled(NavLink)`
  display: inline-block;
  color: black;
  text-decoration: none;
  margin: 0 20px 10px 0;

  &.active {
    font-weight: bolder;
    text-decoration: underline;
  }
`;
