import { connect } from 'react-redux';
import Vacations from './components/Vacations';
import {
  getVacations,
  updateShowDiscounts,
  updateSelectedVacation,
} from './meta/actions';

import {
  makeSelectVacations,
  showDiscounts,
  selectDiscounts,
  selectSelectedVacation,
} from './meta/selectors';

const mapStateToProps = (state) => ({
  boolDiscounts: showDiscounts(state),
  vacations: makeSelectVacations(state),
  discounts: selectDiscounts(state),
  selectedVacation: selectSelectedVacation(state),
});

const mapDispatchToProps = (dispatch) => ({
  getVacations: () => dispatch(getVacations()),
  updateShowDiscounts: () => dispatch(updateShowDiscounts()),
  updateSelectedVacation: (id) => dispatch(updateSelectedVacation(id)),
});

const VacationsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Vacations);

export default VacationsContainer;
