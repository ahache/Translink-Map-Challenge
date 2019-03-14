import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BusMap from './Maps/BusMap'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<BusMap />, document.getElementById('root'));

serviceWorker.register();
