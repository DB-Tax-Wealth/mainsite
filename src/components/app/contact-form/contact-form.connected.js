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
  selectContactFormEmailErrorMessage
} from 'store/contact-form/contact-form';
import { ContactForm } from './contact-form';

const mapStateToProps = state => ({
  active: selectContactFormActive(state),
  email: selectContactFormEmail(state),
  emailError: selectContactFormEmailError(state),
  emailErrorMessage: selectContactFormEmailErrorMessage(state),
  emailValid: selectContactFormEmailValid(state),
  message: selectContactFormMessage(state),
  messageValid: selectContactFormMessageValid(state),
  name: selectContactFormName(state),
  nameValid: selectContactFormNameValid(state),
  submitDisabled: !selectContactFormValid(state)
});

const mapDispatchToProps = dispatch => ({
  onEmailChange: value => dispatch(updateContactFormEmail(value)),
  onMessageChange: value => dispatch(updateContactFormMessage(value)),
  onNameChange: value => dispatch(updateContactFormName(value)),
  onOverlayClick: () => dispatch(closeContactForm())
});

export const ContactFormConnected = connect(mapStateToProps, mapDispatchToProps)(ContactForm);
