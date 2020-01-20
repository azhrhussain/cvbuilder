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
import UploadImage from 'components/uploadImage/UploadImage';

// function onChange(e) {
//   console.log(`checked = ${e.target.checked}`);
// }

// const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
const { TextArea } = Input;

function onChange(date, dateString) {
  console.log(date, dateString);
}

class Experiance extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    // const { form: { getFieldDecorator } } = this.props;
    return (
      <Fragment>
        {/* Experience */}
        <Col className="gutter-row" span={24}>
          <h2 className="heading-secondary">
            Experience
            {' '}
            <Button type="success">+ Add Experience</Button>
          </h2>
        </Col>
        <Col className="gutter-row" span={3}>
          <Form.Item label="Company Logo">
            <UploadImage />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={8}>
          <Form.Item label="Company">
            <Input placeholder="Company" id="" />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={8}>
          <Form.Item label="Company location">
            <Input placeholder="i.e: Lahore" id="" />
          </Form.Item>
        </Col>

        <Col className="gutter-row pad-label" span={4}>
          <Form.Item>
            <Checkbox onChange={onChange}>Currently working</Checkbox>
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={4}>
          <Form.Item label="Started Date">
            <DatePicker onChange={onChange} />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={4}>
          <Form.Item label="End Date">
            <DatePicker onChange={onChange} />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={8}>
          <Form.Item label="Responsibilities">
            <TextArea
              // value={value}
              onChange={this.onChange}
              placeholder="Responsibilities"
              autoSize={{ minRows: 3, maxRows: 5 }}
            />
          </Form.Item>
        </Col>
      </Fragment>
    );
  }
}
const WExperiance = Form.create({ name: 'create' })(Experiance);
export default WExperiance;
