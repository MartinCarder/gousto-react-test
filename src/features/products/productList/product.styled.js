import styled from "styled-components";

export const Title = styled.div`
  font-weight: ${props => props.open ? "bolder" : "normal"};
  margin-bottom: 5px;
  cursor: pointer;
`;

export const Description = styled.div`
    margin-bottom: 20px;
`
