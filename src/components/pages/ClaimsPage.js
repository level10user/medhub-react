import React from "react";
// import PropTypes from 'prop-types';	
import ClaimsForm from "../forms/ClaimsForm";		

class ClaimsPage extends React.Component {

  render() {
    return (
      <div>

        <ClaimsForm submit={this.submit} {...this.props} />

      </div>
    );
  }
}


export default ClaimsPage;