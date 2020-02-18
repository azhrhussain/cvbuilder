/* eslint-disable react/destructuring-assignment */
import React, { Fragment } from 'react';
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


// class AddNewExperience extends Component {
//   constructor(props) {
//     super(props);
//     const { updateData } = props;
//     console.log('updatedata:', updateData);
//     props.state = updateData || initialState;
//     props.handleExperienceChange = props.handleExperienceChange.bind(this);
//   }

const AddNewExperience = (props) => {
  const {
    updateData, ExVisible, handleExperienceChange,
  } = props;

  const {
    title, companyName, companyLocation, currentlyWorking, startDate, endDate, responsibilities,
  } = updateData;
  return (
    <Fragment>
      <Modal
        title="Add Experiance"
        visible={ExVisible}
        // onOk={props.saveAndClearModal}
        onOk={props.saveAndClearModal}
        okText="Save"
        confirmLoading={props.ExConfirmLoading}
        onCancel={props.ExHandleCancle}
        width="60%"
        // onUpdateData={props.onUpdateDataRec(updateData)}
      >

        <Col className="gutter-row" span={4}>
          <Form.Item label="Company Logo">
            <UploadImage />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={20}>
          <Col className="gutter-row" span={12}>
            <Form.Item label="Title">
              <Input onChange={handleExperienceChange} name="title" value={title} placeholder="Ex: Front End Engineer" id="" />
            </Form.Item>
          </Col>
          <Col className="gutter-row" span={12}>
            <Form.Item label="Company">
              <Input onChange={props.handleExperienceChange} name="companyName" value={companyName} placeholder="Company" id="" />
            </Form.Item>
          </Col>
          <Col className="gutter-row" span={12}>
            <Form.Item label="Company location">
              <Input onChange={props.handleExperienceChange} name="companyLocation" value={companyLocation} placeholder="i.e: Lahore" id="" />
            </Form.Item>
          </Col>
          <Col className="gutter-row pad-label" span={12}>
            <Form.Item>
              <Checkbox onChange={props.currentlyWorking} checked={currentlyWorking}>Currently working</Checkbox>
            </Form.Item>
          </Col>
          <Col className="gutter-row" span={6}>
            <Form.Item label="Started Date">
              {/* eslint max-len: ["error", { "code": 280 }] */}
              <MonthPicker
                onChange={(elm, date) => props.handleDate('startDate', elm, date)}
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
                    onChange={(elm, date) => props.handleDate('endDate', elm, date)}
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
                onChange={props.handleExperienceChange}
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
};
AddNewExperience.propTypes = {
  ExVisible: propTypes.bool.isRequired,
  // onSave: propTypes.func.isRequired,
  ExConfirmLoading: propTypes.bool.isRequired,
  saveAndClearModal: propTypes.func.isRequired,
  ExHandleCancle: propTypes.func.isRequired,
  updateData: propTypes.objectOf.isRequired,
  handleExperienceChange: propTypes.func.isRequired,
  currentlyWorking: propTypes.func.isRequired,
  handleDate: propTypes.func.isRequired,
  // isUpdate: propTypes.bool.isRequired,
};

export default AddNewExperience;
