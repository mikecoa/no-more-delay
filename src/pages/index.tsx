import Link from "next/link";
import styled from "styled-components";

import Image from "@components/Image";
import { Container } from "@components/StyledComponents";
import { getImg } from "@utils/getImg";
import { arrayRange } from "@utils/helper";
import { useSelector } from "@utils/hooks";

const TestContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

const SmallerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HomePage = () => {
  const { auth } = useSelector((state) => state);

  const { hasTested } = auth;

  const renderTest = () => (
    <TestContainer>
      <Image alt="dog" src={getImg("dog")} />
      <SmallerContainer>
        <h5>Explore</h5>
        <p>No more delay</p>
        <Link href="/test">Start Matching</Link>
      </SmallerContainer>
    </TestContainer>
  );

  const renderActivities = () => (
    <Container>
      {arrayRange(1, 4, 1).map((val) => (
        <Container key={val} column>
          <Image alt="dog" src={getImg("dog")} />
          <div>
            <p>{`Activity ${val}`}</p>
            <Link href={`/activity/${val}`}>details...</Link>
          </div>
        </Container>
      ))}
    </Container>
  );

  return (
    <div>
      <h1>welcome to nomoredelay, {auth.username}</h1>
      {hasTested ? renderActivities() : renderTest()}
    </div>
  );
};

export default HomePage;
