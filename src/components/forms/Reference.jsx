/* eslint-disable react/prefer-stateless-function */
import React, { Component, Fragment } from 'react';
import {
  Col,
  Input,
  Form,
  Button,
  Checkbox,
  Select,
} from 'antd';

const { Option } = Select;
function onChange(date, dateString) {
  console.log(date, dateString);
}
class Reference extends Component {
  render() {
    return (
      <Fragment>
        <Col className="gutter-row" span={24}>
          <h2 className="heading-secondary">
            Reference
            {' '}
            <Button type="success">+ Add Reference</Button>
          </h2>
        </Col>
        <Col className="gutter-row pad-label" span={8}>
          <Form.Item label="">
            <Checkbox onChange={onChange}>Ref. On request (Check; if provide on request)</Checkbox>
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={8}>
          <Form.Item label="Name">
            <Input placeholder="Jhon Doe" id="" />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={8}>
          <Form.Item label="Title">
            <Input placeholder="i.e: Sr. Software Engineer" id="" />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={8}>
          <Form.Item label="Company">
            <Input placeholder="i.e: Amazon" id="" />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={8}>
          <Form.Item label="Your relation">
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="Select relation"
              optionFilterProp="children"
              // eslint-disable-next-line max-len
              filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
            >
              <Option value="friend">Friend</Option>
              <Option value="collegue">Collegue</Option>
              <Option value="Senior">Senior</Option>
            </Select>
          </Form.Item>
        </Col>
      </Fragment>
    );
  }
}
const WReference = Form.create({ name: 'create' })(Reference);
export default WReference;
