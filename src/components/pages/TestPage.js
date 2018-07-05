import React from "react";
import PropTypes from 'prop-types';	
import { connect } from "react-redux";
// import ReduxTestForm from "../forms/ReduxTestForm";
import TestForm from "../forms/TestForm";
 
class TestPage extends React.Component {

  render() {
    const { isAuthenticated, email } = this.props;
    return (
      <div>
        { isAuthenticated && <h1> { email } </h1> }
        <TestForm submit={this.submit} {...this.props} />
      </div>
    );
  }
}

TestPage.propTypes = {
  email: PropTypes.string.isRequired,
  isAuthenticated : PropTypes.bool.isRequired
};

function mapStateToProps(state){
    return {
      email : state.user.email,
      isAuthenticated : !!state.user.token
    };
};

export default connect (mapStateToProps )(TestPage);