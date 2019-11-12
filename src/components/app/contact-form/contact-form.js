import React from 'react';
import { ModalOverlay } from 'components/layout/modal-overlay/modal-overlay';
import { Icon } from 'components/layout/icon/icon';
import { Grid } from 'components/layout/grid/grid';
import { Row } from 'components/layout/grid/row/row';
import { Column } from 'components/layout/grid/column/column';
import PropTypes from 'prop-types';
import { Button } from 'components/layout/button/button';
import { Input } from 'components/layout/input/input';
import { Textarea } from 'components/layout/textarea/textarea';

export const ContactForm = props => {
  const {
    active,
    email,
    emailError,
    emailErrorMessage,
    emailValid,
    message,
    name,
    nameValid,
    onEmailChange,
    onMessageChange,
    onNameChange,
    onOverlayClick,
    submitDisabled
  } = props;

  return (
    <ModalOverlay active={active} onOverlayClick={onOverlayClick}>
      <h4>
        <Icon name="envelope" /> Contact Us
      </h4>
      <Grid className="padding--horizontal--none">
        <Row className="margin--bottom">
          <Column>
            <Input value={name} placeholder="enter your name..." shadow onChange={onNameChange} valid={nameValid} />
          </Column>
        </Row>
        <Row className="margin--bottom">
          <Column>
            <Input
              error={emailError}
              errorMessage={emailErrorMessage}
              onChange={onEmailChange}
              placeholder="enter your email..."
              shadow
              valid={emailValid}
              value={email}
            />
          </Column>
        </Row>
        <Row className="margin--bottom">
          <Column>
            <Textarea value={message} placeholder="how could we help you?" shadow onChange={onMessageChange} />
          </Column>
        </Row>
        <Row>
          <Column>
            <Button style={{ width: '100%' }} color="secondary" disabled={submitDisabled}>
              Send Message
            </Button>
          </Column>
        </Row>
      </Grid>
    </ModalOverlay>
  );
};

ContactForm.propTypes = {
  active: PropTypes.string,
  email: PropTypes.string,
  emailError: PropTypes.bool,
  emailErrorMessage: PropTypes.string,
  emailValid: PropTypes.bool,
  message: PropTypes.string,
  name: PropTypes.string,
  nameValid: PropTypes.bool,
  onEmailChange: PropTypes.func,
  onMessageChange: PropTypes.func,
  onNameChange: PropTypes.func,
  onOverlayClick: PropTypes.func,
  submitDisabled: PropTypes.bool
};

ContactForm.defaultProps = {
  active: '',
  email: '',
  emailError: false,
  emailErrorMessage: false,
  emailValid: false,
  message: '',
  name: '',
  nameValid: false,
  onEmailChange: () => {},
  onMessageChange: () => {},
  onNameChange: () => {},
  onOverlayClick: () => {},
  submitDisabled: false
};
