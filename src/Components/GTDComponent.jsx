import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";

export default function GTDComponent({ center, zoom }) {
  return (
    <div className="map">
      <GoogleMapReact
        Key={{ key: "AIzaSyAYQlSvsBVjtPyUTxolbLqX67cJTK8EA00" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <LocationMarker lat={center.lat} lng={center.lng} />
      </GoogleMapReact>
    </div>
  );
}
GTDComponent.defaultProps = {
  center: {
    lat: 9.082,
    lng: 8.6753,
  },
  zoom: 6,
};

//https://www.start.umd.edu/gtd/search/Results.aspx?page=1&search=nigeria%20terrorism&charttype=line&chart=overtime&expanded=no&ob=GTDID&od=asc#results-table
