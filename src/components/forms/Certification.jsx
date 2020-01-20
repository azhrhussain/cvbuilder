/* eslint-disable react/prefer-stateless-function */
import React, { Component, Fragment } from 'react';
import {
  Col,
  Input,
  Form,
  Button,
  Checkbox,
  DatePicker,
} from 'antd';

function onChange(date, dateString) {
  console.log(date, dateString);
}
class Certification extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    // const { form: { getFieldDecorator } } = this.props;
    return (
      <Fragment>
        {/* Project */}
        <Col className="gutter-row" span={24}>
          <h2 className="heading-secondary">
            Certification
            {' '}
            <Button type="success">+ Add Certificate</Button>
          </h2>
        </Col>
        <Col className="gutter-row" span={8}>
          <Form.Item label="Name of certificate">
            <Input placeholder="Name of certificate" id="" />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={8}>
          <Form.Item label="Issuing organization  ">
            <Input placeholder="Issuing organization " id="" />
          </Form.Item>
        </Col>
        <Col className="gutter-row pad-label" span={8}>
          <Form.Item label="">
            <Checkbox onChange={onChange}>This certification not expire</Checkbox>
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={4}>
          <Form.Item label="Issue date">
            <DatePicker placeholder="Select date" />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={4}>
          <Form.Item label="Expire date">
            <DatePicker placeholder="Select date" />
          </Form.Item>
        </Col>
      </Fragment>
    );
  }
}
const WCertification = Form.create({ name: 'create' })(Certification);
export default WCertification;
