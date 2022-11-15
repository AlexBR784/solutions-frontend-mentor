import React from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import L, { LatLngTuple } from "leaflet";
import marker from "../assets/images/icon-location.svg";
import { ChangeView } from "./ChangeView";

const Icon = L.icon({
  iconUrl: marker,

  iconSize: [30, 40], // size of the icon
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62], // the same for the shadow
  popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
});

export const Map = ({ location }) => {
  const { lat, lng } = location;
  const zone: LatLngTuple = [lat, lng];

  return (
    <div className="map">
      <MapContainer center={zone} zoom={13} scrollWheelZoom={false}>
        <ChangeView center={zone} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker icon={Icon} position={zone}></Marker>
      </MapContainer>
    </div>
  );
};
