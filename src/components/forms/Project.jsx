/* eslint-disable react/prefer-stateless-function */
import React, { Component, Fragment } from 'react';
import {
  Col,
  Input,
  Form,
  Button,
} from 'antd';

const { TextArea } = Input;
const addNewProject = () => {
  console.log('clicked');
};

class Project extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    // const { form: { getFieldDecorator } } = this.props;

    return (
      <Fragment>
        {/* Project */}
        <Col className="gutter-row" span={24}>
          <h2 className="heading-secondary">
            Project
            {' '}
            <Button type="success" onClick={addNewProject}>+ Add Project</Button>
          </h2>
        </Col>

        <Col className="gutter-row" span={8}>
          <Form.Item label="Title">
            <Input placeholder="Title" id="" />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={8}>
          <Form.Item label="Description">
            <TextArea
              // value={value}
              onChange={this.onChange}
              placeholder="Project short description"
              autoSize={{ minRows: 3, maxRows: 5 }}
            />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={8}>
          <Form.Item label="Technologies">
            <TextArea
              // value={value}
              onChange={this.onChange}
              placeholder="Technologies used in the project"
              autoSize={{ minRows: 3, maxRows: 5 }}
            />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={8}>
          <Form.Item label="URL/Link">
            <Input placeholder="link" id="" />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={8}>
          <Form.Item label="Scope">
            <Input placeholder="scope" id="" />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={8}>
          <Form.Item label="Role">
            <Input placeholder="Your role" id="" />
          </Form.Item>
        </Col>
      </Fragment>
    );
  }
}
const WProject = Form.create({ name: 'create' })(Project);
export default WProject;
