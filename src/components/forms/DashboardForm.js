import React from "react";
import PropTypes from "prop-types";
import Validator from "validator";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Form, Button, Message } from "semantic-ui-react";
import DatePicker from "react-datepicker";
import InlineError from "../messages/InlineError";
// import { profileSelector } from "../../reducers/profile";


class DashboardForm extends React.Component {
 state = {
    user: { 
        email: "",
	    firstname: "",
	    lastname: "",
   		address1: "",
	  	address2: "",
	  	st: "",
  		preferredContactMethod: "",
		cellphone: "",	  		
		homephone: ""
    },
    loading: false,
    errors: {},
    message: {}
  }

  componentDidMount(){
    this.setState(this.props.state);
    this.onInit(this.props);
  }

  onInit = (props) => {
//  	this.state.data.email = this.props.state.user.email
//    console.log(" xx this props state user email =  " + JSON.stringify(this.props.state.user.email ));
  }
/*
  onSubmit = e => { 
  	e.preventDefault();
  	console.log("submit state = " + JSON.stringify(this.state));
  };
*/
  onChange = e => {
	    this.setState({
	      user: { ...this.state.user, [e.target.name]: e.target.value }
    });
}

  onSubmit = () => {
    const errors = this.validate(this.state.user);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.props
        .submit(this.state.user)
//        .catch(err =>
//          this.setState({ errors: err.response.data.errors, loading: false })
//        );
	  this.setState( {loading:false});
    }
  };

  validate = data => {
    const errors = {};
    if (!data.firstname) errors.firstname = "First name can not be blank";
    if (!data.lastname) errors.lastname = "Last Name can not be blank";
    if (!data.address1) errors.address1 = "Address can not be blank";
    if (!data.zip) errors.zip = "Zip Code can not be blank";
    if (!data.email) errors.email = "Email can not be blank";
    return errors;
  };

  render() {
    const { user, errors, loading,  state } = this.state;
    console.log(" xx this props  =  " + JSON.stringify(this.props));
  	console.log(" xx state = " + JSON.stringify(this.state));
  	console.log(" xx data = " + JSON.stringify(this.state.user));
  	
    console.log(" xx message = " + JSON.stringify(this.props.state.user.message));

    return (
	<div>
		<div className="ui pointing menu">
		  <a className="active item">
		  		<Link to="/dashboard">My Profile</Link>
		  </a>
		  <a className="item">
		  		<Link to="/claims">Claims</Link>
		  </a>
		  <a className="item">
		  		<Link to="/providers">My Providers</Link>
		  </a>
		  <a className="item">
		  		<Link to="/info">Info Center</Link>
		  </a>
		  <a className="item">
		  		<Link to="/forms">Form Library</Link>
		  </a>
		  <div className="right menu">
		    <div className="item">
		       <div className="ui transparent icon input">
		          <input type="text" placeholder="Search..."  />
		          <i className="search link icon" />
		       </div>
		    </div>
		  </div>
		</div>
		<Form  onSubmit={this.onSubmit} loading={loading}>
			<div className="ui segment">
				<div className="ui form">
				  <h4 className="ui dividing header">Personal Address</h4>
				  <div className="field">
				    Name
				    <div className="two fields">
				      <Form.Field error={!!errors.firstname}>
				        <input 
				        	type="text" 
				        	name="firstname" 
				        	placeholder="First Name" 
				        	value= { this.state.user.firstname } 
				        	onChange= { this.onChange } 
				        />
	                    {errors.firstname && <InlineError text={errors.firstname} />}
				      </Form.Field>
				      <div className="field">
	 			       <Form.Field error={!!errors.lastname}>
				        <input 
				        	type="text" 
				        	name="lastname" 
				        	placeholder="Last Name" 
				        	value= { this.state.user.lastname }
				        	onChange= { this.onChange } 
				        />
	                    {errors.lastname && <InlineError text={errors.lastname} />}
				      </Form.Field>
				      </div>
				    </div>
				  </div>
				  <div className="field">
				    Home Address
				    <div className="fields">
				      <div className="twelve wide field">
 				       <Form.Field error={!!errors.address1}>
				         <input 
				        	type="text" 
				        	name="address1" 
				        	placeholder="Street Address" 
				        	value= { this.state.user.address1 } 
				        	onChange= { this.onChange } 
				        	/>
	                    {errors.address1 && <InlineError text={errors.address1} />}
	                   </Form.Field>
				      </div>
				      <div className="four wide field">
 				       <Form.Field error={!!errors.address2}>
				        <input 
				        	type="text"
				        	name="address2" 
				        	placeholder="Apt #"  
				        	value= { this.state.user.address2 } 
				        	onChange= { this.onChange } 
				        	/>
	                    {errors.address2 && <InlineError text={errors.address2} />}
	                   </Form.Field>
				      </div>
				    </div>
				  </div>
				  <div className="two fields">
				    <div className="field">
				      <Form.Field error={!!errors.st}>
				      State
				      <select
				       className="ui fluid dropdown" 
				       name="st"
				       value= { this.state.user.st }
				       onChange = { this.onChange } >
						    <option value="AL">Alabama</option>
						    <option value="AK">Alaska</option>
						    <option value="AZ">Arizona</option>
						    <option value="AR">Arkansas</option>
						    <option value="CA">California</option>
						    <option value="CO">Colorado</option>
						    <option value="CT">Connecticut</option>
						    <option value="DE">Delaware</option>
						    <option value="DC">District Of Columbia</option>
						    <option value="FL">Florida</option>
						    <option value="GA">Georgia</option>
						    <option value="HI">Hawaii</option>
						    <option value="ID">Idaho</option>
						    <option value="IL">Illinois</option>
						    <option value="IN">Indiana</option>
						    <option value="IA">Iowa</option>
						    <option value="KS">Kansas</option>
						    <option value="KY">Kentucky</option>
						    <option value="LA">Louisiana</option>
						    <option value="ME">Maine</option>
						    <option value="MD">Maryland</option>
						    <option value="MA">Massachusetts</option>
						    <option value="MI">Michigan</option>
						    <option value="MN">Minnesota</option>
						    <option value="MS">Mississippi</option>
						    <option value="MO">Missouri</option>
						    <option value="MT">Montana</option>
						    <option value="NE">Nebraska</option>
						    <option value="NV">Nevada</option>
						    <option value="NH">New Hampshire</option>
						    <option value="NJ">New Jersey</option>
						    <option value="NM">New Mexico</option>
						    <option value="NY">New York</option>
						    <option value="NC">North Carolina</option>
						    <option value="ND">North Dakota</option>
						    <option value="OH">Ohio</option>
						    <option value="OK">Oklahoma</option>
						    <option value="OR">Oregon</option>
						    <option value="PA">Pennsylvania</option>
						    <option value="RI">Rhode Island</option>
						    <option value="SC">South Carolina</option>
						    <option value="SD">South Dakota</option>
						    <option value="TN">Tennessee</option>
						    <option value="TX">Texas</option>
						    <option value="UT">Utah</option>
						    <option value="VT">Vermont</option>
						    <option value="VA">Virginia</option>
						    <option value="WA">Washington</option>
						    <option value="WV">West Virginia</option>
						    <option value="WI">Wisconsin</option>
						    <option value="WY">Wyoming</option>
				      </select>
	                 {errors.st && <InlineError text={errors.st} />}
	                 </Form.Field>
				    </div>
				  </div>
				  <h4 className="ui dividing header">Preferred Contact Method</h4>
				  <div className="inline fields">
				    <label>What is your <i>Preferred</i> Contact Method?</label>
				    <div className="field">
				      <div className="ui radio checkbox">
				        <input 
				        	type="radio" 
				        	name="contactMethod" 
				        	checked="checked" 
				        />
				        <label>Text</label>
				      </div>
				    </div>
				    <div className="field">
				      <div className="ui radio checkbox">
				        <input 
				        	type="radio" 
				        	name="frequency" 
				        />
				        <label>Email </label>
				      </div>
				    </div>
				    <div className="field">
				      <div className="ui radio checkbox">
				        <input 
				        	type="radio" 
				        	name="frequency" 
				        />
				        <label>Voice</label>
				      </div>
				    </div>
				  </div>
				  <h4 className="ui dividing header">Contact Methods</h4>
				  <div className="field">
				    <label>Cell Phone</label>
				    <Form.Field error={!!errors.cellphone}>
					    <input 
					    	type="text" 
					    	name="cellphone" 
					    	placeholder="212 555 1212" 
					    	value= { this.state.user.cellphone } 
				        	onChange= { this.onChange } 
					    	/>
	                    {errors.cellphone && <InlineError text={errors.cellphone} />}
					</Form.Field>
				  </div>
				  <div className="field">
				    <label>Email</label>
				    <Form.Field error={!!errors.email}>
					    <input 
					    	type="text" 
					    	name="email" 
					    	value= { this.state.user.email } 
					    	onChange={this.onChange} 
					    />
	                    {errors.email && <InlineError text={errors.email} />}
					</Form.Field>
				  </div>
				  <div className="field">
				    <label>Home Phone</label>
				    <Form.Field error={!!errors.homephone}>
					    <input 
					    	type="text" 
					    	name="homephone" 
					    	placeholder="212 555 4000" 
					    	value= { this.state.user.homephone } 
					    	onChange={this.onChange}
					    />
	                    {errors.homephone && <InlineError text={errors.homephone} />}
					</Form.Field>
				  </div>
			        {!!this.props.state.user.message && (
			          <Message positive>
			            <p>{this.props.state.user.message.global}</p> 
			          </Message>
			        )}
				  <Button primary> Update My Profile </Button>
				</div>
			</div>
		</Form>
	</div>
	)
  }
}

DashboardForm.propTypes = {
  submit: PropTypes.func.isRequired
};

// export default DashboardForm;


function mapStateToProps(state){
	return {
        state :  state
	}
}
export default connect(mapStateToProps)(DashboardForm);
