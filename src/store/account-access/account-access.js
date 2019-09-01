import { createAction, handleActions } from 'redux-actions';

// Actions
const UPDATE = 'account-access/UPDATE';
const RESET = 'account-access/RESET';

// Action Creators
export const updateSampleValue = createAction(UPDATE);
export const resetSampleValue = createAction(RESET);

// Default State
export const DEFAULT_STATE = false;

// Reducer
export const accountAccessReducer = handleActions(
  {
    [RESET]: () => DEFAULT_STATE,
    [UPDATE]: (state, { payload }) => payload
  },
  DEFAULT_STATE
);

// Selectors
export const selectAccountAccess = (state = {}) => state.accountAccess || DEFAULT_STATE;

// Thunks
export const closeAccountAccess = () => dispatch => {
  dispatch(updateSampleValue(false));
};

export const openAccountAccess = () => dispatch => {
  dispatch(updateSampleValue(true));
};
