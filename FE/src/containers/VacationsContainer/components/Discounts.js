import React from 'react';
import PropTypes from 'prop-types';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';
import DiscountsItems from './DiscountsItems';

const Discounts = ({ displayDiscounts, updateShowDiscounts, discounts }) => {
  return (
    <>
      <Typography variant='h6' component='h6'>
        Discounts
      </Typography>
      <Switch
        checked={displayDiscounts}
        onChange={updateShowDiscounts}
        color='primary'
        name='checkedB'
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      <DiscountsItems
        discounts={discounts}
        displayDiscounts={displayDiscounts}
      />
    </>
  );
};

Discounts.propTypes = {
  updateShowDiscounts: PropTypes.func,
  displayDiscounts: PropTypes.bool,
};

export default Discounts;
