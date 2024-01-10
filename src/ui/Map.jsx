import mapboxgl from "mapbox-gl";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

mapboxgl.accessToken =
  "pk.eyJ1IjoidmlsaWFtbm92aWNreSIsImEiOiJjbGlpbTR6Z2QxYW12M2RtcjdzMGJwb2E2In0.tKD2A2kNH4Q8IwbpEQoXEw";

const MapContainer = styled.div`
  height: calc(100% - 2rem);
  width: 100%;
  position: absolute;
  right: 0;
  top: 1rem;
  border-radius: 1rem;
  cursor: disabled;
  opacity: .5;

  &:hover {
    opacity: 1;
  }
`;

function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const lng = 21.655629;
  const lat = 49.097414;
  const zoom = 16;
  

  useEffect(() => {
    if (map.current) return; // initialize map only once

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/viliamnovicky/clr87y44f001s01peg4ub4q7g",
      center: [lng, lat],
      zoom: zoom,
      scrollZoom: false,
      dragPan: false,
    });
});

  console.log(map)
  return <MapContainer ref={mapContainer} className="map-container" />;
}

export default Map;
