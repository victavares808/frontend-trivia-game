import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';

class Feedback extends Component {
  feedbackMessage = () => {
    const { assertions } = this.props;
    const numberThree = 3;
    if (assertions < numberThree) {
      return <h1 data-testid="feedback-text">Could be better...</h1>;
    }
    return <h1 data-testid="feedback-text">Well Done!</h1>;
  }

  render() {
    const { feedbackMessage } = this;
    return (
      <div>
        <Header />
        <div>
          { feedbackMessage() }
        </div>
      </div>
    );
  }
}

Feedback.propTypes = {
  assertions: PropTypes.number,
}.isRequired;

const mapStateToProps = (state) => ({
  assertions: state.player.assertions,
});

export default connect(mapStateToProps)(Feedback);
