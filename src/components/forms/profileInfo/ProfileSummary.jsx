import React, { Component, Fragment } from 'react';
import {
  Col,
  Input,
  Form,
} from 'antd';

const { TextArea } = Input;

class ProfileSummary extends Component {
  render() {
    return (
      <Fragment>
        <Col className="gutter-row" span={24}>
          <h2 className="heading-primary">Profile</h2>
        </Col>
        <Col className="gutter-row" span={24}>
          <Form.Item label="Career summary">
            <TextArea
                        // value={value}
              onChange={this.onChange}
              placeholder="career summary"
              autoSize={{ minRows: 3, maxRows: 5 }}
            />
          </Form.Item>
        </Col>
      </Fragment>
    );
  }
}
const WProfileSummary = Form.create({ name: 'create' })(ProfileSummary);
export default WProfileSummary;
