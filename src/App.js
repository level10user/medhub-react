import React from 'react';
import { connect } from "react-redux";
import { Route, location } from 'react-router-dom';
import PropTypes from 'prop-types';	
import HomePage  from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import DashboardPage from "./components/pages/DashboardPage";
import UserRoute from "./components/routes/UserRoute";
import ClaimsPage from "./components/pages/ClaimsPage";
import ProvidersPage from "./components/pages/ProvidersPage";
import InfoPage from "./components/pages/InfoPage";
import FormsPage from "./components/pages/FormsPage";
import AdminPage from "./components/pages/AdminPage";
import Bar from "./components/pages/ChartTest"; 
import ForgotPasswordPage from "./components/pages/ForgotPasswordPage";
import ResetPasswordPage from "./components/pages/ResetPasswordPage";
import TopNavigation from "./components/navigation/TopNavigation";
import TestPage from "./components/pages/TestPage";


const App = ({ location, isAuthenticated }) => 
<div className="ui container">
    {isAuthenticated && <TopNavigation />}
    <Route location={ location } path="/" exact component={HomePage} />
	<Route location={ location } path="/Login" exact component={LoginPage} />
	<UserRoute location={ location } path="/dashboard" exact component={DashboardPage} />
	<Route location={ location } path="/claims" exact component={ClaimsPage} />
	<UserRoute location={ location } path="/providers" exact component={ProvidersPage} />
	<UserRoute location={ location } path="/info" exact component={InfoPage} />
	<UserRoute location={ location } path="/forms" exact component={FormsPage} />
	<Route location={ location } path="/admin" exact component={AdminPage} />
	<Route location={ location } path="/bar" exact component={Bar} />
	<Route location={ location } path="/forgotPassword" exact component={ForgotPasswordPage} />
	<Route location={ location } path="/reset_password/:token" exact component={ResetPasswordPage} />
	<UserRoute location={ location } path="/test" exact component={TestPage} />
</div>;

App.propTypes = {
	location: PropTypes.shape({
	  	pathname: PropTypes.string.isRequired 
	}).isRequired,
	isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps (state) {
	return {
		isAuthenticated: !! state.user.email
	};
}

export default connect (mapStateToProps)(App);
