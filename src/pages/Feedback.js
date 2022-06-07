import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Button from '../components/Button';

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

  playAgainRedirect = () => {
    const { history } = this.props;
    history.push('/');
  }

  rankingRedirect = () => {
    const { name, score, img } = this.props;
    let ranking = [];
    const infos = {
      name,
      score,
      img,
    };
    if (localStorage.getItem('ranking')) {
      ranking = JSON.parse(localStorage.getItem('ranking'));
    }
    ranking.push(infos);
    localStorage.setItem('ranking', JSON.stringify(ranking));
    const { history } = this.props;
    history.push('/ranking');
  }

  render() {
    return (
      <div>
        <Header />
        <div>
          { this.feedbackMessage() }
        </div>
        <div>
          { this.totalScore() }
        </div>
        <div>
          { this.totalQuestion() }
        </div>
        <Button
          name="PlayAgain"
          testId="btn-play-again"
          onClick={ this.playAgainRedirect }
          classe="standard-btn"
        />
        <Button
          name="Ranking"
          testId="btn-ranking"
          onClick={ this.rankingRedirect }
          classe="standard-btn"
        />
      </div>
    );
  }
}

Feedback.propTypes = {
  assertions: PropTypes.number,
  history: PropTypes.shape({
    push: PropTypes.func }),
  name: PropTypes.string,
  score: PropTypes.number,
}.isRequired;

const mapStateToProps = (state) => ({
  assertions: state.player.assertions,
  totalScore: state.player.score,
  name: state.player.name,
  score: state.player.score,
  img: state.player.img,
});

export default connect(mapStateToProps)(Feedback);
