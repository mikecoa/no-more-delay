import React from "react";

import { notification, Form as AntdForm, Input, Button } from "antd";
import styled from "styled-components";

import { setModal } from "@redux/modal/modalSlice";
import { useDispatch } from "@utils/hooks";

const PaymentForm = ({ onFinish }: { onFinish: Function }) => {
  const dispatch = useDispatch();

  const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
  `;

  return (
    <AntdForm
      onFinish={() => {
        dispatch(setModal({ paymentDetail: false, userDetail: false }));
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
              { max: 2, message: "Please input expiry month!", required: true },
            ]}
          >
            <Input maxLength={2} placeholder="YY" />
          </AntdForm.Item>

          <AntdForm.Item
            name="yearExp"
            rules={[
              { max: 2, message: "Please input expiry year!", required: true },
            ]}
          >
            <Input maxLength={2} placeholder="MM" />
          </AntdForm.Item>

          <AntdForm.Item
            name="ccv"
            rules={[{ max: 3, message: "Please input CCV!", required: true }]}
          >
            <Input maxLength={3} placeholder="CCV" />
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
