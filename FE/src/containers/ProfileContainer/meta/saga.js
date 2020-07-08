import { all, takeLatest, put, call } from 'redux-saga/effects';
import * as constants from './constants';
import * as actions from './actions';
import { getEndpointURL } from 'utils/endpoint';
import network from 'utils/network';

function* handleGetProfile() {
  try {
    const action = getEndpointURL('GET_PROFILE');
    const response = yield call(network.getData, action);
    yield put(actions.getProfileSuccess(response));
  } catch (error) {
    yield put(actions.getProfileError(error));
  }
}

function* handleUpdateUserStatusChange() {
  try {
    yield put(actions.updateUserStatusSuccess());
  } catch (error) {
    console.log(error);
  }
}

export default function* () {
  yield all([
    yield takeLatest(constants.GET_PROFILE, handleGetProfile),
    yield takeLatest(
      constants.UPDATE_USER_STATUS,
      handleUpdateUserStatusChange
    ),
  ]);
}
