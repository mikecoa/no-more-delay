import { Button, Typography } from "antd";
import NextLink from "next/link";
import styled from "styled-components";

import Image from "@components/Image";
import { Container, Grid } from "@components/StyledComponents";
import { ImgPaths, getImg } from "@utils/getImg";
import { useSelector } from "@utils/hooks";
import { activityData } from "@utils/data";

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

  const { Title } = Typography;

  const renderTest = () => (
    <TestContainer>
      <Image alt="group" src={getImg("group")} />
      <SmallerContainer>
        <h1>Explore</h1>
        <NextLink href="/test">
          <Button type="primary">Start Matching</Button>
        </NextLink>
      </SmallerContainer>
    </TestContainer>
  );

  const renderActivities = () => (
    <Grid>
      {activityData.map((item) => (
        <Container key={item.id} column>
          <Image alt={item.img} src={getImg(item.img)} />
          <div>
            <Title level={4}>{item.name}</Title>
            <NextLink href={`/activity/${item.id}`}>
              <Button type="primary">Details</Button>
            </NextLink>
          </div>
        </Container>
      ))}
    </Grid>
  );

  return (
    <div>
      {auth.username !== "" ? (
        <h1>Welcome, {auth.username}</h1>
      ) : (
        <h1>Please Log in first!</h1>
      )}
      {hasTested ? renderActivities() : renderTest()}
    </div>
  );
};

export default HomePage;
