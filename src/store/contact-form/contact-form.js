import { createAction, handleActions } from 'redux-actions';
import { isValidEmailAddress } from 'util/is-valid-email-address/is-valid-email-address';
import { postContactForm } from 'services/contact-form/contact-form';

// Actions
const REQUEST_FAILURE = 'contact-form/REQUEST_FAILURE';
const REQUEST_START = 'contact-form/REQUEST_START';
const REQUEST_SUCCESS = 'contact-form/REQUEST_SUCCESS';
const RESET = 'contact-form/RESET';
const UPDATE_ACTIVE = 'contact-form/UPDATE_ACTIVE';
const UPDATE_EMAIL = 'contact-form/UPDATE_EMAIL';
const UPDATE_MESSAGE = 'contact-form/UPDATE_MESSAGE';
const UPDATE_NAME = 'contact-form/UPDATE_NAME';

// Action Creators
export const contactFormRequestFailure = createAction(REQUEST_FAILURE);
export const contactFormRequestStart = createAction(REQUEST_START);
export const contactFormRequestSuccess = createAction(REQUEST_SUCCESS);
export const resetContactForm = createAction(RESET);
export const updateContactFormActive = createAction(UPDATE_ACTIVE);
export const updateContactFormEmail = createAction(UPDATE_EMAIL);
export const updateContactFormMessage = createAction(UPDATE_MESSAGE);
export const updateContactFormName = createAction(UPDATE_NAME);

// Default State
export const DEFAULT_STATE = {
  active: false,
  email: '',
  isRequesting: false,
  message: '',
  name: ''
};

// Reducer
export const contactFormReducer = handleActions(
  {
    [REQUEST_FAILURE]: state => ({ ...state, isRequesting: false }),
    [REQUEST_START]: state => ({ ...state, isRequesting: true }),
    [REQUEST_SUCCESS]: state => ({ ...state, isRequesting: false }),
    [RESET]: () => DEFAULT_STATE,
    [UPDATE_ACTIVE]: (state, { payload: active }) => ({ ...state, active }),
    [UPDATE_EMAIL]: (state, { payload: email }) => ({ ...state, email }),
    [UPDATE_MESSAGE]: (state, { payload: message }) => ({ ...state, message }),
    [UPDATE_NAME]: (state, { payload: name }) => ({ ...state, name })
  },
  DEFAULT_STATE
);

// Selectors
export const selectContactForm = (state = {}) => state.contactForm || DEFAULT_STATE;

export const selectContactFormActive = state => selectContactForm(state).active || DEFAULT_STATE.active;
export const selectContactFormEmail = state => selectContactForm(state).email || DEFAULT_STATE.email;
export const selectContactFormMessage = state => selectContactForm(state).message || DEFAULT_STATE.message;
export const selectContactFormName = state => selectContactForm(state).name || DEFAULT_STATE.name;
export const selectContactFormIsRequesting = state =>
  selectContactForm(state).isRequesting || DEFAULT_STATE.isRequesting;

export const selectContactFormNameValid = state => Boolean(selectContactFormName(state));
export const selectContactFormMessageValid = state => Boolean(selectContactFormMessage(state));
export const selectContactFormEmailValid = state => {
  const emailExists = Boolean(selectContactFormEmail(state));
  const email = selectContactFormEmail(state);
  const emailIsCorrectFormat = isValidEmailAddress(email);

  return emailExists && emailIsCorrectFormat;
};
export const selectContactFormEmailError = state => {
  const emailExists = Boolean(selectContactFormEmail(state));
  const email = selectContactFormEmail(state);
  const emailIsCorrectFormat = isValidEmailAddress(email);

  return emailExists && !emailIsCorrectFormat;
};
export const selectContactFormEmailErrorMessage = state => {
  const email = selectContactFormEmail(state);
  return `${email} is not a valid email address.`;
};

export const selectContactFormValid = state => {
  const emailValid = selectContactFormEmailValid(state);
  const messageValid = selectContactFormMessageValid(state);
  const nameValid = selectContactFormNameValid(state);

  return Boolean(emailValid && messageValid && nameValid);
};

// Thunks
export const closeContactForm = () => dispatch => {
  dispatch(resetContactForm());
};

export const openContactForm = () => dispatch => {
  dispatch(updateContactFormActive(true));
};

export const requestContactFormSubmit = () => async (dispatch, getState) => {
  const state = getState();

  const email = selectContactFormEmail(state);
  const name = selectContactFormName(state);
  const message = selectContactFormMessage(state);

  dispatch(contactFormRequestStart());

  try {
    await postContactForm({ email, name, message });
    dispatch(contactFormRequestSuccess());
    dispatch(resetContactForm());
  } catch (error) {
    dispatch(contactFormRequestFailure());
  }
};
