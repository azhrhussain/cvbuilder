import React, { Component } from 'react';
import {
  Layout,
  Breadcrumb,
  Row,
  Col,
  Button,
} from 'antd';

const { Header, Content, Footer } = Layout;

class Dashboard extends Component {
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
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
              <Row gutter={16}>
                <Col className="gutter-row" span={6}>
                  <div className="gutter-box">
                    <Button>Create New</Button>
                  </div>
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

export default Dashboard;
