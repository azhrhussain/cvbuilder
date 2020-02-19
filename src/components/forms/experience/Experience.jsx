/* eslint-disable react/prefer-stateless-function */
import React, { Component, Fragment } from 'react';
import {
  Col,
  // Input,
  Form,
  Button,
  Card,
  Icon,
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
      updateIndex: 0,
      isUpdate: false,
      updateData: [],
      experienceData: [],
    };
  }

  showModal = () => {
    this.setState({
      visible: true,
      isUpdate: false,
      updateData: [],
      updateIndex: 0,
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
      isUpdate: false,
      updateData: [],
    });
  };

  saveExp=(data) => {
    console.log(data);
    this.setState(prevState => ({
      experienceData: [data, ...prevState.experienceData],
      visible: false,
    }));
  }

  deleteExperience=(id) => {
    const { experienceData } = this.state;
    const filteredExperience = experienceData.filter(
      item => item.id !== id,
    );
    this.setState({
      experienceData: filteredExperience,
    });
  }

  editExperience=(id, index) => {
    const { experienceData } = this.state;
    const tempUpdateItem = experienceData[index];
    console.log(id, index, experienceData, tempUpdateItem);
    this.setState({
      updateData: [tempUpdateItem],
      updateIndex: index,
      isUpdate: true,
      visible: true,
    });
    // this.showModal();
  }

  updateExperience=(data) => {
    const { updateIndex, experienceData } = this.state;
    const temp = experienceData.splice(updateIndex, 1, data);
    this.setState(prevState => ({
      experienceData: prevState.experienceData,
      isUpdate: false,
      visible: false,
      updateIndex: 0,
      updateData: [],
    }));
    console.log(data, updateIndex, experienceData, temp);
  }

  render() {
    // eslint-disable-next-line react/prop-types
    // const { form: { getFieldDecorator } } = this.props;
    const {
      experienceData, visible, confirmLoading, isUpdate, updateData, updateIndex,
    } = this.state;
    return (
      <Fragment>
        {/* Experience */}

        <Col className="gutter-row" span={24}>
          <h2 className="heading-secondary">
            Experience
            {' '}
            <Button type="success" onClick={this.showModal}>+ Add Experience</Button>
          </h2>
          {experienceData.map((item, index) => (
            <Card
              title={`${item.title}  -  ${item.companyName}`}
              key={item.id}
              id={item.id}
              extra={(
                <Fragment>
                  <Button type="primary" shape="circle" onClick={() => this.editExperience(item.id, index)}><Icon type="edit" /></Button>
                  {' '}
                  <Button type="danger" shape="circle" onClick={() => this.deleteExperience(item.id)}><Icon type="delete" /></Button>
                </Fragment>
)}
            >
              <div>{item.companyLocation}</div>
              <div>{item.startDate}</div>
              {!item.currentlyWorking
                ? [<div>{item.endDate}</div>] : 'currently working'
              }
              <div>{item.responsibilities}</div>
            </Card>
          ))}
        </Col>

        <AddNewExperience
          ExVisible={visible}
          ExConfirmLoading={confirmLoading}
          ExOnOk={this.handleOk}
          ExHandleCancle={this.handleCancel}
          onSave={this.saveExp}
          onUpdate={this.updateExperience}
          updateData={updateData}
          updateIndex={updateIndex}
          isUpdate={isUpdate}
        />

      </Fragment>
    );
  }
}
const WExperiance = Form.create({ name: 'create' })(Experiance);
export default WExperiance;
