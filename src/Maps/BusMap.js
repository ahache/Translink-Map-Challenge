import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';
import BusMarkers from './BusMarkers'
import axios from 'axios'
import { observable } from 'mobx'
import keys from '../config/keys'

const TRANSLINK_URL = `https://cors-anywhere.herokuapp.com/http://api.translink.ca/rttiapi/v1/buses?apikey=${keys.translink}`

class BusMap extends Component {
  
  busStore = observable({data: []})

  state = {
    viewport: {
      width: '100%',
      height: '100%',
      latitude: 49.24,
      longitude: -123.03,
      zoom: 11
    }
  }

  componentDidMount() {
    // Dump incoming translink data into mobx store every second
    setInterval(() => {
      axios.get(TRANSLINK_URL)
        .then(response => {
          const { data } = response
          this.busStore.data = data
        })
    }, 1000)
  }

  render() {
    return (
      <ReactMapGL 
        {...this.state.viewport}
        mapboxApiAccessToken={keys.mapbox}
        onViewportChange={(viewport) => this.setState({viewport})}
      >
        <BusMarkers busStore={this.busStore} />
      </ReactMapGL>
    );
  }
}

export default BusMap
