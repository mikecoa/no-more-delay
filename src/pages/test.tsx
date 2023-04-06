import React from "react";

import Link from "next/link";

import { Container } from "@components/StyledComponents";
import { setHasTested } from "@redux/auth/authSlice";
import { setAnswer, setTestState } from "@redux/test/testSlice";
import { arrayRange } from "@utils/helper";
import { useDispatch, useSelector } from "@utils/hooks";

const TestPage = () => {
  const { test } = useSelector((state) => state);

  const { questionnaires, testState } = test;

  const dispatch = useDispatch();

  const renderQuestions = () =>
    questionnaires.map((item) => {
      const handleClick = (answer: number) => () =>
        dispatch(
          setAnswer(
            questionnaires.map((toBeFiltered) =>
              toBeFiltered.question === item.question
                ? { ...toBeFiltered, answer }
                : toBeFiltered,
            ),
          ),
        );
      return (
        <Container key={item.question} column>
          <h4>{item.question}</h4>
          <p>{`answer:${item.answer}`}</p>
          <Container>
            {arrayRange(-3, 3, 1).map((val) => (
              <button key={val} type="button" onClick={handleClick(val)}>
                {val}
              </button>
            ))}
          </Container>
        </Container>
      );
    });

  const renderPrelim = () => (
    <div>
      <h1>Find out who you are</h1>
      <div>
        <h1>contenst</h1>
      </div>

      <button type="button" onClick={() => dispatch(setTestState("ongoing"))}>
        Start Testing
      </button>
    </div>
  );
  const renderOngoing = () => (
    <div>
      <h1>Follow the questions Answer with your first impression</h1>
      <Container gap={50} column>
        {renderQuestions()}
      </Container>
      <button
        type="button"
        onClick={() => {
          dispatch(setTestState("finished"));
          dispatch(setHasTested(true));
        }}
      >
        Submit
      </button>
    </div>
  );
  const renderFinished = () => (
    <div>
      <h1>Now you know your personality</h1>
      <p>Excited to meet who has the same thought with you?</p>
      <Link href="/">Start Matching</Link>
    </div>
  );

  if (testState === "ongoing") return renderOngoing();
  if (testState === "finished") return renderFinished();
  return renderPrelim();
};

export default TestPage;
