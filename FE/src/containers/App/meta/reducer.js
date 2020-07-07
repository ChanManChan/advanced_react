/* eslint-disable no-param-reassign */
import produce from 'immer';
import { getTheme } from './theme';
import * as constants from './constants';

export const initialState = {
  theme: getTheme(),
};

const appReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case constants.UPDATE_THEME_MODE:
        // 'light' or 'dark'
        draft.theme = getTheme(action.payload);
        break;
      default:
        break;
    }
  });

export default appReducer;
