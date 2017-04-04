/* global google */
import {
  default as React,
  Component,
} from "react";

import {
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";




import fancyMapStyles from "./style.json";




const StyledMapExampleGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={15}
    defaultCenter={props.center}
    defaultOptions={{ styles: fancyMapStyles }}
  >

  {props.markers.map(marker => (
      <Marker
        {...marker}
        onRightClick={() => props.onMarkerRightClick(marker)}
      />
    ))}

  </GoogleMap>
));

/*
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
export default class StyledMapExample extends Component {

  state = {
    markers: [{
      position: {
        lat: 40.7550356,
        lng: -73.925372,
      },
      key: `Ridgebox`,
      defaultAnimation: 2,
    }],
  };

  handleClickFromChildrenOfInfoBox = this.handleClickFromChildrenOfInfoBox.bind(this);

  handleClickFromChildrenOfInfoBox(e) {
    console.log(`handleClickFromChildrenOfInfoBox!!`);
    console.log(e);
  }

  render() {
    return (
      <StyledMapExampleGoogleMap
        containerElement={
          <div style={{ height: `100%` }} />
        }
        mapElement={
          <div style={{ height: `100%` }} />
        }
        markers={this.state.markers}
        center={new google.maps.LatLng(40.7542789, -73.929429)}
      />
    );
  }
}