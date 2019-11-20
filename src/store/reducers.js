import { combineReducers } from 'redux';
import { accountAccessReducer } from './account-access/account-access';
import { contactFormReducer } from './contact-form/contact-form';
import { alertsReducer } from './alerts/alerts';

export const reducers = combineReducers({
  accountAccess: accountAccessReducer,
  alerts: alertsReducer,
  contactForm: contactFormReducer
});
