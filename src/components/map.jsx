import React, { useContext } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { MapContext } from "../context/mapContext";
import MarkerPosition from "../utils/markerPosition";
import "leaflet/dist/leaflet.css"

const Map = () => {
  const { address } = useContext(MapContext);

  return (
    <>
      {address && (
        <MapContainer
          center={[address.location.lat, address.location.lng]}
          zoom={13}
          scrollWheelZoom={true}
          className="h-screen z-10 w-screen outline-none overflow-hidden"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MarkerPosition address={address} />
        </MapContainer>
      )}
    </>
  );
};

export default Map;
