import React, { Component, useEffect, useState, useRef } from 'react';
import { GoogleMap, Marker, withGoogleMap } from 'react-google-maps';
import data from './dummyPlaces';
import axios from 'axios';
import './Map.scss';
import ReactStars from 'react-stars';

const WheelGoodMap = withGoogleMap((props) => {
    const name = useRef(null);
    const block = useRef(null);
	const [ places, setPlaces ] = useState([]);
	useEffect(() => {
		axios
			.get('https://wheel-good-master.herokuapp.com/client/places')
			.then((res) => setPlaces(res.data))
			.catch((err) => console.log(err));
	}, []);
    console.log(places);
    

	function clickHandler(e, obj) {
		const item = name.current;
		item.innerHTML = `
                <h2>${obj.name}</h2>
                <h3>${obj.ai_accessibility ? 'Accessible' : ' Potentially Not Accessible'}</h3>
                <p>${obj.user_reviews.length ? `Review: ${obj.user_reviews[0].review}` : ''}</p>
                <h4>Rating:${'⭐⭐⭐⭐⭐'.slice(0, obj.user_rating)} </h4>
                `;

		item.style.left = `${e.ya.pageX + 10}px`;
		item.style.top = `${e.ya.pageY - 10}px`;
		item.classList.toggle('modalShow');
		console.log(e.ya.pageX, 'pageX');
	}
	return (
		<div class='mapContainer'>
			<div class='googleMap'>
				<GoogleMap defaultZoom={15} defaultCenter={{ lat: 47.6062, lng: -122.3321 }}>
					{props.isMarkerShown &&
						places.map((item, idx) => {
							return (
                                <div>
									<div className='marker'>
										<Marker
											onClick={(e) => clickHandler(e, item)}
											position={{ lat: item.location.lat, lng: item.location.lng }}
                                        />
                                        <div ref={name} className={`modal ${item.place_id}`} />
                                    </div>
                                    <div className="block">
                                    <h1>{idx+1}.{item.name}</h1>
                                    <p>Category: {item.types[0]}</p>
                                    <p>Reviews: {item.user_reviews.map((x) => <p>{x.review}</p>)}</p>
                                    <h4>Rating:{item.ai_score ? '⭐⭐⭐⭐⭐'.slice(0, item.ai_score): "⭐⭐⭐"} </h4>
                                    </div>
                                    
								</div>
							);
						})}
				</GoogleMap>
			</div>
		</div>
	);
});

function Map(props) {
	return (
		<div class="mapFlex">
            <WheelGoodMap
                style={{width: "45%",display:"flex"}}
				isMarkerShown
				googleMapURL='https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places'
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{height: `600px`, width: '50%', border:"2px solid black"}} />}
				mapElement={<div style={{ height: `100%`, display: "flex" }} />}
			/>
		</div>
	)
}

export default Map;
