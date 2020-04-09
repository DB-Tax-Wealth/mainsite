import { connect } from 'react-redux';
import { openContactForm } from 'store/contact-form/contact-form';
import { Contact } from './contact';

const mapStateToProps = undefined;

const mapDispatchToProps = (dispatch) => ({
  onHeroButtonClick: () => dispatch(openContactForm()),
});

export const ContactConnected = connect(mapStateToProps, mapDispatchToProps)(Contact);
