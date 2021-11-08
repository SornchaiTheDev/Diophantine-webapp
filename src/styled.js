import styled from "styled-components";
export const Text = styled.h1`
  color: ${(props) => (props.color ? props.color : "black")};
  font-size: ${(props) => (props.size ? props.size : 1)}rem;
  font-family: Kanit, sans-serif;
  font-weight: ${(props) => (props.weight ? props.weight : "normal")};
`;

export const Container = styled.div`
  height: 100vh;
  display: flex;
  width : 90%:
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 50px;
  align-items: center;
`;

export const Flex = styled.div`
  width: 100%;
  display: flex;
  gap: ${(props) => (props.gap ? props.gap : 0)}px;
  flex-direction: ${(props) => (props.direction ? props.direction : "column")};
  flex-wrap: ${(props) => (props.wrap ? props.wrap : "no-wrap")};
  justify-content: ${(props) => (props.justify ? props.justify : "flex-start")};
  align-items: ${(props) => (props.align ? props.align : "flex-start")};
`;

export const Card = styled.div`
  padding: 10px;
  // width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "100%")};
  background-color: white;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : "column")};
  justify-content: ${(props) => (props.justify ? props.justify : "flex-start")};
  align-items: ${(props) => (props.align ? props.align : "flex-start")};
  gap: 20px;
  box-shadow: 0px 4px 20px -2px rgba(0, 0, 0, 0.25);
`;

export const Divider = styled.span`
  width: 70%;
  height: 10px;
  border-bottom: 3px dashed white;
`;


export const Button = styled.button`
  background: ${(props) => (props.submit ? "lightgrey" : "#30d3ff")};
  color: ${(props) => (props.submit ? "white" : "black")};
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

export const Input = styled.input`
  background: #e2e2e2;
  border-radius: 10px;
  padding: 10px;
  outline: none;
  text-align: center;
  width: 10%;
  font-size: 3rem;
  border: none;
  font-family: Zen Antique Soft, serif;
  @media (max-width: 928px) {
    font-size: 2rem;
  }
`;
