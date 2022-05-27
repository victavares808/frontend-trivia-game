import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';

class Feedback extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <h1 data-testid="feedback-text">
            Feedback
          </h1>
        </div>
      </div>
    );
  }
}

export default connect()(Feedback);
