import styled from "styled-components";

export const Button = styled.button`
  padding: 0.3rem 1rem;
  border: 0.1rem solid
    ${(props) => (props.cart ? "orange" : "var(--lightBlueColor)")};
  border-radius: 0.5rem;
  background: transparent;
  color: ${(props) => (props.cart ? "orange" : "var(--lightBlueColor)")};
  font-size: 17px;
  margin: 3px;
  &:hover {
    background: ${(props) =>
      props.cart ? "orange" : "var(--lightBlueColor)"} !important;
    color: var(--whiteColor);
  }
`;
