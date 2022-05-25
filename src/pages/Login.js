import React, { Component } from 'react';
import logo from '../trivia.png';

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
            <input
              name="email"
              id="inputEmail"
              type="text"
              data-testid="input-gravatar-email"
              value={ email }
              onChange={ this.onInputChange }
            />
          </label>

          <button
            type="button"
            data-testid="btn-play"
            disabled={ disabled }
          >
            Play
          </button>
        </main>
      </div>
    );
  }
}

export default Login;
