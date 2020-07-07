import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  paper: {
    width: 500,
    height: 150,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    margin: '15px',
  },
});

const DiscountsItems = ({ displayDiscounts, discounts }) => {
  const [selected, setSelected] = useState('');
  const classes = useStyles();

  return (
    <>
      {displayDiscounts ? (
        <Paper variant='outlined'>
          <List component='nav' aria-label='secondary mailbox folders'>
            {discounts.map((vac) => (
              <ListItem
                onClick={() => setSelected(vac.id)}
                button
                selected={vac.id === selected}
              >
                <ListItemText primary={`${vac.destination} 15% OFF`} />
              </ListItem>
            ))}
          </List>
        </Paper>
      ) : (
        <Paper classes={{ root: classes.paper }}>Discounts are hidden</Paper>
      )}
    </>
  );
};

DiscountsItems.propTypes = {
  discounts: PropTypes.array,
};

export default DiscountsItems;
