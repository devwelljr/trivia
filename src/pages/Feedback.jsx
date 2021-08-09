import React, { Component } from 'react';
import { string, func, number, object, objectOf, oneOfType } from 'prop-types';
import GameHeader from '../components/GameHeader';
import ButtonToLogin from '../components/ButtonToLogin';

class Feedback extends Component {
  render() {
    const { history } = this.props;
    return (
      <div>
        <GameHeader />
        <p data-testid="feedback-text">chegou</p>
        <ButtonToLogin history={ history } dataTestId="btn-play-again" />
        <button
          data-testid="btn-ranking"
          type="button"
          onClick={ () => { history.push('/ranking'); } }
        >
          Ver Ranking
        </button>
      </div>
    );
  }
}

Feedback.propTypes = {
  history: objectOf(oneOfType([func, string, number, object])).isRequired,
};

export default Feedback;
