import React from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import "@reach/combobox/styles.css";
import Search from "./Search";

const libraries = ["places"];
const mapContainerStyle = {
  width: "44vw",
  height: "44vw",
};

// const center = {
//   lat: -12.04318,
//   lng: -77.02824,
// };

export default function MapsPoint({lat = "-12.04318", lng= "-77.02824"}) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    libraries,
  });

  const center = {
    lat: +lat,
    lng: +lng
  }

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = React.useCallback(({ lat, lng }) => {
    console.log(mapRef);
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(15);
  }, []);

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <div>
      {/*  <Search panTo={panTo} /> */}

      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={12}
        center={center}
        onClick={(event) => {
          // console.log(event);
        }}
        onLoad={onMapLoad}
      ></GoogleMap>
    </div>
  );
}
