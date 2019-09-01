import { combineReducers } from 'redux';
import { accountAccessReducer } from './account-access/account-access';

export const reducers = combineReducers({
  accountAccess: accountAccessReducer
});
