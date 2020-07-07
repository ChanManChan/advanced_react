import { initialState } from './reducer';
import { createSelector } from 'reselect';

/**
 * Get Vacations
 * @param state
 * @returns {Object}
 */

export const select = (state) => state.vacations || initialState;

export const selectVacations = (state) => select(state).vacations;

//! MEMOIZING SELECTORS
// I would like to execute this "makeSelectVacations" logic only when the "vacations" object change
export const makeSelectVacations = createSelector(
  selectVacations,
  (vacations) => {
    console.log('TESTING FROM CREATE_SELECTOR');
    return vacations.map((vacation) => ({
      ...vacation,
      price: vacation.price + 10,
    }));
  }
);

export const showDiscounts = (state) => select(state).showDiscounts;

export const selectDiscounts = (state) => select(state).discounts;
