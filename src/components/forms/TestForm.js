import React from 'react'
import { Form, Button } from "semantic-ui-react";
import { connect } from "react-redux";

class TestForm extends React.Component {
  state = {
    name : '',
    email : '',
    isActive : true
  }

  onSubmit = e => { 
    e.preventDefault();
    console.log("state = " + JSON.stringify(this.state));
  }
  
  componentDidMount(){
    this.setState(this.props);
    this.onInit(this.props);
  }

  onInit = (props) => {
    console.log(" this props  =  " + JSON.stringify(this.props));
    console.log(" this state email =  " + JSON.stringify(this.state.email ));
  }

  onChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });


  render() {

    const { state, loading } = this;

    const { handleSubmit } = this.props;  
   return (
      <div>
        <Form onSubmit={this.onSubmit} loading={loading}>
          <Form.Field >
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@example.com"
              value={this.state.email}
              onChange={this.onChange}
            />
          </Form.Field>
          <Button primary>Login</Button>
        </Form>
      </div>
    )
  }
};

function mapStateToProps(state){
    return {
      state : state
    };
}

export default connect(mapStateToProps)(TestForm);