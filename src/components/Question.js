import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

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

  choseAnswer = ({ target: { kind, style } }) => {
    if (kind === 'correct-answer') {
      style.border = '3px solid rgb(6, 240, 15)';
    }
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
      changeShowStyleState,
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
                  style={ showStyle ? (
                    { border: '3px solid rgb(6, 240, 15)' })
                    : { border: '3px solid black' } }
                  onClick={ changeShowStyleState }
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
                onClick={ changeShowStyleState }
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

export default connect()(Question);
