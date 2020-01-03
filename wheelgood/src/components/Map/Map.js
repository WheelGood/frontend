import React, { Component, useEffect, useState, useRef } from 'react';
import { GoogleMap, Marker, withGoogleMap } from 'react-google-maps';
import data from './dummyPlaces';
import axios from 'axios';
import './Map.scss';
import blueMarker from './WheelGood-blueMarker.png';
import redMarker from './WheelGood-redMarker.png';

const blueIcon = {
  url: 'https://i.imgur.com/kWesvjq.png',
  scaledSize: { width: 32, height: 42 }
};
const redIcon = {
  url: 'https://i.imgur.com/JvQS2gf.png',
  scaledSize: { width: 32, height: 42 }
};

const WheelGoodMap = withGoogleMap(props => {
  const name = useRef(null);
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    axios
      .get('https://wheel-good-master.herokuapp.com/client/places')
      .then(res => setPlaces(res.data))
      .catch(err => console.log(err));
  }, []);
  console.log(places);

  function clickHandler(e, obj) {
    const item = name.current;
    console.log(name);
    item.innerHTML = `
                <h2>${obj.name}</h2>
                <h3>${
                  obj.ai_accessibility ? 'Accessible' : 'Not Accessible'
                }</h3>
                <p>${
                  obj.user_reviews.length
                    ? `User Reviews: ${obj.user_reviews[0].review}`
                    : ''
                }</p>
                <h4>User Rating: ${
                  obj.user_rating
                    ? '⭐⭐⭐⭐⭐'.slice(0, obj.user_rating)
                    : 'None'
                } </h4>
                `;
    item.style.left = `-300px`;
    item.style.top = `100px`;
    item.style.zIndex = '1000';
    item.classList.toggle('modalShow');
    console.log(e.ya.pageX, 'pageX');
  }
  return (
    <div class='mapContainer'>
      <div class='googleMap'>
        <GoogleMap
          defaultZoom={15}
          defaultCenter={{ lat: 47.6062, lng: -122.3321 }}
        >
          {props.isMarkerShown &&
            places.map((item, idx) => {
              return (
                <div>
                  {idx === 0 && (
                    <div ref={name} className={`modal $}{item.place_id}`} />
                  )}
                  <div className='marker'>
                    <Marker
                      onClick={e => clickHandler(e, item)}
                      title={'test123'}
                      position={{
                        lat: item.location.lat,
                        lng: item.location.lng
                      }}
                      icon={
                        item.user_score
                          ? item.user_score > 2
                            ? blueIcon
                            : redIcon
                          : item.ai_accessibility
                          ? blueIcon
                          : redIcon
                      }
                    />
                  </div>

                  <div id={item.place_id} className='block'>
                    <h1>
                      {idx + 1}.{item.name}
                    </h1>
                    <p>Category: {item.types[0]}</p>
                    <p>
                      Reviews:{' '}
                      {item.user_reviews.map(x => (
                        <p>{x.review}</p>
                      ))}
                    </p>
                    <h4>
                      Rating:
                      {item.ai_score
                        ? '⭐⭐⭐⭐⭐'.slice(0, item.ai_score)
                        : '⭐⭐⭐'}{' '}
                    </h4>
                  </div>
                </div>
              );
            })}
        </GoogleMap>
      </div>
    </div>
  );
});

function rapper() {
  return (
    <div>
      <div style={{ height: `600px`, width: '70%', zIndex: 0 }} />
    </div>
  );
}

function Map(props) {
  return (
    <div class='mapFlex'>
      <WheelGoodMap
        style={{ width: '45%', display: 'flex', border: '2px solid black' }}
        isMarkerShown
        googleMapURL='https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places'
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={
          <div style={{ height: `600px`, width: '70%', zIndex: 0 }} />
        }
        mapElement={<div style={{ height: `93vh`, display: 'flex' }} />}
      />
    </div>
  );
}

export default Map;
