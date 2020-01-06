import React from 'react';
import { render } from 'react-dom';

import { WordsProvider } from './context';

import CountdownApp from './components/CountdownApp';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

render(
  <WordsProvider>
    <CountdownApp />
  </WordsProvider>,
  document.getElementById('app')
);
