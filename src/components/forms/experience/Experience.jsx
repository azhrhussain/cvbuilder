/* eslint-disable react/prefer-stateless-function */
import React, { Component, Fragment } from 'react';
import {
  Col,
  // Input,
  Form,
  Button,
  // Modal,
  // Checkbox,
  // DatePicker,
} from 'antd';

import AddNewExperience from 'components/forms/experience/AddNewExperience';

// function onChange(e) {
//   console.log(`checked = ${e.target.checked}`);
// }

// const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
// const { TextArea } = Input;

class Experiance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      confirmLoading: false,
      experienceData: [],
    };
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({
      confirmLoading: true,
    });
    console.log('save data and dispaly on exp..!');

    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 500);
  };

  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  };

  saveExp=(data) => {
    console.log(data);
    this.setState(prevState => ({
      experienceData: [data, ...prevState.experienceData],
      visible: false,
    }));
  }

  render() {
    // eslint-disable-next-line react/prop-types
    // const { form: { getFieldDecorator } } = this.props;
    const { experienceData, visible, confirmLoading } = this.state;
    return (
      <Fragment>
        {/* Experience */}

        <Col className="gutter-row" span={24}>
          <h2 className="heading-secondary">
            Experience
            {' '}
            <Button type="success" onClick={this.showModal}>+ Add Experience</Button>
          </h2>
          {experienceData.map(i => (
            <div
              key={i.companyName}
            >
              <div>{i.companyName}</div>
              <div>{i.companyLocation}</div>
              <div>{i.startDate}</div>
              {!i.currentlyWorking
                ? [<div>{i.endDate}</div>] : null
              }
              <div>{i.responsibilities}</div>
            </div>
          ))}
        </Col>


        {/* <Modal
          title="Add Experiance"
          visible={visible}
          onOk={this.handleOk}
          okText="Save"
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
          width="60%"
        >
          <AddNewExperience onSave={this.saveExp} />
        </Modal> */}


        <AddNewExperience
          ExVisible={visible}
          ExConfirmLoading={confirmLoading}
          ExOnOk={this.handleOk}
          ExHandleCancle={this.handleCancel}
          onSave={this.saveExp}
        />


      </Fragment>
    );
  }
}
const WExperiance = Form.create({ name: 'create' })(Experiance);
export default WExperiance;
