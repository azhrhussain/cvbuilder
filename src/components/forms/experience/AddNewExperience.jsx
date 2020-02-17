/* eslint-disable react/destructuring-assignment */
import React, { Component, Fragment } from 'react';
import propTypes from 'prop-types';
import {
  Col,
  Input,
  Form,
  // Button,
  Checkbox,
  Modal,
  DatePicker,
} from 'antd';
import UploadImage from 'components/uploadImage/UploadImage';
import moment from 'moment';

const monthFormat = 'YYYY-MM';
const { TextArea } = Input;
const { MonthPicker } = DatePicker;
const initialStartDate = '2020-01';
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
class AddNewExperience extends Component {
  constructor(props) {
    super(props);
    const { updateData } = props;
    console.log('updatedata:', updateData);
    this.state = updateData || initialState;
    this.handleExperienceChange = this.handleExperienceChange.bind(this);
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.isUpdate) {
  //     const propUpdatePrevData = nextProps.updateData[0];
  //     this.setState({
  //       id: propUpdatePrevData.id,
  //       title: propUpdatePrevData.title,
  //       companyName: propUpdatePrevData.companyName,
  //       companyLocation: propUpdatePrevData.companyLocation,
  //       currentlyWorking: propUpdatePrevData.currentlyWorking,
  //       startDate: propUpdatePrevData.startDate,
  //       endDate: propUpdatePrevData.endDate,
  //       responsibilities: propUpdatePrevData.responsibilities,
  //     });
  //   }
  // }

handleExperienceChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value,
  });
  // if (e.target.name === 'companyName') {
  //   const { startDate } = this.state;
  //   this.setState({ id: `${e.target.value}_${startDate}` });
  // }
};

currentlyWorking = (e) => {
  this.setState({
    currentlyWorking: e.target.checked,
  });
}

handleDate = (elm, dateObj, date) => {
  if (dateObj !== null) {
    if (elm === 'startDate') { this.setState({ startDate: date }); } else this.setState({ endDate: date });
  } else if (elm === 'startDate') { this.setState({ startDate: initialStartDate }); } else this.setState({ endDate: initialEndDate });
}

saveAndClearModal = () => {
  const { companyName, startDate } = this.state;
  // this.setState({ id: `${companyName}_${startDate}` }, (state) => { console.log(state); });
  // console.log(this.state);
  const { onSave } = this.props;
  // const {
  //   onSave, onUpdate, isUpdate, updateIndex,
  // } = this.props;
  // console.log(isUpdate, onUpdate, updateIndex);
  // if (isUpdate) {
  //   onUpdate({ ...this.state, id: `${companyName}_${startDate}` });
  // } else {
  //   onSave({ ...this.state, id: `${companyName}_${startDate}` });
  // }
  onSave({ ...this.state, id: `${companyName}_${startDate}` });
  this.setState({ ...initialState });
};

cancelAndClearModal = () => {
  const { ExHandleCancle } = this.props;
  this.setState(initialState);
  ExHandleCancle();
}

handleChangeDate = (elm, dateObj) => {
  if (dateObj !== null) {
    if (elm === 'startDate') { this.setState({ startDate: dateObj }); } else this.setState({ endDate: dateObj });
  } else if (elm === 'startDate') { this.setState({ startDate: initialStartDate }); } else this.setState({ endDate: initialEndDate });
};

onUpdateDataRec=(data) => {
  if (data !== undefined) {
    this.setState({ data });
  }
  // console.log('received data:', data);
}

render() {
  const { updateData, ExVisible, ExConfirmLoading } = this.props;

  const {
    title1, companyName, companyLocation, currentlyWorking, startDate, endDate, responsibilities,
  } = updateData;
  console.log('###updateData', updateData, title1);
  const {
    title,
  } = this.state;

  return (
    <Fragment>
      <Modal
        title="Add Experiance"
        visible={ExVisible}
        onOk={this.saveAndClearModal}
        okText="Save"
        confirmLoading={ExConfirmLoading}
        onCancel={this.cancelAndClearModal}
        width="60%"
        // onUpdateData={this.onUpdateDataRec(updateData)}
      >

        <Col className="gutter-row" span={4}>
          <Form.Item label="Company Logo">
            <UploadImage />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={20}>
          <Col className="gutter-row" span={12}>
            <Form.Item label="Title">
              <Input onChange={this.handleExperienceChange} name="title" value={title || title1} placeholder="Ex: Front End Engineer" id="" />
            </Form.Item>
          </Col>
          <Col className="gutter-row" span={12}>
            <Form.Item label="Company">
              <Input onChange={this.handleExperienceChange} name="companyName" value={companyName} placeholder="Company" id="" />
            </Form.Item>
          </Col>
          <Col className="gutter-row" span={12}>
            <Form.Item label="Company location">
              <Input onChange={this.handleExperienceChange} name="companyLocation" value={companyLocation} placeholder="i.e: Lahore" id="" />
            </Form.Item>
          </Col>
          <Col className="gutter-row pad-label" span={12}>
            <Form.Item>
              <Checkbox onChange={this.currentlyWorking} checked={currentlyWorking}>Currently working</Checkbox>
            </Form.Item>
          </Col>
          <Col className="gutter-row" span={6}>
            <Form.Item label="Started Date">
              {/* eslint max-len: ["error", { "code": 280 }] */}
              <MonthPicker
                onChange={(elm, date) => this.handleDate('startDate', elm, date)}
                format={monthFormat}
                value={moment(startDate, monthFormat)}
                name="startDate"
              />
            </Form.Item>
          </Col>
          {!currentlyWorking
            ? [
              <Col className="gutter-row" span={6}>
                <Form.Item label="End Date">
                  {/* eslint max-len: ["error", { "code": 180 }] */}
                  <MonthPicker
                    onChange={(elm, date) => this.handleDate('endDate', elm, date)}
                    format={monthFormat}
                    value={moment(endDate, monthFormat)}
                    name="endDate"
                  />
                </Form.Item>
              </Col>,
            ]
            : null }
          <Col className="gutter-row" span={24}>
            <Form.Item label="Responsibilities">
              <TextArea
              // value={value}
                onChange={this.handleExperienceChange}
                name="responsibilities"
                value={responsibilities}
                placeholder="Responsibilities"
                autoSize={{ minRows: 3, maxRows: 5 }}
              />
            </Form.Item>
          </Col>
        </Col>
      </Modal>
    </Fragment>
  );
}
}

AddNewExperience.propTypes = {
  onSave: propTypes.func.isRequired,
  // onUpdate: propTypes.func.isRequired,
  // isUpdate: propTypes.bool.isRequired,
  updateData: propTypes.objectOf.isRequired,
  // updateIndex: propTypes.number.isRequired,
  // ExOnOk: propTypes.func.isRequired,
  ExVisible: propTypes.bool.isRequired,
  ExHandleCancle: propTypes.func.isRequired,
  ExConfirmLoading: propTypes.bool.isRequired,
};

export default AddNewExperience;
