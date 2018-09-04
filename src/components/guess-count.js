import React from 'react';

import './guess-count.css';

import {connect} from 'react-redux';

function GuessCount(props) {
    const isPlural = props.guesses.length !== 1;
    const guessNoun = isPlural ? 'guesses' : 'guess';

    return (
        <h2 id="guessCount">
            You've made <span id="count">{props.guesses.length}</span> {guessNoun}!
        </h2>
    );
}

function mapStateToProps(state) {
    return {
      guesses: state.guesses,
    };
  }
  
  export default connect(mapStateToProps)(GuessCount);
