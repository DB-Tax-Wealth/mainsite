import { connect } from 'react-redux';
import {
  selectContactFormEmailValid,
  selectContactFormEmail,
  updateContactFormEmail,
  requestContactFormSubmit
} from 'store/contact-form/contact-form';
import { FooterSiteMapLearnMoreInput } from './footer-site-map-learn-more-input';

const mapStateToProps = state => ({
  valid: selectContactFormEmailValid(state),
  value: selectContactFormEmail(state)
});

const mapDispatchToProps = dispatch => ({
  buttonOnClick: () => dispatch(requestContactFormSubmit()),
  onChange: value => dispatch(updateContactFormEmail(value))
});

export const FooterSiteMapLearnMoreInputConnnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(FooterSiteMapLearnMoreInput);
