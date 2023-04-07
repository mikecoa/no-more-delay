import { Button, Modal, Typography } from "antd";
import NextLink from "next/link";
import styled from "styled-components";

import Image from "@components/Image";
import { Container, Grid } from "@components/StyledComponents";
import { ImgPaths, getImg } from "@utils/getImg";
import { useDispatch, useSelector } from "@utils/hooks";
import { activityData } from "@utils/data";
import { useState } from "react";
import ProfileForm from "@components/ProfileForm";
import { useRouter } from "next/router";
import { setModal } from "@redux/modal/modalSlice";

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
  const { auth, modal } = useSelector((state) => state);
  const { userDetail } = modal;

  const router = useRouter();
  const dispatch = useDispatch();

  const { hasTested } = auth;

  const { Title } = Typography;

  const renderTest = () => (
    <TestContainer>
      <Image alt="group" src={getImg("group")} />
      <SmallerContainer>
        <h1>Explore</h1>
        <Button
          type="primary"
          onClick={() => {
            if (auth.username === "")
              dispatch(setModal({ userDetail: true, paymentDetail: false }));
            else router.push("/test");
          }}
        >
          Start Matching
        </Button>
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
      <Modal
        open={userDetail}
        onCancel={() =>
          dispatch(setModal({ userDetail: false, paymentDetail: false }))
        }
        footer={null}
      >
        <ProfileForm />
      </Modal>
    </div>
  );
};

export default HomePage;
