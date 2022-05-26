import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import logo from '../trivia.png';
import Button from '../components/Button';
import { fetchToken } from '../services/triviaApi';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      disabled: true,
    };
  }

  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => this.disabledBtn());
  }

  disabledBtn = () => {
    const { name, email } = this.state;
    if (name === '' || email === '') {
      this.setState({
        disabled: true,
      });
    } else {
      this.setState({
        disabled: false,
      });
    }
  }

  playClick = async () => {
    const token = await fetchToken();
    localStorage.setItem('token', token);
  }

  render() {
    const { name, email, disabled } = this.state;
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={ logo } className="App-logo" alt="logo" />
          </header>
        </div>
        <main>
          <label htmlFor="inputName">
            Name
            <input
              name="name"
              id="inputName"
              type="text"
              data-testid="input-player-name"
              value={ name }
              onChange={ this.onInputChange }
            />
          </label>

          <label htmlFor="inputEmail">
            Email
            <input
              name="email"
              id="inputEmail"
              type="text"
              data-testid="input-gravatar-email"
              value={ email }
              onChange={ this.onInputChange }
            />
          </label>

          <Button
            className="PLAY__BTN"
            onClick={ this.playClick }
            disabled={ disabled }
            name="Play"
            path="/game"
            testId="btn-play"
          />
          <Button
            className="SETTINGS__BTN"
            name="Settings"
            path="/settings"
            testId="btn-settings"
          />
        </main>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
};
// Vamo que vamo
export default connect()(Login);
