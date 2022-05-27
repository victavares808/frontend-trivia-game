import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { fetchQuiz } from '../services/triviaApi';
import Question from '../components/Question';
import Loading from '../components/Loading';

const invalidTokenId = 3;

class Game extends Component {
  state = {
    loading: true,
  }

  async componentDidMount() {
    await this.quizRequest();
  }

    quizRequest = async () => {
      const token = localStorage.getItem('token');
      const quiz = await fetchQuiz(token);
      const { history } = this.props;
      if (quiz.response_code === invalidTokenId) {
        localStorage.removeItem('token');
        history.push('/');
      } else {
        this.setState({
          questions: quiz.results,
          loading: false,
        });
      }
    }

    render() {
      const { loading, questions: quests } = this.state;
      return (
        <div>
          <Header />
          { loading ? <Loading /> : (<Question questions={ quests } />)}
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

export default connect()(Game);
