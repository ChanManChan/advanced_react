import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const PublicRoute = ({ path, Component, exact, isAuthenticated }) => {
  if (isAuthenticated) return <Redirect to='/' />;
  else return <Route component={Component} exact={exact} path={path} />;
};

PublicRoute.propTypes = {
  path: PropTypes.string,
  Component: PropTypes.object,
  exact: PropTypes.bool,
  isAuthenticated: PropTypes.bool,
};

export default PublicRoute;
