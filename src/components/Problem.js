import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import { Container, Title } from "../styled";

const Input = styled.input`
  background: #e2e2e2;
  border-radius: 10px;
  padding: 10px;
  outline: none;
  text-align: center;
  width: 70%;
  font-size: 5rem;
  border: none;
  font-family: Zen Antique Soft, serif;
  @media (max-width: 928px) {
    font-size: 2rem;
  }
`;

const Button = styled.button`
  background: #30d3ff;
  color: white;
  border-radius: 10px;
  box-shadow: 0px 2px 20px -5px rgba(0, 0, 0, 0.25);
  border: none;
  width: 30%;
  padding: 10px 20px;
  cursor: pointer;
  @media (max-width: 928px) {
    width: 70%;
  }
`;

function Problem({ submit, ProblemReq }) {
  const [problem, setProblem] = useState("");

  const submitProblem = () => {
    const regex = problem.split(/[a-zA-Z+=]/g).filter((d) => d != "");

    ProblemReq(regex);
    return submit();
  };
  return (
    <Container>
      <Input
        placeholder="Ax+By = C"
        value={problem}
        onChange={(e) => setProblem(e.target.value)}
      />
      <Button onClick={submitProblem}>
        <Title>คำนวณ</Title>
      </Button>

      <Title>ผลเฉลยที่มีความเป็นไปได้</Title>
      <Title>( -1, 1, 1), ( 3, -2, 1 ) (-2, 3, 0 ) (2, 0, 0)</Title>

      <Title>ผลเฉลยที่มีค่านอร์มน้อยที่สุด</Title>
      <Title>(2, 0, 0)</Title>
    </Container>
  );
}

export default Problem;
