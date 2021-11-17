import React, { Component } from 'react';
import GameHeader from '../components/GameHeader';
import Questions from '../components/Questions';
import ContainerGame from '../styles/divGame';
import MainGame from '../styles/mainGame';

class Game extends Component {
  render() {
    return (
      <MainGame>
        <GameHeader />
        <ContainerGame>
          <Questions />
        </ContainerGame>
      </MainGame>
    );
  }
}

export default Game;
