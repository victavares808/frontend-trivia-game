import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Loading from './Loading';

class Question extends Component {
  state = {
    questionNumber: 0,
  }

  nextQuestion = () => {
    const { questions } = this.props;
    const { questionNumber } = this.state;
    if (questions.length - 1 > questionNumber) {
      this.setState(
        (prevState) => ({ questionNumber: prevState.questionNumber + 1 }),
      );
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
    const { questionNumber } = this.state;
    const { questions } = this.props;
    const answers = questions[questionNumber].incorrect_answers;
    answers.push(questions[questionNumber].correct_answer);
    this.shuffleArray(answers);
    return (
      <div>
        <div>
          <h1 data-testid="question-text">
            {questions[questionNumber].question}
          </h1>
          <h3 data-testid="question-category">
            {questions[questionNumber].category}
          </h3>
          <div data-testid="answer-options">
            {answers.map((answer, index) => (
              <button
                key={ index }
                data-testid={
                  questions[questionNumber].correct_answer === answer
                    ? 'correct-answer' : `wrong-answer-${index}`
                }
                type="button"
              >
                {answer}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={ this.nextQuestion }
          >
            Próximo
          </button>
        </div>
      </div>
    );
  }
}

Question.propTypes = {
  questions: PropTypes.arrayOf(),
}.isRequired;

export default connect()(Question);
