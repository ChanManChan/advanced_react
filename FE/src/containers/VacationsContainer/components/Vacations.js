import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Discounts from './Discounts';
import VacationsItems from './VacationsItems';

const useStyles = makeStyles({
  vacationsRoot: {
    display: 'grid',
    gridColumnGap: '10px',
    gridRowGap: '15px',
    gridTemplateColumns: '2fr 2fr 2fr',
  },
});

function Vacations({
  boolDiscounts,
  getVacations,
  updateShowDiscounts,
  vacations,
  discounts,
  selectedVacation,
  updateSelectedVacation,
}) {
  useEffect(() => {
    if (getVacations) {
      getVacations();
    }
  }, []);
  const classes = useStyles();

  //! Avoid Reconciliation
  // Every time we render the "Vacations" component, we're creating a new object of the "vacations". The map JS function returns a new array, and when this new array is passed to the "VacationsItems", the memo will check the previous prop and the new prop and its not the same reference!, we have two different objects over here but with the same content inside. <- Just giving reasons to react to re-render the component because the props has "changed".

  // const newVacations = vacations.map((vacation) => ({
  //   ...vacation,
  //   price: 100,
  // }));

  //! This line (42) will create a new function every time this Vacations component re-render (Therefore the reference will be new everytime this function renders)
  // Very bad practise to define callback inside the functional component
  // const handleVacationOnClick = (vacationId) =>
  //   updateSelectedVacation(vacationId);

  //? SOLUTION
  // 1> Define this callback inside every vacation

  console.count('VACATIONS');

  return (
    <>
      <Discounts
        updateShowDiscounts={updateShowDiscounts}
        displayDiscounts={boolDiscounts}
        discounts={discounts}
      />
      <div className={classes.vacationsRoot}>
        <VacationsItems
          vacations={vacations}
          updateSelectedVacation={updateSelectedVacation}
        />
      </div>
    </>
  );
}

Vacations.propTypes = {
  boolDiscounts: PropTypes.bool,
  getVacations: PropTypes.func,
  updateShowDiscounts: PropTypes.func,
  vacations: PropTypes.array,
  discounts: PropTypes.array,
  selectedVacation: PropTypes.string,
  updateSelectedVacation: PropTypes.func,
};

export default Vacations;
