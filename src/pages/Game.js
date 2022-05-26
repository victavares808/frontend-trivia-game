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
  }

  async componentDidMount() {
    const { getQuiz, history } = this.props;
    const token = localStorage.getItem('token');
    const quiz = await fetchQuiz(token);
    if (quiz.response_code === invalidTokenId) {
      localStorage.removeItem('token');
      history.push('/');
    } else {
      getQuiz(quiz);
      this.setState({ loading: false });
    }
  }

  render() {
    const { quests } = this.props;
    const { loading } = this.state;
    return (loading ? <Loading /> : (
      <div>
        <Header />
        <Question questions={ quests } />
      </div>
    )
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
