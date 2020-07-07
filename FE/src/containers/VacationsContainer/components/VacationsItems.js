import React from 'react';
import PropTypes from 'prop-types';
import Vacation from './Vacation';

const VacationsItems = ({ vacations }) => {
  console.count('VacationsItems');
  return vacations.map((vacation) => <Vacation vacation={vacation} />);
};

VacationsItems.propTypes = {
  vacations: PropTypes.array,
};

//! Shallowly compare complex objects in the props object (Prevent re-rendering this component multiple times)
export default React.memo(VacationsItems);
