import { clearActivity } from "@redux/activity/activitySlice";
import { clearAuth, setAuth } from "@redux/auth/authSlice";
import { clearChat } from "@redux/chat/chatSlice";
import { setModal } from "@redux/modal/modalSlice";
import { clearTest } from "@redux/test/testSlice";
import { useDispatch, useSelector } from "@utils/hooks";
import { notification, Form as AntdForm, Input, Button } from "antd";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

const PaymentForm = ({ onFinish }: { onFinish: Function }) => {
  const dispatch = useDispatch();

  const router = useRouter();

  const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
  `;

  return (
    <AntdForm
      onFinish={(val) => {
        dispatch(setModal({ userDetail: false, paymentDetail: false }));
        onFinish();
        notification.success({ message: "Succesfully joined!" });
      }}
    >
      <h3>Payment Details</h3>
      <div>
        <h4>Credit Card Number</h4>
        <AntdForm.Item
          name="creditNumber"
          rules={[
            { message: "Please input credit card number!", required: true },
          ]}
        >
          <Input maxLength={16} />
        </AntdForm.Item>
      </div>

      <div>
        <h4>Expiry</h4>
        <GridContainer>
          <AntdForm.Item
            name="monthExp"
            rules={[
              { message: "Please input expiry month!", required: true, max: 2 },
            ]}
          >
            <Input placeholder="YY" maxLength={2} />
          </AntdForm.Item>

          <AntdForm.Item
            name="yearExp"
            rules={[
              { message: "Please input expiry year!", required: true, max: 2 },
            ]}
          >
            <Input placeholder="MM" maxLength={2} />
          </AntdForm.Item>

          <AntdForm.Item
            name="ccv"
            rules={[{ message: "Please input CCV!", required: true, max: 3 }]}
          >
            <Input placeholder="CCV" maxLength={3} />
          </AntdForm.Item>
        </GridContainer>
      </div>

      <AntdForm.Item>
        <Button htmlType="submit" type="primary">
          Submit
        </Button>
      </AntdForm.Item>
    </AntdForm>
  );
};

export default PaymentForm;
