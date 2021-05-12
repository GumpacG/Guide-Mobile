import React, { useState } from "react";

import MapView, { Marker } from "react-native-maps";

const LocationScreen = () => {
  const [region, setRegion] = useState({
    latitude: 49.6782524446021,
    longitude: -123.15380610487749,
    latitudeDelta: 0.009,
    longitudeDelta: 0.009,
  });

  return (
    <MapView
      style={{ flex: 1 }}
      region={region}
      onRegionChangeComplete={(region) => setRegion(region)}
    >
      <Marker
        coordinate={{
          latitude: 49.6782524446021,
          longitude: -123.15380610487749,
        }}
      />
    </MapView>
  );
};

export default LocationScreen;
