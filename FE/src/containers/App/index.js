/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import LoginPage from '../LoginPage';
import NavigationContainer from 'containers/NavigationContainer';
// import HomePage from "../../hooks/HomePage";
import { getAuth } from 'containers/AuthContainer/meta/selectors';
import { selectTheme } from './meta/selectors';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';

function App({ auth, theme }) {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        {!auth.isAuthenticated ? <LoginPage /> : <NavigationContainer />}
      </ThemeProvider>
    </BrowserRouter>
  );
}

App.propTypes = {
  auth: PropTypes.object,
};

const mapStateToProps = (state) => ({
  auth: getAuth(state),
  theme: selectTheme(state),
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(App);
