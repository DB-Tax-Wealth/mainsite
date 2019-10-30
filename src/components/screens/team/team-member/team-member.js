import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'components/layout/icon/icon';
import { convertPhoneNumberToTelLink } from 'util/convert-phone-number-to-tel-link/convert-phone-number-to-tel-link';
import { Button } from 'components/layout/button/button';
import { Link } from 'react-router-dom';
import { ROUTES } from 'constants/routes';
import styles from './team-member.style.scss';

export const TeamMember = props => {
  const { description, phone, fax, name, email, img, title, id } = props;

  const phoneLink = convertPhoneNumberToTelLink(phone);
  const phoneExists = Boolean(phone);
  const emailExists = Boolean(email);
  const faxExists = Boolean(fax);
  const imageExists = Boolean(img);

  return (
    <>
      <div className={styles.root}>
        {imageExists && (
          <div className={styles.avatar}>
            <img src={img} alt={name} />
          </div>
        )}
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
          <Link to={`${ROUTES.TEAM.path}/${id}`} style={{ textDecoration: 'none' }}>
            <Button className="display--block margin--top" style={{ width: '100%' }}>
              Read More
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

TeamMember.propTypes = {
  description: PropTypes.string,
  email: PropTypes.string,
  fax: PropTypes.string,
  id: PropTypes.number,
  img: PropTypes.node,
  name: PropTypes.string,
  phone: PropTypes.string,
  title: PropTypes.string
};

TeamMember.defaultProps = {
  description: '',
  email: '',
  fax: '',
  id: null,
  img: null,
  name: '',
  phone: '',
  title: ''
};
