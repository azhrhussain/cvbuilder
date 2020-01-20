import React, { Component, Fragment } from 'react';
import {
  Col,
  Input,
  Form,
} from 'antd';
import UploadImage from 'components/uploadImage/UploadImage';

class ProfileInfo extends Component {
  state={
    loading: false,
  }

  render() {
    const { loading } = this.state;
    // eslint-disable-next-line react/prop-types
    const { form: { getFieldDecorator } } = this.props;
    return (
      <Fragment>
        {loading}
        <Col className="gutter-row" span={3}>
          <Form.Item label="Picture">
            <UploadImage />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={6}>
          <Form.Item label="Full Name">
            <Input placeholder="Full Name" id="fullname" />
          </Form.Item>
          <Form.Item label="Job Title">
            <Input placeholder="Job title" id="job-title" />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={8}>
          <Form.Item label="Phone Number">
            {getFieldDecorator('phone', {
              rules: [{ required: true, message: 'Please input your phone number!' }],
            })(<Input />)}
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={8}>
          <Form.Item label="Email">
            <Input placeholder="email" id="email" />
          </Form.Item>
        </Col>
      </Fragment>
    );
  }
}
const WProfileInfo = Form.create({ name: 'create' })(ProfileInfo);
export default WProfileInfo;
