import React from "react";
import PropTypes from 'prop-types';	
// import { Link } from  "react-router-dom";
import { connect } from "react-redux";
import DashboardForm from "../forms/DashboardForm";
import  { updateProfile } from "../../actions/auth";
 
class DashboardPage extends React.Component {

  submit = user => this.props.updateProfile(user);

/*  submit = user => {
    console.log("yyy = " + JSON.stringify(user));
  }
*/

  render() {
    const { isAuthenticated, email } = this.props;
    return (
      <div>
        <DashboardForm submit={this.submit} { ...this.props } />
      </div>
    );
  }
}

DashboardPage.propTypes = {
  email: PropTypes.string.isRequired,
  isAuthenticated : PropTypes.bool.isRequired,
  updateProfile : PropTypes.func.isRequired
};

function mapStateToProps(state){
    return {
      email : state.user.email,
      isAuthenticated : !!state.user.token
    };
};


export default connect (mapStateToProps, { updateProfile } )(DashboardPage);


// export default DashboardPage;