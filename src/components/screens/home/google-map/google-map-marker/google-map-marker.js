import { Icon } from 'components/layout/icon/icon';
import React from 'react';

// Google Maps markers are in an iFrame so we need to inline
// the styles instead of including them in the stylesheets
const STYLES = {
  alignItems: 'center',
  borderRadius: '50%',
  color: '#ff5e58',
  display: 'flex',
  fontSize: '2.2rem',
  height: '2.5rem',
  justifyContent: 'center',
  textShadow: '0 1px 0.5rem #fff',
  width: '2.5rem',
};

export const GoogleMapMarker = (props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <div {...props} style={STYLES}>
    <Icon name="map-marker-alt" />
  </div>
);
