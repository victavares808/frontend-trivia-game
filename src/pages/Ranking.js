import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../components/Button';

class Ranking extends Component {
  state = {
    ranking: [],
  }

  componentDidMount() {
    const ranking = JSON.parse(localStorage.getItem('ranking'));
    // Source: https://www.javascripttutorial.net/array/javascript-sort-an-array-of-objects/#:~:text=To%20sort%20an%20array%20of%20objects%2C%20you%20use%20the%20sort,determines%20the%20order%20of%20objects.
    ranking.sort((a, b) => b.score - a.score);
    this.setState({ ranking });
  }

  goHomeRedirect = () => {
    const { history } = this.props;
    history.push('/');
  }

  render() {
    const { ranking } = this.state;
    console.log(ranking);
    return (
      <div>
        <div data-testid="ranking-title">
          Ranking
        </div>
        <Button
          name="Go Home"
          testId="btn-go-home"
          onClick={ this.goHomeRedirect }
        />
        {ranking.map(({ name, score, img }, index) => (
          <div key={ index }>
            <h3 data-testid={ `player-name-${index}` }>
              { name }
            </h3>
            <img src={ img } alt={ name } />
            <h5 data-testid={ `player-score-${index}` }>
              { score }
            </h5>
          </div>
        ))}
      </div>
    );
  }
}

Ranking.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func }),
}.isRequired;

export default Ranking;
