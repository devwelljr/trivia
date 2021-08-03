import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { func } from 'prop-types';
import Input from '../components/Input';
import fetchToken from '../APIs/fetchToken';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      name: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.validation = this.validation.bind(this);
    this.saveToken = this.saveToken.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.saveToken();
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

  async saveToken() {
    const data = await fetchToken();
    localStorage.setItem('token', data.token);
  }

  handleClick(e) {
    e.preventDefault();
    const { history } = this.props;
    history.push('/game');
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
          onClick={ this.handleClick }
        >
          Jogar
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  history: func.isRequired,
};

export default Login;
