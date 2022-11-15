import React from "react";
import { useMap } from "react-leaflet";

export const ChangeView = ({ center }) => {
  const map = useMap();
  map.setView(center);
  return null;
};
