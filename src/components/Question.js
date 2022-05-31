import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setScore } from '../redux/actions/index';

class Question extends Component {
  nextQuestion = () => {
    const { questions } = this.props;
    const { questionNumber } = this.state;
    if (questions.length - 1 > questionNumber) {
      this.setState(
        (prevState) => ({ questionNumber: prevState.questionNumber + 1 }),
      );
    }
  }

  scoring = () => {
    const TEN = 10;
    const {
      questions,
      changeBoolState,
      questionNumber,
      timer,
      settingScore,
    } = this.props;
    changeBoolState();
    const { difficulty } = questions[questionNumber];
    const difficultyScoreTable = {
      hard: 3,
      medium: 2,
      easy: 1,
    };
    const score = (TEN + (timer * difficultyScoreTable[difficulty]));
    settingScore(score);
  }

  notScoring = () => {
    const { changeBoolState } = this.props;
    changeBoolState();
  }

  // Source: https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm;
  shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  render() {
    const {
      questions,
      questionNumber,
      answers,
      showStyle,
      nextQuestion,
      timer,
      isBtnDisabled,
      showNextBtn,
    } = this.props;
    return (
      <div>
        <h1>
          { timer }
        </h1>
        <h1 data-testid="question-text">{ questions[questionNumber].question }</h1>
        <h3 data-testid="question-category">{ questions[questionNumber].category }</h3>
        <div data-testid="answer-options">
          {answers.map(({ answer, index, type }) => {
            if (type === 'correct') {
              return (
                <button
                  type="button"
                  key={ Math.random() }
                  data-testid="correct-answer"
                  id="correct"
                  style={ showStyle ? (
                    { border: '3px solid rgb(6, 240, 15)' })
                    : { border: '3px solid black' } }
                  onClick={ this.scoring }
                  disabled={ isBtnDisabled }
                >
                  { answer }
                </button>
              );
            } return (
              <button
                type="button"
                key={ Math.random() }
                data-testid={ `wrong-answer-${index}` }
                style={ showStyle ? (
                  { border: '3px solid red' }
                ) : { border: '3px solid black' } }
                onClick={ this.notScoring }
                disabled={ isBtnDisabled }
              >
                { answer }
              </button>
            );
          })}
          { showNextBtn ? (
            <button
              type="button"
              onClick={ nextQuestion }
              data-testid="btn-next"
            >
              Next
            </button>
          ) : ''}
        </div>
      </div>
    );
  }
}

Question.propTypes = {
  questions: PropTypes.arrayOf(),
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  settingScore: (score) => dispatch(setScore(score)),
});

export default connect(null, mapDispatchToProps)(Question);
