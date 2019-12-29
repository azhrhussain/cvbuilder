import React, { Component } from 'react';
import {
  Layout,
  Breadcrumb,
  Row,
  Col,
  Input,
  Form,
} from 'antd';
import { Link } from 'react-router-dom';
// const { TextArea } = Input;
const { Header, Content, Footer } = Layout;

class CreateNew extends Component {
  state = {};

  render() {
    return (
      <div className="main">
        <Layout>
          <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className="logo" />

          </Header>
          <Content style={{ padding: '0 50px', marginTop: 64 }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item><Link to="/">Dashboard</Link></Breadcrumb.Item>
              <Breadcrumb.Item>CreateNew</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
              <Row gutter={16}>
                <Col className="gutter-row" span={24}>
                  <h2 className="heading-primary">Your Info</h2>
                </Col>
                <Col className="gutter-row" span={24}>
                  <Form layout="vertical">
                    {/* info */}
                    <Col className="gutter-row" span={8}>
                      <Form.Item label="Full Name">
                        <Input placeholder="Full Name" id="fullname" />
                      </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={8}>
                      <Form.Item label="Picture">
                        <Input placeholder="picture" id="picture" />
                      </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={8}>
                      <Form.Item label="Job Title">
                        <Input placeholder="Job title" id="job-title" />
                      </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={24}>
                      <h2 className="heading-primary">Profile</h2>
                    </Col>
                    <Col className="gutter-row" span={24}>
                      <Form.Item label="Career sumery">
                        <Input placeholder="career sumery" id="career-sumery" />
                      </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={8}>
                      <Form.Item label="Email">
                        <Input placeholder="email" id="email" />
                      </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={8}>
                      <Form.Item label="Phone">
                        <Input placeholder="Phone" id="phone" />
                      </Form.Item>
                    </Col>
                    {/* Address */}
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
                    <Col className="gutter-row" span={24}>
                      <h2 className="heading-secondary">Experience</h2>
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
                    <Col className="gutter-row" span={8}>
                      <Form.Item label="Company logo">
                        <Input placeholder="logo" id="" />
                      </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={8}>
                      <Form.Item label="Currently working">
                        <Input placeholder="Yes" id="" />
                      </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={8}>
                      <Form.Item label="Started Date">
                        <Input placeholder="Date" id="" />
                      </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={8}>
                      <Form.Item label="End Date">
                        <Input placeholder="Date" id="" />
                      </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={8}>
                      <Form.Item label="Description">
                        <Input placeholder="Responsibilities" id="" />
                      </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={24}>
                      <h2 className="heading-secondary">Project</h2>
                    </Col>
                    <Col className="gutter-row" span={8}>
                      <Form.Item label="Title +">
                        <Input placeholder="Title" id="" />
                      </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={8}>
                      <Form.Item label="Description">
                        <Input placeholder="Description" id="" />
                      </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={8}>
                      <Form.Item label="Technologies">
                        <Input placeholder="tech" id="" />
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
                    <Col className="gutter-row" span={24}>
                      <h2 className="heading-secondary">Editional Project</h2>
                    </Col>
                    {/* copay same from project */}
                    <Col className="gutter-row" span={24}>
                      <h2 className="heading-secondary">Education</h2>
                    </Col>
                    <Col className="gutter-row" span={8}>
                      <Form.Item label="School/university">
                        <Input placeholder="School/university" id="" />
                      </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={8}>
                      <Form.Item label="Degree">
                        <Input placeholder="Degree" id="" />
                      </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={8}>
                      <Form.Item label="Field of study">
                        <Input placeholder="Field of study" id="" />
                      </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={8}>
                      <Form.Item label="From year -- to year">
                        <Input placeholder="From year -- to year" id="" />
                      </Form.Item>
                    </Col>

                    <Col className="gutter-row" span={8}>
                      <Form.Item label="Grade [show on CV] -- checkbox">
                        <Input placeholder="Grade " id="" />
                      </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={8}>
                      <Form.Item label="Activities">
                        <Input placeholder="Activities" id="" />
                      </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={8}>
                      <Form.Item label="Description ">
                        <Input placeholder="Description" id="" />
                      </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={24}>
                      <h2 className="heading-secondary">Certification</h2>
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
                    <Col className="gutter-row" span={8}>
                      <Form.Item label="This certification not expire -- checkbox">
                        <Input placeholder="This certification not expire -- checkbox" id="" />
                      </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={8}>
                      <Form.Item label="Issue date --- expire date">
                        <Input placeholder="Issue date --- expire date" id="" />
                      </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={24}>
                      <h2 className="heading-secondary">Skills</h2>
                    </Col>
                    <Col className="gutter-row" span={8}>
                      <Form.Item label="+webpack , +webstanderds, +write your own">
                        <Input placeholder="+webpack , +webstanderds, +write your own" id="" />
                      </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={8}>
                      <Form.Item label="Languages">
                        <Input placeholder="Languages" id="" />
                      </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={8}>
                      <Form.Item label="Tools">
                        <Input placeholder="Tools" id="" />
                      </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={24}>
                      <h2 className="heading-secondary">Reference</h2>
                    </Col>
                    <Col className="gutter-row" span={8}>
                      <Form.Item label="On demand --- checkbox">
                        <Input placeholder="On demand --- checkbox" id="" />
                      </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={8}>
                      <Form.Item label="Name">
                        <Input placeholder="Name" id="" />
                      </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={8}>
                      <Form.Item label="Title">
                        <Input placeholder="Title" id="" />
                      </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={8}>
                      <Form.Item label="Company">
                        <Input placeholder="Company" id="" />
                      </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={8}>
                      <Form.Item label="Your relation">
                        <Input placeholder="Your relation" id="" />
                      </Form.Item>
                    </Col>
                  </Form>
                </Col>
              </Row>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>CV Builder</Footer>
        </Layout>
      </div>
    );
  }
}

export default CreateNew;
