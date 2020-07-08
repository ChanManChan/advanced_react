import { all, takeLatest, put, call } from 'redux-saga/effects';
import * as constants from './constants';
import * as actions from './actions';
import network from 'utils/network';
import { getEndpointURL } from 'utils/endpoint';

function* handleGetVacations() {
  try {
    const action = getEndpointURL('GET_VACATIONS');
    const response = yield call(network.getData, action);
    yield put(actions.getVacationsSuccess(response));
  } catch (error) {
    yield put(actions.getVacationsError(error));
  }
}

function* handleUpdateShowDiscounts() {
  try {
    yield put(actions.updateShowDiscountsSuccess());
  } catch (error) {
    console.log(error);
  }
}

function* handleSelectedVacation(action) {
  try {
    yield put(actions.getSelectedVacation(action.vacationId));
  } catch (error) {
    console.log(error);
  }
}

export default function* () {
  yield all([
    yield takeLatest(constants.GET_VACATIONS, handleGetVacations),
    yield takeLatest(
      constants.UPDATE_SHOW_DISCOUNTS,
      handleUpdateShowDiscounts
    ),
    yield takeLatest(
      constants.UPDATE_SELECTED_VACATION,
      handleSelectedVacation
    ),
  ]);
}
