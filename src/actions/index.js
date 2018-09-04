'use strict';

// when you make a guess you should generate feedback for the state as well
export const ADD_GUESS = 'ADD_GUESS';
export const addGuess = guess => ({
    type: ADD_GUESS,
    guess
});

export const RESTART_GAME = 'RESTART_GAME';
export const restartGame = () => ({
  type: RESTART_GAME
});

export const GENERATE_AURAL = 'GENERATE_AURAL';
export const generateAural = () => ({
  type: GENERATE_AURAL
});


