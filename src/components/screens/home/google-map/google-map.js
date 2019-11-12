import React from 'react';

import PropTypes from 'prop-types';

import { GOOGLE_MAPS_API_KEY } from 'constants/google-maps-api-key';
import GoogleMapReact from 'google-map-react';
import { Input } from 'components/layout/input/input';
import { LOCATION } from 'constants/location';
import { GoogleMapMarker } from './google-map-marker/google-map-marker';
import styles from './google-map.style.scss';

const POSITION = { lat: LOCATION.LATITUDE, lng: LOCATION.LONGITUDE };
const ZOOM = 12;

export const GoogleMap = ({ showAddress }) => {
  return (
    <div className={styles.root}>
      <div className={styles.map}>
        <GoogleMapReact bootstrapURLKeys={{ key: GOOGLE_MAPS_API_KEY }} defaultCenter={POSITION} defaultZoom={ZOOM}>
          <GoogleMapMarker lat={LOCATION.LATITUDE} lng={LOCATION.LONGITUDE} text="My Marker" />
        </GoogleMapReact>
      </div>
      <div className={styles.spacer} />
      {showAddress ? (
        <>
          <div className={styles.inputContainer}>
            <Input
              buttonOnClick={() => {}}
              className={styles.input}
              iconName="map-marker-alt"
              placeholder="enter your address..."
            />
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

GoogleMap.propTypes = {
  showAddress: PropTypes.bool
};

GoogleMap.defaultProps = {
  showAddress: true
};
