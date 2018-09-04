'use strict';

import * as actions from '../actions';

// hard coded intial state

const initialState = {
  guesses: [],
  feedback: 'Make your guess!',
  auralStatus: '',
  correctAnswer: Math.floor(Math.random() * 100) + 1
};

const getFeedback = function(state, guess) {
  const guessInt = parseInt(guess, 10);
    if (isNaN(guessInt)) {
      return 'Please enter a valid number';
    }
    const difference = Math.abs(guessInt - state.correctAnswer);
    let feedback;
    if (difference >= 50) {
      feedback = 'You\'re Ice Cold...';
    } else if (difference >= 30) {
      feedback = 'You\'re Cold...';
    } else if (difference >= 10) {
      feedback = 'You\'re Warm.';
    } else if (difference >= 1) {
      feedback = 'You\'re Hot!';
    } else {
      feedback = 'You got it!';
    }
    return feedback;
}

const generateAural = function(state) {
  const { guesses, feedback } = state;

    // If there's not exactly 1 guess, we want to
    // pluralize the nouns in this aural update.
    const pluralize = guesses.length !== 1;

    let  auralStatus = `Here's the status of the game right now: ${feedback} You've made ${guesses.length} ${pluralize ? 'guesses' : 'guess'}.`;

    if (guesses.length > 0) {
      auralStatus += ` ${pluralize ? 'In order of most- to least-recent, they are' : 'It was'}: ${guesses.reverse().join(', ')}`;
    }
    return auralStatus;
}



export const gameReducer = (state=initialState, action) => {
  if (action.type === actions.ADD_GUESS) {
    // ask about whether this is a pure function (it seems to be working, but I'm not sure if it's actually pure)
      const feedback = getFeedback(state, action.guess);
      return {...state, guesses: state.guesses.concat(action.guess), feedback};
  } else if (action.type === actions.RESTART_GAME) {
    return  (
    {
      guesses: [],
      feedback: 'Make your guess!',
      auralStatus: '',
      correctAnswer: Math.floor(Math.random() * 100) + 1
    }
  );
  } else if (action.type === actions.GENERATE_AURAL) {
    const aural = generateAural(state);
    return {...state, auralStatus: aural};
  }
  return state;
};