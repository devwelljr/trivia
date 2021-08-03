import React, { Component } from 'react';
import Input from '../components/Input';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      name: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.validation = this.validation.bind(this);
  }

  validation() {
    const { email, name } = this.state;
    const emailVerify = /\S+@\S+\.\S+/;
    const nameFormat = 2;
    if (emailVerify.test(email) && name.length >= nameFormat) {
      return false;
    }
    return true;
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { email, name } = this.state;
    return (
      <div>
        <Input
          text="Nome: "
          value={ name }
          onChange={ this.handleChange }
          dataTestId="player-name"
          id="name"
        />
        <Input
          text="Email: "
          value={ email }
          onChange={ this.handleChange }
          dataTestId="gravatar-email"
          id="email"
        />
        <button
          type="button"
          data-testid="btn-play"
          disabled={ this.validation() }
        >
          Jogar
        </button>
      </div>
    );
  }
}

export default Login;
