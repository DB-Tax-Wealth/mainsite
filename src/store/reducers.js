import { combineReducers } from 'redux';
import { accountAccessReducer } from './account-access/account-access';
import { contactFormReducer } from './contact-form/contact-form';

export const reducers = combineReducers({
  accountAccess: accountAccessReducer,
  contactForm: contactFormReducer
});
