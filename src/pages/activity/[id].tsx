import React from "react";

import { Button, Modal } from "antd";
import { useRouter } from "next/router";

import Image from "@components/Image";
import PaymentForm from "@components/PaymentForm";
import { setActivities } from "@redux/activity/activitySlice";
import { setModal } from "@redux/modal/modalSlice";
import { activityData } from "@utils/data";
import { getImg } from "@utils/getImg";
import { useDispatch, useSelector } from "@utils/hooks";

const ActivityDetails = () => {
  const router = useRouter();
  const activityId = Number(router.query.id);

  const data: any = activityData.find((activity) => activity.id === activityId);
  const { img, name, des, cost, date } = data;

  const { activity, modal } = useSelector((state) => state);

  const { joinedActivities } = activity;
  const { paymentDetail } = modal;

  const dispatch = useDispatch();

  const isJoined =
    joinedActivities.find((item) => item.id === activityId) !== undefined;

  const handleClick = () => {
    dispatch(setModal({ paymentDetail: true, userDetail: false }));
  };

  const handleJoin = () => {
    dispatch(setActivities([...joinedActivities, { id: activityId, name }]));
  };
  const handleLeave = () => {
    const newActivities = joinedActivities.filter(
      (item) => item.id !== activityId,
    );
    dispatch(setActivities(newActivities));
  };
  return (
    <>
      <Image alt={img} src={getImg(img)} />
      <div style={{ alignItems: "center", display: "flex", gap: "10px" }}>
        <h1>{name}</h1>
        <p style={{ border: "2px solid black", padding: 3 }}>
          {isJoined ? "You have joined" : "You have not joined"}
        </p>
      </div>
      <h2>Date: {date}</h2>
      <h2>HKD ${cost}</h2>
      <h4>{des}</h4>

      {isJoined ? (
        <Button type="primary" onClick={handleLeave}>
          Leave activity
        </Button>
      ) : (
        <Button type="primary" onClick={handleClick}>
          Join activity
        </Button>
      )}
      <Modal
        footer={null}
        open={paymentDetail}
        onCancel={() =>
          dispatch(setModal({ paymentDetail: false, userDetail: false }))
        }
      >
        <PaymentForm onFinish={handleJoin} />
      </Modal>
    </>
  );
};

export default ActivityDetails;
