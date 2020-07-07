import { connect } from 'react-redux';
import Vacations from './components/Vacations';
import { getVacations, updateShowDiscounts } from './meta/actions';
import {
  makeSelectVacations,
  showDiscounts,
  selectDiscounts,
} from './meta/selectors';

const mapStateToProps = (state) => ({
  boolDiscounts: showDiscounts(state),
  vacations: makeSelectVacations(state),
  discounts: selectDiscounts(state),
});

const mapDispatchToProps = (dispatch) => ({
  getVacations: () => dispatch(getVacations()),
  updateShowDiscounts: () => dispatch(updateShowDiscounts()),
});

const VacationsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Vacations);

export default VacationsContainer;
