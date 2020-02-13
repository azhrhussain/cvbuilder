import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Col } from 'antd';
import WProfileInfo from './Info';
import WProfileSummary from './ProfileSummary';
import WAddress from './Address';


// eslint-disable-next-line react/prefer-stateless-function
class ProfileIndex extends Component {
  render() {
    const { form } = this.props;
    return (
      <Fragment>
        {/* info */}
        <Col className="gutter-row" span={24}>
          <h2 className="heading-primary">Your Info</h2>
        </Col>
        <WProfileInfo form={form} />
        <WProfileSummary />
        <WAddress />
      </Fragment>
    );
  }
}

ProfileIndex.propTypes = {
  form: PropTypes.string.isRequired,
};

export default ProfileIndex;
