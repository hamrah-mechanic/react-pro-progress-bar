import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: greenyellow;
  border-radius: 5px;
  font-size: 2rem;
`;
export default function HelloWorld() {
  return <Button onClick={() => alert("test")}>Hello! 2.0.9</Button>;
}
