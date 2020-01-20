/* eslint-disable react/prefer-stateless-function */
import React, { Component, Fragment } from 'react';
import {
  Col,
  Input,
  Form,
  Button,
  Select,
} from 'antd';

const { Option } = Select;
const { TextArea } = Input;

const children = [];
// eslint-disable-next-line no-plusplus
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
  console.log(`selected ${value}`);
}

class Skills extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    // const { form: { getFieldDecorator } } = this.props;
    return (
      <Fragment>
        {/* Project */}
        <Col className="gutter-row" span={24}>
          <h2 className="heading-secondary">
          Skills
            {' '}
            <Button type="success">+ Add Skills</Button>
          </h2>
        </Col>
        <Col className="gutter-row" span={8}>
          <Form.Item label="Languages & Extensions">
            <Select placeholder="Type to add Skill; i.e: C#" mode="tags" style={{ width: '100%' }} onChange={handleChange} tokenSeparators={[',']}>
              {children}
            </Select>
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={8}>
          <Form.Item label="Familiar">
            <Select placeholder="Type to add Skill; i.e: C#" mode="tags" style={{ width: '100%' }} onChange={handleChange} tokenSeparators={[',']}>
              {children}
            </Select>
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={8}>
          <Form.Item label="Tools">
            <Select placeholder="Type to add Skill; i.e: Visual Studio" mode="tags" style={{ width: '100%' }} onChange={handleChange} tokenSeparators={[',']}>
              {children}
            </Select>
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={8}>
          <Form.Item label="Version Control">
            <Select placeholder="Type to add Skill; i.e: Git" mode="tags" style={{ width: '100%' }} onChange={handleChange} tokenSeparators={[',']}>
              {children}
            </Select>
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={8}>
          <Form.Item label="Development Methodologies">
            <Select placeholder="Type to add Skill; i.e: Agile" mode="tags" style={{ width: '100%' }} onChange={handleChange} tokenSeparators={[',']}>
              {children}
            </Select>
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={8}>
          <Form.Item label="Other Skills">
            <TextArea placeholder="- I can work individually and also an active team player" />
          </Form.Item>
        </Col>
      </Fragment>
    );
  }
}
const WSkills = Form.create({ name: 'create' })(Skills);
export default WSkills;
