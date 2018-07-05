import React from "react";
import { Link } from "react-router-dom";
// import PropTypes from 'prop-types';	
import BarExample from  "../charts/bar";
import TotalTickets from  "../charts/TotalTickets";
		

const AdminPage = () => (
	<div>
		<h1>Administrator Pages </h1>
		<div className="ui pointing menu">
		  <a className="item">
		  		<Link to="/dashboard">My Profile</Link>
		  </a>
		  <a className="item item">
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
		  <a className="active item">
		  		<Link to="/adminDash">Admin Overview</Link>
		  </a>
		  <a className="item">
		  		<Link to="/reports">Reports</Link>
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
		<div>
			<h1>Company Overview </h1>
			<div>
				<BarExample />
			</div>
			<div>
				<TotalTickets />
			</div>

		</div>


	</div>
);


/* function mapStateToProps(state){
		return { (null, null) };
}
*/
// export default connect(mapStateToProps),DashboardPage;
export default AdminPage;