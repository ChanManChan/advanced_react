import { all, takeLatest, put, call, select } from 'redux-saga/effects';
import * as constants from './constants';
import * as actions from './actions';
import { selectVacations } from 'containers/VacationsContainer/meta/selectors';
// import {getData} from "utils/network";

function* handleGetVacationDetails(action) {
  try {
    // select all vacations
    const vacations = yield select(selectVacations);
    // Find the spacific vacation
    const vacation = vacations.find(
      (vacation) => vacation.id === action.vacationId
    );
    // pass the vacation to the succes action
    yield put(actions.getVacationDetailsSuccess(vacation));
  } catch (error) {
    yield put(actions.getVacationDetailsError(error));
  }
}

export default function* () {
  yield all([
    yield takeLatest(constants.GET_VACATIONDETAILS, handleGetVacationDetails),
  ]);
}
