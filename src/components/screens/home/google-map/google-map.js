import React from 'react';

import { GOOGLE_MAPS_API_KEY } from 'constants/google-maps-api-key';
import GoogleMapReact from 'google-map-react';
import { LOCATION } from 'constants/location';
import { GoogleMapMarker } from './google-map-marker/google-map-marker';
import styles from './google-map.style.scss';

const POSITION = { lat: LOCATION.LATITUDE, lng: LOCATION.LONGITUDE };
const ZOOM = 12;

export const GoogleMap = () => {
  return (
    <div className={styles.root}>
      <div className={styles.map}>
        <GoogleMapReact bootstrapURLKeys={{ key: GOOGLE_MAPS_API_KEY }} defaultCenter={POSITION} defaultZoom={ZOOM}>
          <GoogleMapMarker lat={LOCATION.LATITUDE} lng={LOCATION.LONGITUDE} text="My Marker" />
        </GoogleMapReact>
      </div>
      <div className={styles.spacer} />
    </div>
  );
};
