"use client";

import { useState } from "react";
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow } from "@vis.gl/react-google-maps";

export default function MapPage() {
  const position = { lat: 53.54, lng: 10 };
  return (
    <APIProvider apiKey="AIzaSyCl5hgHkcV_MyxVjv4M3kuLJ9IwRo1VY24">
      <div style={{ height: "100vh" }}>
        <Map zoom={9} center={position} />
      </div>
    </APIProvider>
  );
}
