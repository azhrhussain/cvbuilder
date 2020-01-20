/* eslint-disable react/prefer-stateless-function */
import React, { Component, Fragment } from 'react';
import {
  Col,
  Input,
  Form,
  Button,
  DatePicker,
  Checkbox,
} from 'antd';

const { MonthPicker } = DatePicker;
const { TextArea } = Input;
function onChange(date, dateString) {
  console.log(date, dateString);
}
class Education extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    // const { form: { getFieldDecorator } } = this.props;
    return (
      <Fragment>
        {/* Project */}
        <Col className="gutter-row" span={24}>
          <h2 className="heading-secondary">
            Education
            {' '}
            <Button type="success">+ Add Degree</Button>
          </h2>
        </Col>


        <Col className="gutter-row" span={8}>
          <Form.Item label="School/university">
            <Input placeholder="School/university" id="" />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={8}>
          <Form.Item label="Degree">
            <Input placeholder="i.e: BS(CS)" id="" />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={8}>
          <Form.Item label="Field of study">
            <Input placeholder="i.e: Computer Science" id="" />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={4}>
          <Form.Item label="From year">
            <MonthPicker onChange={onChange} placeholder="Select month" />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={4}>
          <Form.Item label="To year">
            <MonthPicker onChange={onChange} placeholder="Select month" />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={4}>
          <Form.Item label="Grade">
            <Input placeholder="i.e: 3.5 " id="" />
          </Form.Item>
        </Col>
        <Col className="gutter-row pad-label" span={4}>
          <Form.Item label="">
            <Checkbox onChange={onChange}>Show grade on CV</Checkbox>
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={8}>
          <Form.Item label="Activities">
            <Input placeholder="Activities" id="" />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={8}>
          <Form.Item label="Description ">
            <TextArea
              placeholder="Description"
            />
          </Form.Item>
        </Col>
      </Fragment>
    );
  }
}
const WEducation = Form.create({ name: 'create' })(Education);
export default WEducation;
