import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import BasicInfo from './BasicInfo';
import OrdersHistory from './OrdersHistory';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';

function Profile({ status, user, orders, getProfile, updateUserStatus }) {
  useEffect(() => {
    if (getProfile) {
      getProfile();
    }
  }, []);

  console.count('PROFILE');

  return (
    <Grid container direction='column' alignItems='center'>
      <Chip
        onClick={updateUserStatus}
        label={status}
        style={{
          backgroundColor: status === 'active' ? 'green' : '',
          color: status === 'active' ? 'white' : '',
        }}
      />
      <BasicInfo user={user} />
      <OrdersHistory orders={orders} />
    </Grid>
  );
}

Profile.propTypes = {
  status: PropTypes.string,
  user: PropTypes.object,
  orders: PropTypes.array,
  getProfile: PropTypes.func,
  updateUserStatus: PropTypes.func,
};

export default Profile;
