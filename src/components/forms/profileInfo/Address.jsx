import React, { Fragment } from 'react';
import {
  Col,
  Input,
  Form,
} from 'antd';

const Address = () => (
  <Fragment>
    <Col className="gutter-row" span={24}>
      <h2>Address</h2>
    </Col>
    <Col className="gutter-row" span={8}>
      <Form.Item label="City">
        <Input placeholder="City" id="city" />
      </Form.Item>
    </Col>
    <Col className="gutter-row" span={8}>
      <Form.Item label="Provance/State">
        <Input placeholder="Provance/state" id="state" />
      </Form.Item>
    </Col>
    <Col className="gutter-row" span={8}>
      <Form.Item label="Country">
        <Input placeholder="Country" id="country" />
      </Form.Item>
    </Col>
    <Col className="gutter-row" span={8}>
      <Form.Item label="LinkedIn">
        <Input placeholder="Your profile ID/link" id="linkedin" />
      </Form.Item>
    </Col>
    <Col className="gutter-row" span={8}>
      <Form.Item label="Stake overflow">
        <Input placeholder="Stack overflow profile link" id="" />
      </Form.Item>
    </Col>
    <Col className="gutter-row" span={8}>
      <Form.Item label="Add other">
        <Input placeholder="Other" id="" />
      </Form.Item>
    </Col>
  </Fragment>
);
const WAddress = Form.create({ name: 'create' })(Address);
export default WAddress;
