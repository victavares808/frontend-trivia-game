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

  totalScore = () => {
    const { totalScore } = this.props;
    if (totalScore === 0) {
      return <h2 data-testid="feedback-total-score">0</h2>;
    }
    return <h2 data-testid="feedback-total-score">{ totalScore }</h2>;
  }

  totalQuestion = () => {
    const { assertions } = this.props;
    if (assertions === 0) {
      return <h2 data-testid="feedback-total-question">0</h2>;
    }
    return <h2 data-testid="feedback-total-question">{ assertions }</h2>;
  }

  render() {
    const { feedbackMessage, totalScore, totalQuestion } = this;
    return (
      <div>
        <Header />
        <div>
          { feedbackMessage() }
        </div>
        <div>
          { totalScore() }
        </div>
        <div>
          { totalQuestion() }
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
  totalScore: state.player.score,
});

export default connect(mapStateToProps)(Feedback);
