import React from "react";

import { Button, Form, Input, notification } from "antd";
import { useRouter } from "next/router";

import { clearActivity } from "@redux/activity/activitySlice";
import { clearAuth, setAuth } from "@redux/auth/authSlice";
import { clearChat } from "@redux/chat/chatSlice";
import { clearTest } from "@redux/test/testSlice";
import { useDispatch, useSelector } from "@utils/hooks";

const ProfilePage = () => {
  const { auth } = useSelector((state) => state);

  const dispatch = useDispatch();

  const router = useRouter();

  return (
    <Form
      initialValues={auth}
      onFinish={(val) => {
        dispatch(clearAuth());
        dispatch(setAuth(val));
        dispatch(clearActivity());
        dispatch(clearTest());
        dispatch(clearChat());
        notification.success({ message: "Successfully changed!" });
        router.push("/");
      }}
    >
      <Form.Item
        name="username"
        rules={[{ message: "Please input username!", required: true }]}
      >
        <Input placeholder="Username" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ message: "Please input password!", required: true }]}
      >
        <Input.Password placeholder="Password" />
      </Form.Item>

      <Form.Item>
        <Button htmlType="submit" type="primary">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ProfilePage;
