import { clearActivity } from "@redux/activity/activitySlice";
import { clearAuth, setAuth } from "@redux/auth/authSlice";
import { clearChat } from "@redux/chat/chatSlice";
import { setModal } from "@redux/modal/modalSlice";
import { clearTest } from "@redux/test/testSlice";
import { useDispatch, useSelector } from "@utils/hooks";
import { notification, Form as AntdForm, Input, Button } from "antd";
import { useRouter } from "next/router";
import React from "react";

const ProfileForm = () => {
  const { auth } = useSelector((state) => state);

  const dispatch = useDispatch();

  const router = useRouter();

  return (
    <AntdForm
      initialValues={auth}
      onFinish={(val) => {
        dispatch(clearAuth());
        dispatch(setAuth(val));
        dispatch(clearActivity());
        dispatch(clearTest());
        dispatch(clearChat());
        dispatch(setModal({ userDetail: false, paymentDetail: false }));
        notification.success({ message: "Successfully changed!" });
        router.push("/");
      }}
    >
      <h3>User Details</h3>
      <AntdForm.Item
        name="username"
        label="Username"
        rules={[{ message: "Please input username!", required: true }]}
      >
        <Input />
      </AntdForm.Item>

      <AntdForm.Item
        name="password"
        label="password"
        rules={[{ message: "Please input password!", required: true }]}
      >
        <Input.Password />
      </AntdForm.Item>

      <AntdForm.Item>
        <Button htmlType="submit" type="primary">
          Submit
        </Button>
      </AntdForm.Item>
    </AntdForm>
  );
};

export default ProfileForm;
