import React from 'react'
import { Marker } from 'react-map-gl';
import { observer } from 'mobx-react' 
import './BusMarker.css'

const BusMarkers = observer(({busStore}) => {
  return(
    busStore.data.map((bus, idx) => {
      return (
        <Marker className='marker' latitude={bus.Latitude} longitude={bus.Longitude} key={idx}>
          <div className='bus-image'>
            <div className='info-popup'>
              <ul>
                <li>{bus.RouteNo}</li>
                <li>{bus.Destination}</li>
                <li>{bus.Direction}</li>
              </ul>
            </div>
          </div>
        </Marker>
      )
    })
  )
})

export default BusMarkers
