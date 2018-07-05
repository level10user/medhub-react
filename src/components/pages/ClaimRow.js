import React from "react";
import PropTypes from 'prop-types';

/*
const Obj = {
  claimID: '',
  claimDate: '',
  carrier: '',
  status: false 
};
*/
class ClaimRow extends React.Component {
  state = {
    _id:"",
    claimID: "",
    claimDate:"",
    status : "",
    carrier: ""
  };

  componentDidMount(){
      this.setState( {_id: this.props.claim._id});
      this.setState({claimID: this.props.claim.claimID});
      this.setState({claimDate: this.props.claim.claimDate});
      this.setState({carrier: this.props.claim.carrier});
      this.setState({status: this.props.claim.status});
  }

  onChange = e => {
//        this.setState({state: {...this.state, "status": e.target.value} } );
        console.log("claimrow state = " + JSON.stringify(this.state));
//        this.props.updateClaims(e.target.name,{state: {...this.state, "status": e.target.value} });
        this.props.updateClaims(e.target.name,{"carrier": this.state.carrier,"claimDate": this.state.claimDate, "claimID": this.state.claimID, "status": e.target.value} );

  }

  render(){
//      console.log("claimrow state = " + JSON.stringify(this.state));
      const {claim} = this.props; 


      return (
                <tr >
                   <td >
                        <input type="radio" name={claim._id} label="That Was Me"  value="valid" onChange={e=>this.onChange(e)}   checked={this.props.claim.status === 'valid'}  disabled={this.props.claim.status === 'valid'  || this.props.claim.status === 'fraud' } /> 
                         Valid? <br />
                        <input type="radio" name={claim._id} label="Looks Like Fraud" value="fraud" onChange={e=>this.onChange(e)} checked={this.props.claim.status === 'fraud'} disabled={this.props.claim.status === 'fraud' || this.props.claim.status === 'valid'} />
                        Fraud? <br />
                        <input type="radio" name={claim._id} label="Looks Like Fraud"  value="notselected" onChange={e=>this.onChange(e)} checked={!this.props.claim.status || this.props.claim.status === 'notselected'}  disabled={this.props.claim.status === 'valid'  || this.props.claim.status === 'fraud' } /> 
                        Not Yet Sure
                    </td>
                  <td name="claimDate" value={claim.claimDate}>  {claim.claimDate} </td>
                  <td name="claimID" value={claim.claimID}>  {claim.claimID}  </td>
                  <td name="carrier" value={claim.carrier}>  {claim.carrier}  </td>
               </tr>
      )
  }
}
ClaimRow.propTypes = {
  claim: PropTypes.string.isRequired
};

export default ClaimRow;