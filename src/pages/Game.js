import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { fetchQuiz } from '../services/triviaApi';
import { setQuiz } from '../redux/actions/index';
import Question from '../components/Question';
import Loading from '../components/Loading';

const invalidTokenId = 3;

class Game extends Component {
  state = {
    loading: true,
    questionNumber: 0,
    showStyle: false,
    answers: [],
  }

  async componentDidMount() {
    await this.quizRequest();
  }

    quizRequest = async () => {
      const { getQuiz } = this.props;
      const token = localStorage.getItem('token');
      const quiz = await fetchQuiz(token);
      const { history } = this.props;
      if (quiz.response_code === invalidTokenId) {
        localStorage.removeItem('token');
        history.push('/');
      } else {
        getQuiz(quiz);
        this.setState({
          loading: false,
        });
        this.shuffleAnswers();
      }
    }

    // Source: https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm;
  shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  shuffleAnswers = () => {
    const { questionNumber } = this.state;
    const { quests } = this.props;
    const incorrectAnswers = quests[questionNumber].incorrect_answers
      .map((answer, index) => ({
        type: 'incorrect',
        answer,
        index,
      }));

    const answers = [
      {
        type: 'correct',
        answer: quests[questionNumber].correct_answer,
      },
      ...incorrectAnswers,
    ];
    this.shuffleArray(answers);
    this.setState({ answers });
  }

  nextQuestion = () => {
    const { quests } = this.props;
    const { questionNumber } = this.state;
    if (quests.length - 1 > questionNumber) {
      this.setState(
        (prevState) => ({
          questionNumber: prevState.questionNumber + 1,
          showStyle: false,
        }),
        () => this.shuffleAnswers(),
      );
    }
  }

  changeShowStyleState = () => {
    this.setState({
      showStyle: true,
    });
  }

  render() {
    const { quests } = this.props;
    const { loading, answers, showStyle, questionNumber } = this.state;
    return (
      <div>
        <Header />
        { loading ? <Loading /> : (<Question
          questions={ quests }
          changeShowStyleState={ this.changeShowStyleState }
          nextQuestion={ this.nextQuestion }
          answers={ answers }
          showStyle={ showStyle }
          questionNumber={ questionNumber }
        />)}
      </div>
    );
  }
}

Game.propTypes = {
  getQuiz: PropTypes.func,
  quests: PropTypes.arrayOf(),
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

const mapStateToProps = (state) => ({
  quests: state.quizReducer.quests,
});

const mapDispatchToProps = (dispatch) => ({
  getQuiz: (quiz) => dispatch(setQuiz(quiz)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
