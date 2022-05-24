import React, { Component } from 'react'

class Login extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      disabled: true,
    }
  }

  render() {
    return (
      <main>
        <label htmlFor='inputName'>
          <input
            name='inputName'
            type='text'
            data-testid='input-player-name'
          />
        </label>
      </main>
    )
  }
}