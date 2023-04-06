import React from "react";

import { useRouter } from "next/router";

import Image from "@components/Image";
import { setActivities } from "@redux/activity/activitySlice";
import { getImg } from "@utils/getImg";
import { useDispatch, useSelector } from "@utils/hooks";

const ActivityDetails = () => {
  const router = useRouter();
  const activityId = Number(router.query.id);

  const { joinedActivities } = useSelector((state) => state.activity);

  const dispatch = useDispatch();

  const isJoined =
    joinedActivities.find((item) => item.id === activityId) !== undefined;

  const handleJoin = () => {
    dispatch(setActivities([...joinedActivities, { id: activityId }]));
  };
  const handleLeave = () => {
    const newActivities = joinedActivities.filter(
      (item) => item.id !== activityId,
    );
    dispatch(setActivities(newActivities));
  };
  return (
    <>
      <Image alt="dog" src={getImg("dog")} />
      <p>Activity {activityId}</p>
      <p>{isJoined ? "Joined" : "not joined"}</p>

      {isJoined ? (
        <button type="button" onClick={handleLeave}>
          Leave activity
        </button>
      ) : (
        <button type="button" onClick={handleJoin}>
          Join activity
        </button>
      )}
    </>
  );
};

export default ActivityDetails;
