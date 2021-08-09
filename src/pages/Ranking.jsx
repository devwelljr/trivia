import React, { Component } from 'react';
import { string, func, number, object, objectOf, oneOfType } from 'prop-types';
import ButtonToLogin from '../components/ButtonToLogin';

class Ranking extends Component {
  render() {
    const { history } = this.props;
    return (
      <div>
        <ButtonToLogin history={ history } dataTestId="btn-go-home" />
      </div>
    );
  }
}

Ranking.propTypes = {
  history: objectOf(oneOfType([func, string, number, object])).isRequired,
};

export default Ranking;
