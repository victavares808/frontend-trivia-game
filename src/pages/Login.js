import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../components/Button';
import { fetchToken } from '../services/triviaApi';
import {
  setUserImg,
  setUserName,
  setUserEmail,
  setScoreToZero,
} from '../redux/actions/index';
import fetchGravatar from '../services/gravatarAPI';
import '../css/Login.css';

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
    const {
      writeUserImg,
      writeUserName,
      writeUserEmail,
      clearScore,
    } = this.props;
    clearScore();
    const { email, name } = this.state;
    const img = fetchGravatar(email);
    writeUserImg(img);
    writeUserName(name);
    writeUserEmail(email);
    const { history } = this.props;
    history.push('/game');
  }

  settingsClick = () => {
    const { history } = this.props;
    history.push('/settings');
  }

  render() {
    const { name, email, disabled } = this.state;
    return (
      <div className="login-container">
        <main className="login-input-container">
          <input
            className="data-input"
            placeholder="Name"
            name="name"
            id="inputName"
            type="text"
            data-testid="input-player-name"
            value={ name }
            onChange={ this.onInputChange }
            autoComplete="off"
          />
          <input
            className="data-input"
            placeholder="E-Mail"
            name="email"
            id="inputEmail"
            type="text"
            data-testid="input-gravatar-email"
            value={ email }
            onChange={ this.onInputChange }
            autoComplete="off"
          />

          <Button
            onClick={ this.playClick }
            disabled={ disabled }
            name="Play"
            path="/game"
            testId="btn-play"
            classe="standard-btn PLAY__BTN"
          />
          <Button
            onClick={ this.settingsClick }
            name="Settings"
            path="/settings"
            testId="btn-settings"
            classe="standard-btn SETTINGS__BTN"
          />
        </main>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }),
  writeUserImg: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  writeUserImg: (img) => dispatch(setUserImg(img)),
  writeUserName: (name) => dispatch(setUserName(name)),
  writeUserEmail: (email) => dispatch(setUserEmail(email)),
  clearScore: () => dispatch(setScoreToZero()),
});

export default connect(null, mapDispatchToProps)(Login);
