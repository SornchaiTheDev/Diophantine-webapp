import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Text, Flex } from "../styled";

const Input = styled.input`
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
function MoreX({ now, add, clear }) {
  const [x, setX] = useState("");
  const [active, setActive] = useState(false);
  const setXValue = (e) => {
    const value = e.target.value;

    add({ x: now, value });
  };
  useEffect(() => {
    setX("");
  }, [clear]);
  return (
    <div className="flex flex-row items-center justify-start gap-2">
      {now > 1 && (
        <Text size={2} color={active ? "black" : "rgba(0,0,0,0.05)"}>
          +
        </Text>
      )}

      <input
        onClick={() => setActive(true)}
        value={x}
        onChange={(e) => setX(e.target.value)}
        onBlur={setXValue}
        className="bg-gray-200 p-4 outline-none rounded-lg w-16 text-3xl"
        //   background: active ? "#e2e2e2" : "rgba(0,0,0,0.05)",
      />

      <div style={{ display: "flex", alignItems: "flex-end" }}>
        <Text size={2} color={active ? "black" : "rgba(0,0,0,0.05)"}>
          x
        </Text>
        <Text color={active ? "black" : "rgba(0,0,0,0.05)"}>{now}</Text>
      </div>
    </div>
  );
}

export default MoreX;
