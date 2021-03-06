import { connect } from 'react-redux';
import {
  selectContactFormActive,
  selectContactFormEmail,
  selectContactFormName,
  selectContactFormMessage,
  closeContactForm,
  updateContactFormEmail,
  updateContactFormMessage,
  updateContactFormName,
  selectContactFormValid,
  selectContactFormNameValid,
  selectContactFormEmailValid,
  selectContactFormMessageValid,
  selectContactFormEmailError,
  selectContactFormEmailErrorMessage,
  requestContactFormSubmit,
  selectContactFormIsRequesting,
  updateContactFormEmailIsDirty,
  selectContactFormAddress,
  updateContactFormAddress,
} from 'store/contact-form/contact-form';
import { ContactForm } from './contact-form';

const mapStateToProps = (state) => ({
  active: selectContactFormActive(state),
  address: selectContactFormAddress(state),
  email: selectContactFormEmail(state),
  emailError: selectContactFormEmailError(state),
  emailErrorMessage: selectContactFormEmailErrorMessage(state),
  emailValid: selectContactFormEmailValid(state),
  isRequesting: selectContactFormIsRequesting(state),
  message: selectContactFormMessage(state),
  messageValid: selectContactFormMessageValid(state),
  name: selectContactFormName(state),
  nameValid: selectContactFormNameValid(state),
  submitDisabled: !selectContactFormValid(state),
});

const mapDispatchToProps = (dispatch) => ({
  onAddressChange: (value) => dispatch(updateContactFormAddress(value)),
  onEmailBlur: () => dispatch(updateContactFormEmailIsDirty(true)),
  onEmailChange: (value) => dispatch(updateContactFormEmail(value)),
  onMessageChange: (value) => dispatch(updateContactFormMessage(value)),
  onNameChange: (value) => dispatch(updateContactFormName(value)),
  onOverlayClick: () => dispatch(closeContactForm()),
  onSubmitClick: () => dispatch(requestContactFormSubmit()),
});

export const ContactFormConnected = connect(mapStateToProps, mapDispatchToProps)(ContactForm);
