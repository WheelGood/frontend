import React, { Component } from 'react';
import { GoogleMap, Marker, withGoogleMap } from 'react-google-maps';
import data from './dummyPlaces'

const WheelGoodMap = withGoogleMap((props) => {
    const places = Object.values(data);
    console.log(places[2]);
	return (
		<GoogleMap defaultZoom={15} defaultCenter={{ lat: 47.6062, lng: -122.3321 }}>
            {props.isMarkerShown && places[2].map((item) => {
                return <Marker position={{lat:item.geometry.location.lat,lng:item.geometry.location.lng}} />
            })}
            
		</GoogleMap>
	);
});

function Map(props) {
	return (
		<div>
			<h1>Map Goes Here</h1>
			<WheelGoodMap
				isMarkerShown
				googleMapURL='https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places'
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `600px` }} />}
				mapElement={<div style={{ height: `100%` }} />}
			/>
		</div>
	);
}

export default Map;
