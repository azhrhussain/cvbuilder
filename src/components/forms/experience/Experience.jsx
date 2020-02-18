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
const initialStartDate = '2020-12';
const initialEndDate = '2020-02';
const initialState = {
  companyLogo: '',
  id: '',
  title: '',
  companyName: '',
  companyLocation: '',
  currentlyWorking: false,
  startDate: initialStartDate,
  endDate: initialEndDate,
  responsibilities: '',
};

class Experiance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      confirmLoading: false,
      updateIndex: 0,
      isUpdate: false,
      updateData: initialState,
      tempExpData: initialState,
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
      updateData: tempUpdateItem,
      updateIndex: index,
      isUpdate: true,
    }, () => {
      this.showModal();
    });
  }

  updateExperience=(data) => {
    const { updateIndex, experienceData } = this.state;
    const temp = experienceData.splice(updateIndex, 1, data);
    this.setState(prevState => ({
      experienceData: [...prevState.experienceData, temp],
      isUpdate: false,
      visible: false,
      updateIndex: 0,
      updateData: [],
    }), statw => console.log(statw));
  }

  // pure component functions copy
  handleExperienceChange = ({ target: { value } }) => {
    const { tempExpData } = this.state;
    // const newName = [e.target.name];
    console.log(value);
    console.log(this.updateData);
    this.setState(prevState => ({
      updateData: { ...prevState.updateData, newName: value },
    }));
    // if (!isUpdate) {

    // }
  };

  currentlyWorking = (e) => {
    console.log(e);
    // this.setState({
    //   currentlyWorking: e.target.checked,
    // });
  }

  handleDate = (elm, dateObj, date) => {
    console.log(elm, dateObj, date);
    // if (dateObj !== null) {
    // if (elm === 'startDate') { this.setState({ startDate: date }); }
    // else this.setState({ endDate: date });
    // } else if (elm === 'startDate') { this.setState({ startDate: initialStartDate }); }
    // else this.setState({ endDate: initialEndDate });
  }

  saveAndClearModal = () => {
    // const { companyName, startDate } = this.state;
    // this.setState({ id: `${companyName}_${startDate}` }, (state) => { console.log(state); });
    // console.log(this.state);
    // const { onSave } = this.props;
    // const {
    //   onSave, onUpdate, isUpdate, updateIndex,
    // } = this.props;
    // console.log(isUpdate, onUpdate, updateIndex);
    // if (isUpdate) {
    //   onUpdate({ ...this.state, id: `${companyName}_${startDate}` });
    // } else {
    //   onSave({ ...this.state, id: `${companyName}_${startDate}` });
    // }

    // onSave({ ...this.state, id: `${companyName}_${startDate}` });
    this.setState({ ...initialState });
  };

  // cancelAndClearModal = () => {
  //   const { ExHandleCancle } = this.props;
  //   this.setState(initialState);
  //   ExHandleCancle();
  // }

  handleChangeDate = (elm, dateObj) => {
    console.log(elm, dateObj);
    // if (dateObj !== null) {
    //   if (elm === 'startDate') { this.setState({ startDate: dateObj }); }
    // else this.setState({ endDate: dateObj });
    // } else if (elm === 'startDate') { this.setState({ startDate: initialStartDate }); }
    // else this.setState({ endDate: initialEndDate });
  };

  // onUpdateDataRec=(data) => {
  //   if (data !== undefined) {
  //     this.setState({ data });
  //   }
  //   // console.log('received data:', data);
  // }
  // end pure component functions copy

  render() {
    // eslint-disable-next-line react/prop-types
    // const { form: { getFieldDecorator } } = this.props;
    const {
      experienceData, visible, confirmLoading, isUpdate, updateData,
    } = this.state;
    return (
      <Fragment>
        {/* Experience */}

        <Col className="gutter-row" span={24}>
          <h2 className="heading-secondary">
            {isUpdate ? 'IsUpdat: true' : 'false'}
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
          // ExOnOk={this.handleOk}
          ExOnOk={this.saveAndClearModal}
          ExHandleCancle={this.handleCancel}
          handleExperienceChange={this.handleExperienceChange}
          currentlyWorking={this.currentlyWorking}
          // onSave={this.saveExp}
          onUpdate={this.updateExperience}
          updateData={updateData}
          handleDate={this.handleDate}
          // updateIndex={updateIndex}
          isUpdate={isUpdate}
        />

      </Fragment>
    );
  }
}
const WExperiance = Form.create({ name: 'create' })(Experiance);
export default WExperiance;
