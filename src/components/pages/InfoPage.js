import React from "react";
import { Link } from "react-router-dom";
// import PropTypes from 'prop-types';	
		

const InfoPage = () => (
	<div>
		<div className="ui pointing menu">
		  <a className="item">
		  		<Link to="/dashboard">My Profile</Link>
		  </a>
		  <a className="item">
		  		<Link to="/claims">Claims</Link>
		  </a>
		  <a className="item">
		  		<Link to="/providers">My Providers</Link>
		  </a>
		  <a className="active item">
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
		  <p />
		</div>
	</div>
);


/* function mapStateToProps(state){
		return { (null, null) };
}
*/
// export default connect(mapStateToProps),DashboardPage;
export default InfoPage;