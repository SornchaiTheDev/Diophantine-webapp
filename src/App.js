import axios from "axios";
import { useState, useEffect } from "react";
import MoreX from "./components/MoreX";
import styled from "styled-components";
import { Container, Text, Flex, Card, Button, Input } from "./styled";

function Problem({ submit, ProblemReq }) {
  const [problem, setProblem] = useState([
    { x: 1, value: "" },
    { x: 2, value: "" },
  ]);
  const [ans, setAns] = useState("");
  const [allDigit, setAllDigit] = useState(0);
  const [randomWord, setRandomWord] = useState([]);

  //Status Form Check
  const [isSolve, setIsSolve] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  // After Solve
  const [count, setCount] = useState(2);
  const [min, setMin] = useState([]);
  const [firstStep, setFirstStep] = useState({});
  const [hasAns, setHasAns] = useState(false);
  const [finalANS, setFinalAns] = useState([]);
  const [clear, setClear] = useState("");

  const submitProblem = () => {
    setIsSubmit(true);
    setIsSolve(false);
    setCount(2);
    const joinProblem = [];
    problem
      .sort((a, b) => a.x - b.x)
      .map((variable) => {
        if (variable.value !== "") joinProblem.push(variable.value);
      });

    axios
      .get(
        `https://diophantine-pkw.as.r.appspot.com?type=problem&p=${joinProblem.join(
          ","
        )},${ans}`
      )
      .then((res) => {
        setMin(res.data.final);
        setFinalAns(res.data.results);
        setFirstStep(res.data.firstStep);
        setHasAns(res.data.err !== "NO_ANS");
      });
    setAllDigit(joinProblem.length);
  };

  const createRandomWord = () => {
    const words = [
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
    ];

    words.map((word) => {
      for (let i = 1; i <= allDigit; i++) {
        word.push(Math.floor(Math.random() * 10));
      }
    });
    setRandomWord(words);
  };

  useEffect(() => {
    let countdown = null;
    if (isSubmit) {
      countdown = setInterval(() => {
        if (count >= 1) setCount((prev) => prev - 1);
        else {
          setIsSubmit(false);
          setIsSolve(true);
          hasAns && setRandomWord(finalANS);
        }
      }, 1000);
    }

    return () => clearInterval(countdown);
  }, [count, isSubmit, hasAns]);

  useEffect(() => {
    let timeout;
    if (isSubmit) {
      timeout = setInterval(() => {
        createRandomWord();
      }, 300);
    }

    return () => clearInterval(timeout);
  }, [isSubmit]);

  const setXValue = ({ x, value }) => {
    if (value === "") return;
    const other = problem.filter((variable) => variable.x !== x);

    if (
      problem.some((variable) => variable.x === x) &&
      problem.find((variable) => variable.x === x + 1)
    )
      setProblem([...other, { x, value }]);
    else setProblem([...other, { x, value }, { x: x + 1, value: "" }]);
  };

  const removeEmpty = () => {
    const allProblem = problem.filter((variable) => variable.value !== "");
    setProblem(allProblem);
  };

  useEffect(() => {
    setProblem([
      { x: 1, value: "" },
      { x: 2, value: "" },
    ]);
    setAns("");
    setIsSolve(false);
    setIsSubmit(false);
    setCount(2);
    setRandomWord([]);
  }, [clear]);

  return (
    <div className="container mx-auto max-w-xl md:max-w-5xl  h-screen ">
      <div className="mt-10 flex flex-row flex-wrap gap-4 justify-center items-center ">
        {problem.map((d, index) => (
          <MoreX now={index + 1} add={setXValue} clear={clear} />
        ))}

        <h1 className="text-5xl">=</h1>
        <input
          value={ans}
          onChange={(e) => setAns(e.target.value)}
          disabled={isSubmit}
          className="bg-gray-200 p-4 outline-none rounded-lg w-16 text-3xl"
        />
      </div>
      <div className="mt-10 flex flex-row flex-wrap gap-2 justify-center items-center">
        <button
          className=" bg-blue-400 rounded-lg p-4  shadow-lg"
          onClick={() => (!isSubmit && submitProblem(), removeEmpty())}
          submit={isSubmit}
        >
          <h1 className="text-xl text-center text-white font-normal">คำนวณ</h1>
        </button>
        <button
          className=" bg-red-400 rounded-lg p-4  shadow-lg"
          onClick={() => setClear(new Date().getTime())}
        >
          <h1 className="text-xl text-center text-white font-normal">
            เคลียร์
          </h1>
        </button>
      </div>
      {randomWord.length > 0 && (
        <div className="flex flex-row flex-wrap p-10 justify-center items-center gap-4 max-h-52 overflow-auto my-10">
          {randomWord.map((word) => (
            <h1 className="text-2xl">({word.join(",")}),</h1>
          ))}
        </div>
      )}

      {isSolve && hasAns ? (
        <div className="flex flex-col  gap-4 justify-center items-center py-5">
          <div className="flex flex-col justify-center items-center gap-6">
            <h1 className="text-xl font-semibold">หรม. (GCD)</h1>

            <h1 className="text-4xl font-semibold">{firstStep.gcd}</h1>
          </div>
          <div className="flex flex-col justify-center items-center gap-6">
            <h1 className="text-xl font-semibold">พิกัดของนอร์ม</h1>
            <div className="flex flex-row flex-wrap justify-center">
              <p className="text-3xl font-semibold">(</p>
              {firstStep.norm.map((pos, index) => {
                if (index + 1 !== firstStep.norm.length)
                  return <p className="text-3xl font-semibold">{pos},</p>;
                else return <p className="text-3xl font-semibold">{pos}</p>;
              })}
              <p className="text-3xl font-semibold">)</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-6">
            <h1 className="text-xl font-semibold">
              ผลเฉลยที่มีค่านอร์มน้อยที่สุด
            </h1>
            <div className="flex flex-row justify-center items-center flex-wrap gap-4">
              {min.map((data) => (
                <h1 className="text-4xl font-semibold">
                  ({data.slice(0, -1).join(",")})
                </h1>
              ))}
            </div>
          </div>
        </div>
      ) : (
        isSolve && (
          <h1 className="text-red-500 text-xl font-bold text-center mt-6">
            ไม่มีคำตอบที่เป็นจำนวนเต็ม !
          </h1>
        )
      )}
    </div>
  );
}

export default Problem;
