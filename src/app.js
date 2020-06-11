import React from 'react';
import { render } from 'react-dom';

import { WordsProvider } from './context';

import Header from './components/Header';
import LetterForm from './components/LetterForm';
import WordView from './components/WordView';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

render(
  <WordsProvider>
    <Header />
    <LetterForm />
    <WordView />
  </WordsProvider>,
  document.getElementById('app')
);
