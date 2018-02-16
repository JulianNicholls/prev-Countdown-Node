import React from 'react';
import ReactDOM from 'react-dom';

import CountdownApp from './components/CountdownApp';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

ReactDOM.render(<CountdownApp />, document.querySelector('#app'));
