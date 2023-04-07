import React from "react";

import Link from "next/link";

import { Container } from "@components/StyledComponents";
import { setHasTested } from "@redux/auth/authSlice";
import { setAnswer, setTestState } from "@redux/test/testSlice";
import { arrayRange } from "@utils/helper";
import { useDispatch, useSelector } from "@utils/hooks";
import styled from "styled-components";
import { getImg } from "@utils/getImg";
import Image from "@components/Image";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Button, notification } from "antd";

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
          <Container>
            {arrayRange(-3, 3, 1).map((val) => (
              <button
                style={{
                  borderRadius: "50%",
                  aspectRatio: 1,
                  background: "none",
                  border: "2px solid",
                  borderColor: val < 0 ? "red" : val === 0 ? "gray" : "green",
                  width: 25 + Math.abs(val * 4),
                  backgroundColor: item.answer === val ? "lightblue" : "white",
                }}
                key={val}
                type="button"
                onClick={handleClick(val)}
              >
                {val}
              </button>
            ))}
          </Container>
        </Container>
      );
    });

  const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr 2fr 1fr 2fr;
    place-items: center;

    & > div {
      display: flex;
      height: 100%;
      flex-direction: column;
      gap: 20px;
      text-align: center;
    }
  `;

  const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    gap: 20px;
    padding: 50px;
  `;

  const renderPrelim = () => (
    <FlexContainer>
      <h1>Find out who you are</h1>
      <GridContainer>
        <div>
          <h4>1. MBTI</h4>
          <Image src={getImg("mbti")} alt="mbti" />
          <ul>
            <li>20 mins test</li>
            <li>Answer with your first impression</li>
          </ul>
        </div>
        <ArrowRightOutlined />
        <div>
          <h4>2. Personality</h4>
          <Image src={getImg("personality")} alt="personality" />
          <ul>
            <li>You will find out who you are</li>
          </ul>
        </div>
        <ArrowRightOutlined />
        <div>
          <h4>3. Matching</h4>
          <Image src={getImg("matching")} alt="matching" />
          <ul>
            <li>Start making new friends!!</li>
          </ul>
        </div>
      </GridContainer>

      <Button type="primary" onClick={() => dispatch(setTestState("ongoing"))}>
        Start Testing
      </Button>
    </FlexContainer>
  );
  const renderOngoing = () => (
    <FlexContainer>
      <h1>Follow the questions Answer with your first impression</h1>
      <Container gap={50} column>
        {renderQuestions()}
      </Container>
      <Button
        type="primary"
        onClick={() => {
          const isFinished =
            questionnaires.find((item) => item.answer === undefined) ===
            undefined;

          console.log(isFinished);

          if (isFinished) {
            dispatch(setTestState("finished"));
            dispatch(setHasTested(true));
          } else {
            notification.error({
              message: "Please answer all of the questions!",
            });
          }
        }}
      >
        Submit
      </Button>
    </FlexContainer>
  );
  const renderFinished = () => (
    <FlexContainer>
      <h1>Now you know your personality</h1>
      <p>Excited to meet who has the same thought with you?</p>
      <Image
        style={{ maxWidth: "600px", alignSelf: "center" }}
        src={getImg("start")}
        alt="start"
      />
      <Link href="/">
        <Button type="primary">Start Matching</Button>
      </Link>
    </FlexContainer>
  );

  if (testState === "ongoing") return renderOngoing();
  if (testState === "finished") return renderFinished();
  return renderPrelim();
};

export default TestPage;
