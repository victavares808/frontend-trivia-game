import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

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

  render() {
    const { questionNumber } = this.state;
    const { questions } = this.props;
    const answers = questions[questionNumber].incorrect_answers;
    answers.push(questions[questionNumber].correct_answer);
    console.log(answers);
    return (
      <div>
        <h1>
          {questions[questionNumber].question}
        </h1>
        {answers.map((answer) => (
          <div key={ Math.random() }>
            <button type="button">
              {answer}
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={ this.nextQuestion }
        >
          Próximo
        </button>
      </div>
    );
  }
}

Question.propTypes = {
  questions: PropTypes.arrayOf(),
}.isRequired;

const mapStateToProps = (state) => ({
  quests: state.quizReducer.quests,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Question);
