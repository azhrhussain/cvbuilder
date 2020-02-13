/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Layout,
  Breadcrumb,
  Row,
  Col,
  Form,
} from 'antd';
import { Link } from 'react-router-dom';
import ProfileCP from 'components/forms/profileInfo/Index';
import ExperienceCP from 'components/forms/experience/Experience';
import ProjectCP from 'components/forms/Project';
import EducationCP from 'components/forms/Education';
import CertificationCP from 'components/forms/Certification';
import SkillsCP from 'components/forms/Skills';
import ReferenceCP from 'components/forms/Reference';

const { Header, Content, Footer } = Layout;


class CreateNew extends Component {
  render() {
    const { form } = this.props;
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
                  <Form layout="vertical">
                    <ProfileCP form={form} />
                    <ExperienceCP />
                    <ProjectCP />
                    <Col className="gutter-row" span={24}>
                      <h2 className="heading-secondary">Additional Projects</h2>
                    </Col>
                    <ProjectCP />
                    {/* copay same from project */}
                    <EducationCP />
                    <CertificationCP />
                    <SkillsCP />
                    <ReferenceCP />
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

CreateNew.propTypes = {
  form: PropTypes.string.isRequired,
};

const WrappedForm = Form.create({ name: 'create' })(CreateNew);

export default WrappedForm;
// export default CreateNew;
