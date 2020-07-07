import React, { memo, useEffect } from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import VacationsIcon from '@material-ui/icons/AirplanemodeActive';
import ExitIcon from '@material-ui/icons/ExitToApp';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { styles } from '../meta/styles';
import NavItem from './NavItem';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';

import PropTypes from 'prop-types';
import { Switch as RouterSwitch, Link } from 'react-router-dom';
import VacationsContainer from 'containers/VacationsContainer';
import LoginPage from 'containers/LoginPage';
import ProfileContainer from 'containers/ProfileContainer';
import VacationDetails from 'containers/VacationDetailsContainer';
import PrivateRoute from 'components/Routes/PrivateRoute';
import PublicRoute from 'components/Routes/PublicRoute';

const useStyles = styles;

const icons = {
  home: <HomeIcon />,
  vacations: <VacationsIcon />,
};

function Navigation({
  routes,
  user,
  logout,
  updateThemeMode,
  isAuthenticated,
}) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [selectedKey, setSelectedKey] = React.useState(routes[0].key);
  const [mode, setMode] = React.useState('light');

  useEffect(() => {
    const drawerItems = routes.map((route) => (
      <Link to={route.path} className={classes.sideBarLink}>
        <NavItem
          onClick={() => setSelectedKey(route.key)}
          selectedKey={selectedKey}
          icon={icons[route.key]}
          item={route}
        />
      </Link>
    ));
    setItems(drawerItems);
  }, [routes, selectedKey]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const changeMode = () => {
    if (mode === 'dark') {
      updateThemeMode('light');
      setMode('light');
    } else {
      updateThemeMode('dark');
      setMode('dark');
    }
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position='fixed'
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap className={classes.title}>
            Vacations
          </Typography>
          <Switch
            checked={mode === 'dark'}
            onChange={changeMode}
            color='secondary'
            name='checkedB'
            inputProps={{ 'arial-label': 'primary checkbox' }}
          />
          {user && (
            <>
              <Typography variant='h6' noWrap>
                {user.username}
              </Typography>
              <Button onClick={logout} color='inherit'>
                Sign Out
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant='persistent'
        anchor='left'
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>{items}</List>
        <Divider />
        <List>
          {['Sign Out'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{<ExitIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <RouterSwitch>
          <PrivateRoute
            exact
            path='/'
            Component={VacationsContainer}
            isAuthenticated={isAuthenticated}
          />
          <PublicRoute
            exact
            path='/login'
            Component={LoginPage}
            isAuthenticated={isAuthenticated}
          />
          <PrivateRoute
            exact
            path='/profile'
            Component={ProfileContainer}
            isAuthenticated={isAuthenticated}
          />
          <PrivateRoute
            exact
            path='/vacation/:id'
            Component={VacationDetails}
            isAuthenticated={isAuthenticated}
          />
        </RouterSwitch>
      </main>
    </div>
  );
}

Navigation.propTypes = {
  isAuthenticated: PropTypes.bool,
};

export default memo(Navigation);
