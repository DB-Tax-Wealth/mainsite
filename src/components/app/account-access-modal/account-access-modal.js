import React from 'react';
import { ModalOverlay } from 'components/layout/modal-overlay/modal-overlay';
import { Grid } from 'components/layout/grid/grid';
import { Row } from 'components/layout/grid/row/row';
import { Column } from 'components/layout/grid/column/column';
import { Button } from 'components/layout/button/button';
import { AVANTAX_LINK } from 'constants/avantax-link';
import { SMARTVAULT_LINK } from 'constants/smartvault-link';
import PropTypes from 'prop-types';
import { Icon } from 'components/layout/icon/icon';

const openLinkInNewTab = href => Object.assign(document.createElement('a'), { target: '_blank', href }).click();

const onAvantaxClick = () => openLinkInNewTab(AVANTAX_LINK);
const onSmartvaultClick = () => openLinkInNewTab(SMARTVAULT_LINK);

export const AccountAccessModal = props => {
  const { active, onOverlayClick } = props;

  return (
    <ModalOverlay active={active} onOverlayClick={onOverlayClick}>
      <h4>
        <Icon name="sign-in-alt" /> Account Access
      </h4>
      <Grid className="padding--horizontal--none">
        <Row>
          <Column className="margin--xs--bottom--half margin--sm--bottom">
            <Button onClick={onAvantaxClick} style={{ width: '100%' }} color="secondary">
              Avantax Access
            </Button>
          </Column>
          <Column>
            <Button onClick={onSmartvaultClick} style={{ width: '100%' }} color="secondary">
              SmartVault
            </Button>
          </Column>
        </Row>
      </Grid>
    </ModalOverlay>
  );
};

AccountAccessModal.propTypes = {
  active: PropTypes.bool,
  onOverlayClick: PropTypes.func
};

AccountAccessModal.defaultProps = {
  active: false,
  onOverlayClick: null
};
