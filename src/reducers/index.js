'use strict';

import * as actions from '../actions';

// hard coded intial state

const initialState = {
  guesses: [10, 3, 4],
  feedback: 'Make your guess!',
  auralStatus: '',
  correctAnswer: Math.floor(Math.random() * 100) + 1
};


export const gameReducer = (state=initialState, action) => {
  if (action.type === actions.ADD_GUESS) {
      return {...state, guesses: state.guesses.concat(action.guess)}
  }
  return state;
};