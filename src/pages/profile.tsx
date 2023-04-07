import React from "react";

import { Button, notification } from "antd";
import { useRouter } from "next/router";

import ProfileForm from "@components/ProfileForm";
import { clearActivity } from "@redux/activity/activitySlice";
import { clearAuth } from "@redux/auth/authSlice";
import { clearChat } from "@redux/chat/chatSlice";
import { clearTest } from "@redux/test/testSlice";
import { useDispatch, useSelector } from "@utils/hooks";

const ProfilePage = () => {
  const { auth } = useSelector((state) => state);

  const dispatch = useDispatch();

  const router = useRouter();

  return auth.username !== "" ? (
    <Button
      type="primary"
      onClick={() => {
        dispatch(clearAuth());
        dispatch(clearActivity());
        dispatch(clearTest());
        dispatch(clearChat());
        notification.success({ message: "Successfully logged out!" });
        router.push("/");
      }}
    >
      Log out
    </Button>
  ) : (
    <ProfileForm />
  );
};

export default ProfilePage;
