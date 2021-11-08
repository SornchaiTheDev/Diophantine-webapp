import React from "react";
import { Title, Container } from "../styled";
// show norm
function Solution({ problem }) {
  return (
    <Container id="sol">
      <Title>{problem}</Title>
      <Title>ผลเฉลยที่มีความเป็นไปได้</Title>
      <Title>( -1, 1, 1), ( 3, -2, 1 ) (-2, 3, 0 ) (2, 0, 0)</Title>

      <Title>ผลเฉลยที่มีค่านอร์มน้อยที่สุด</Title>
      <Title>(2, 0, 0)</Title>
    </Container>
  );
}

export default Solution;
