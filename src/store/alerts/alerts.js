import { find, uniqueId, xor } from 'lodash';
import { createAction, handleActions } from 'redux-actions';

const ALERT_SHAPE = {
  children: null,
  color: 'success',
  title: 'Alert'
};

// Action Types
const ADD_ALERT = 'alerts/ADD_ALERT';
const REMOVE_ALERT = 'alerts/REMOVE_ALERT';
const RESET = 'alerts/RESET';

// Action Creators
export const addAlert = createAction(ADD_ALERT);
export const removeAlert = createAction(REMOVE_ALERT);
export const resetAlerts = createAction(RESET);

// Default State
export const DEFAULT_STATE = [];

// Reducer
export const alertsReducer = handleActions(
  {
    [ADD_ALERT]: (state, { payload }) => [payload, ...state],
    [REMOVE_ALERT]: (state, { payload }) => {
      const alert = find(state, { id: payload });
      return xor(state, [alert]);
    },
    [RESET]: () => DEFAULT_STATE
  },
  DEFAULT_STATE
);

// Selectors
export const selectAlerts = (state = {}) => state.alerts || DEFAULT_STATE;

// Thunks
export const triggerAlert = (alert = {}) => dispatch => {
  const id = uniqueId('alert__');
  const dismissFuction = () => dispatch(removeAlert(id));

  const payload = { ...ALERT_SHAPE, ...alert, id };

  dispatch(addAlert(payload));
  setTimeout(dismissFuction, 3000);
};
