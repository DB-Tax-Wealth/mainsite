import { createAction, handleActions } from 'redux-actions';
import { isValidEmailAddress } from 'util/is-valid-email-address/is-valid-email-address';
import { postContactForm } from 'services/contact-form/contact-form';
import { triggerAlert } from 'store/alerts/alerts';

// Actions
const REQUEST_FAILURE = 'contact-form/REQUEST_FAILURE';
const REQUEST_START = 'contact-form/REQUEST_START';
const REQUEST_SUCCESS = 'contact-form/REQUEST_SUCCESS';
const RESET = 'contact-form/RESET';
const UPDATE_ACTIVE = 'contact-form/UPDATE_ACTIVE';
const UPDATE_ADDRESS = 'contact-form/UPDATE_ADDRESS';
const UPDATE_EMAIL = 'contact-form/UPDATE_EMAIL';
const UPDATE_EMAIL_IS_DIRTY = 'contact-form/UPDATE_EMAIL_IS_DIRTY';
const UPDATE_MESSAGE = 'contact-form/UPDATE_MESSAGE';
const UPDATE_NAME = 'contact-form/UPDATE_NAME';

// Action Creators
export const contactFormRequestFailure = createAction(REQUEST_FAILURE);
export const contactFormRequestStart = createAction(REQUEST_START);
export const contactFormRequestSuccess = createAction(REQUEST_SUCCESS);
export const resetContactForm = createAction(RESET);
export const updateContactFormActive = createAction(UPDATE_ACTIVE);
export const updateContactFormAddress = createAction(UPDATE_ADDRESS);
export const updateContactFormEmail = createAction(UPDATE_EMAIL);
export const updateContactFormEmailIsDirty = createAction(UPDATE_EMAIL_IS_DIRTY);
export const updateContactFormMessage = createAction(UPDATE_MESSAGE);
export const updateContactFormName = createAction(UPDATE_NAME);

// Default State
export const DEFAULT_STATE = {
  active: false,
  address: '',
  email: '',
  emailIsDirty: false,
  isRequesting: false,
  message: '',
  name: '',
};

// Reducer
export const contactFormReducer = handleActions(
  {
    [REQUEST_FAILURE]: (state) => ({ ...state, isRequesting: false }),
    [REQUEST_START]: (state) => ({ ...state, isRequesting: true }),
    [REQUEST_SUCCESS]: (state) => ({ ...state, isRequesting: false }),
    [RESET]: () => DEFAULT_STATE,
    [UPDATE_ACTIVE]: (state, { payload: active }) => ({ ...state, active }),
    [UPDATE_ADDRESS]: (state, { payload: address }) => ({ ...state, address }),
    [UPDATE_EMAIL]: (state, { payload: email }) => ({ ...state, email }),
    [UPDATE_EMAIL_IS_DIRTY]: (state, { payload: emailIsDirty }) => ({ ...state, emailIsDirty }),
    [UPDATE_MESSAGE]: (state, { payload: message }) => ({ ...state, message }),
    [UPDATE_NAME]: (state, { payload: name }) => ({ ...state, name }),
  },
  DEFAULT_STATE
);

// Selectors
export const selectContactForm = (state = {}) => state.contactForm || DEFAULT_STATE;

export const selectContactFormActive = (state) => selectContactForm(state).active || DEFAULT_STATE.active;
export const selectContactFormEmail = (state) => selectContactForm(state).email || DEFAULT_STATE.email;
export const selectContactFormEmailIsDirty = (state) =>
  selectContactForm(state).emailIsDirty || DEFAULT_STATE.emailIsDirty;
export const selectContactFormAddress = (state) => selectContactForm(state).address || DEFAULT_STATE.address;
export const selectContactFormMessage = (state) => selectContactForm(state).message || DEFAULT_STATE.message;
export const selectContactFormName = (state) => selectContactForm(state).name || DEFAULT_STATE.name;
export const selectContactFormIsRequesting = (state) =>
  selectContactForm(state).isRequesting || DEFAULT_STATE.isRequesting;

export const selectContactFormNameValid = (state) => Boolean(selectContactFormName(state));
export const selectContactFormMessageValid = (state) => Boolean(selectContactFormMessage(state));
export const selectContactFormEmailValid = (state) => {
  const email = selectContactFormEmail(state);
  const emailIsCorrectFormat = isValidEmailAddress(email);

  return emailIsCorrectFormat;
};
export const selectContactFormEmailError = (state) => {
  const emailIsDirty = selectContactFormEmailIsDirty(state);
  const email = selectContactFormEmail(state);
  const emailIsCorrectFormat = isValidEmailAddress(email);

  return emailIsDirty && !emailIsCorrectFormat;
};
export const selectContactFormEmailErrorMessage = (state) => {
  const email = selectContactFormEmail(state);
  if (email) return `${email} is not a valid email address.`;
  return 'Please enter a valid email address.';
};

export const selectContactFormValid = (state) => {
  const emailValid = selectContactFormEmailValid(state);
  const messageValid = selectContactFormMessageValid(state);
  const nameValid = selectContactFormNameValid(state);

  return Boolean(emailValid && messageValid && nameValid);
};

// Thunks
export const closeContactForm = () => (dispatch) => {
  dispatch(resetContactForm());
};

export const openContactForm = () => (dispatch) => {
  dispatch(updateContactFormActive(true));
};

export const requestContactFormSubmit = () => async (dispatch, getState) => {
  const state = getState();

  const email = selectContactFormEmail(state);
  const name = selectContactFormName(state);
  const message = selectContactFormMessage(state);
  const address = selectContactFormAddress(state);

  if (!email) return;

  dispatch(contactFormRequestStart());

  // The following try/catch has been adjusted because there's a CORS error
  // causing even successful responses to throw an error. So until the CORS
  // error is corrected, this will have to remain.
  try {
    await postContactForm({ address, email, message, name });
  } catch (error) {
    // dispatch(contactFormRequestFailure());
    // dispatch(
    //   triggerAlert({
    //     children: 'There was an error submitting your contact form submission.  Please try again.',
    //     color: 'danger',
    //     title: 'Contact Form Failure',
    //   })
    // );

    dispatch(contactFormRequestSuccess());
    dispatch(updateContactFormEmailIsDirty(false));
    dispatch(
      triggerAlert({
        children: 'Your message has been submitted. We will get back to you soon.',
        color: 'success',
        title: 'Success!',
      })
    );
    dispatch(resetContactForm());
  }
};
