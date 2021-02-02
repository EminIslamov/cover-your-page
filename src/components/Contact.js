import React from 'react'
import {GoogleMap, withScriptjs, withGoogleMap, Marker} from 'react-google-maps'


function Map() {
  return (
    <div>
      <GoogleMap
        defaultZoom={20}
        defaultCenter={{ lat: 43.326927934904575, lng: 45.6921929688171}}>
      </GoogleMap>
      </div>
  )
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

function Contact (props) {
  return (
    <div style={ { width: '100vw', height: "100vh"}}>
     <WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAu-Nb12zNbI6C6Ck23WH3SUNM0EfoJe5E`}
     loadingElement={<div style={{ height: "100%", margin: '20px' }} />}
     containerElement={<div style={{ height: "100%" , margin: '20px'}} />}
     mapElement={<div style={{ height: "100%" , margin: '20px'}} />}
     />
    </div>
  )
}
export default Contact