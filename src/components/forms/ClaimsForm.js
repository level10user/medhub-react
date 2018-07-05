import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Validator from "validator";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import { Button } from "semantic-ui-react";

// import moment from "moment";
import 'react-datepicker/dist/react-datepicker.css';
import { fetchClaims } from "../../actions/claims"; 
import ClaimRow from "../pages/ClaimRow"; 

class ClaimsForm extends React.Component {
  constructor(props){
   super(props)
   this.updateClaims = this.updateClaims.bind(this)
  }
  state = {
    data: {
      email: ""
    },
    loading: false,
    errors: {},
    fromdate: "",
    todate: "",
    claims: []
  };

  componentDidMount(){
    this.onInit(this.props);
  }
/*
  onInit = props => props.fetchClaims()
     .then(results =>  console.log("results = " + JSON.stringify(results)  ))
     .then(claims => this.setState( { results:{ claims}  } ))
     .then(results => console.log("results state = " + JSON.stringify(this.state)  ));
*/
  onInit = props => props.fetchClaims()
       .then(results =>  {
            console.log("results = " + JSON.stringify(results))
            this.setState( { claims: results.claims }, () => console.log("results state = " + JSON.stringify(this.state) ))
  })


  onChange = e => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    })};

  onSubmit = e => {
    e.preventDefault();
    console.log("onSubmit me" + JSON.stringify(this.state));
//    const errors = this.validate(this.state.data);
//    this.setState({ errors });
/*    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.props
        .submit(this.state.data)
        .catch(err =>
          this.setState({ errors: err.response.data.errors, loading: false })
        );
*/
//    }
  };

  updateClaims (id, claimRowChange) {
    const index = this.state.claims.findIndex( x => x._id === id) ;
    if (index === -1)
      // handle error
       console.log("DIDN'T FIND ID: " + id);
    else
      this.setState({
        claims: [
           ...this.state.claims.slice(0,index),
           Object.assign({}, this.state.claims[index], claimRowChange),
          ...this.state.claims.slice(index+1)
        ]
    });
  }


  validate = data => {
    const errors = {};
    if (!Validator.isEmail(data.email)) errors.email = "Invalid email";
    if (!data.password) errors.password = "Can't be blank";
    return errors;
  };

  render() {
    const { data, errors, loading } = this.state;
//      const { listItems } = "" ;

    return (
  <div>
    <div className="ui pointing menu">
      <a className="item">
          <Link to="/dashboard">My Profile</Link>
      </a>
      <a className="active item">
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
    <div className="ui segment">
      <div className="ui form">
          <div className="field"><h1 className="ui dividing header">Your Individual Claims </h1></div>
          <div className="field"><h4 className="ui dividing header">Filters </h4></div>
          <div className="two fields">
            <div class="ui vertical buttons">
              <button class="ui button">Today</button>
              <button class="ui button">This Month</button>
              <button class="ui button">Last Month</button>
              <button class="ui button">This Year</button>
            </div>
            <div className="field">
              <label> From Date</label>
              <DatePicker
                value={ this.date } 
                name="fromdate"
              />
              <label> To Date</label>
              <DatePicker
                value={ this.date } 
                name="fromdate"
              />
            </div>
          </div>
          <div className="field"><h4 className="ui dividing header" /> </div>
      <form onSubmit={this.onSubmit} loading={loading} >
      <table className="ui celled table" border="1">
         <thead>
          <tr>
            <th >Status</th>
            <th >Service Date of Visit</th>
            <th >Claim ID</th>
            <th >Insurance Plan</th>
          </tr>
        </thead>
        <tbody>
             {this.state.claims.map ( claim => <ClaimRow claim= { claim } updateClaims={this.updateClaims}  /> ) }
        </tbody>
        <tfoot className="full-width">
          <tr>
            <th colspan="4">
              <div className="ui small button">
                <Button Primary>Approve Selected</Button>
              </div>
              <div className="ui right floated button" >
                  Next
                      <i class="right arrow icon"> </i>
              </div>
              <div className="ui right floated button" >
                      <i class="left arrow icon"></i>
                 Prev
              </div>
            </th>
          </tr>
        </tfoot>
      </table>
      </form>
      </div>
    </div>
    <div>
   </div>
  </div>
  )
  }
}

ClaimsForm.propTypes = {
  submit: PropTypes.func.isRequired,
  state: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  claims: PropTypes.string.isRequired
};

function mapStateToProps(state){
    return {
      state :  state
    };
};

export default connect(mapStateToProps, { fetchClaims} )(ClaimsForm);
