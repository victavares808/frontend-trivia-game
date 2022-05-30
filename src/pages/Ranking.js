import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../components/Button';

class Ranking extends Component {
  goHomeRedirect = () => {
    const { history } = this.props;
    history.push('/');
  }

  render() {
    return (
      <>
        <div data-testid="ranking-title">
          Ranking
        </div>
        <Button
          name="Go Home"
          testId="btn-go-home"
          onClick={ this.goHomeRedirect }
        />
      </>
    );
  }
}

Ranking.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func }),
}.isRequired;

export default Ranking;
