import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'components/layout/icon/icon';
import { convertPhoneNumberToTelLink } from 'util/convert-phone-number-to-tel-link/convert-phone-number-to-tel-link';
import { Button } from 'components/layout/button/button';
import styles from './team-member.style.scss';
import { TeamMemberModalOverlay } from './team-member-modal-overlay/team-member-modal-overlay';

export class TeamMember extends Component {
  static propTypes = {
    description: PropTypes.string,
    email: PropTypes.string,
    fax: PropTypes.string,
    img: PropTypes.node,
    name: PropTypes.string,
    phone: PropTypes.string,
    title: PropTypes.string
  };

  static defaultProps = {
    description: '',
    email: '',
    fax: '',
    img: null,
    name: '',
    phone: '',
    title: ''
  };

  constructor(props) {
    super(props);
    this.state = { modalActive: false };

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  closeModal() {
    this.setState({ modalActive: false });
  }

  openModal() {
    this.setState({ modalActive: true });
  }

  render() {
    const { description, phone, fax, name, email, img, title } = this.props;
    const { modalActive } = this.state;

    const phoneLink = convertPhoneNumberToTelLink(phone);
    const phoneExists = Boolean(phone);
    const emailExists = Boolean(email);
    const faxExists = Boolean(fax);

    return (
      <>
        <div className={styles.root}>
          <div className={styles.avatar}>
            <img src={img} alt={name} />
          </div>
          <div className={styles.content}>
            <div>
              <strong>{name}</strong>
            </div>
            <div className="border--bottom margin--bottom padding--bottom--half">{title}</div>
            <div className="margin--bottom">
              {phoneExists && (
                <div>
                  <a href={phoneLink} style={{ textDecoration: 'none' }}>
                    <Icon name="phone-alt" /> {phone}
                  </a>
                </div>
              )}
              {emailExists && (
                <div>
                  <a href={`mailto:${email}`} style={{ textDecoration: 'none' }}>
                    <Icon name="envelope" /> {email}
                  </a>
                </div>
              )}
              {faxExists && (
                <div>
                  <Icon name="fax" /> {fax}
                </div>
              )}
            </div>
            <div className={styles.description}>{description}</div>
            <Button className="display--block margin--top" style={{ width: '100%' }}>
              Read More
            </Button>
          </div>
        </div>
        <TeamMemberModalOverlay
          active={modalActive}
          description={description}
          email={email}
          fax={fax}
          img={img}
          name={name}
          onOverlayClick={this.closeModal}
          phone={phone}
          title={title}
        />
      </>
    );
  }
}
