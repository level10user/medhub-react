import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';  
// import * as actions from '../../actions/user';
// import { validate } from "./validate";

const form = reduxForm({
  form: 'test'
});


const renderField = field => (
    <div>
      <input {...field.input}/>
      {field.touched && field.error && <div className="error">{field.error}</div>}
    </div>
);


const renderSelect = field => (  
  <div>
    <label>{field.input.label} </label> <select {...field.input} />
    {field.touched && field.error && <div className="error">{field.error}</div>}
  </div>
);

class TestForm extends Component {
  componentDidMount() {
    this.handleInitialize();
  }

  handleInitialize() {
    const initData = {
      "email": "this.user.email"
    };

    this.props.initialize(initData);
  }

  handleFormSubmit(formProps) {

//    this.props.submitFormAction(formProps);
      console.log("formprops = " + JSON.stringify(formProps));
  }

  render() {
    const { handleSubmit, onChange, email } = this.props;


    return (
      <div>
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>

          <Field name="firstName" type="text" component={renderField}   label="First Name"/>

          <label>Last Name:</label>
          <Field name="lastName" type="text" component={renderField}/>



          <label>Email:</label>
          <Field name="email" type="email" component={renderField}  />

          <label>Phone:</label>
          <Field name="phoneNumber" type="tel" component={renderField}/>

          <label>Gender:</label>
          <Field name="sex" component="select">
            <option></option>
            <option name="Male">Male</option>
            <option name="Female">Female</option>
          </Field>
          <label />
          <button action="submit">Save changes</button>
        </form>
      </div>
    )
  }
}

function validate(formProps) {
  const errors = {};

  if (!formProps.firstName) {
    errors.firstName = 'Please enter a first name';
  }

  if (!formProps.lastName) {
    errors.lastName = 'Please enter a last name';
  }

  if (!formProps.email) {
    errors.email = 'Please enter an email';
  }

  if (!formProps.phoneNumber) {
    errors.phoneNumber = 'Please enter a phone number'
  }

  return errors;
}

TestForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

/*
function mapStateToProps(state) {
  return {
    user: state.user
  };
}
*/

export default reduxForm({ 
  form: 'test',              // <------ same form name
  destroyOnUnmount: false,     // <------ preserve form data
  validate
})(form(TestForm))

// export default connect(mapStateToProps, actions)(form(TestForm));