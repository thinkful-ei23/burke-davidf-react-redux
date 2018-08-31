import React from 'react';
import ReactDOM from 'react-dom';

import './reset.css';
import './index.css';
import store from './store';
import {addGuess} from './actions';

import Game from './components/game';

store.dispatch(addGuess(2));
console.log(store.getState());

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
