import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/Header.css';

class Header extends Component {
  render() {
    const { img, name, score } = this.props;
    return (
      <div>
        <header>
          <img
            data-testid="header-profile-picture"
            src={ img }
            alt="profile"
          />
          <h3
            data-testid="header-player-name"
          >
            { name }
          </h3>
          <h2
            data-testid="header-score"
          >
            Score:
            {' '}
            { score }
          </h2>
        </header>
      </div>
    );
  }
}

Header.propTypes = {
  name: PropTypes.string,
  score: PropTypes.number,
}.isRequired;

const mapStateToProps = (state) => ({
  img: state.player.img,
  name: state.player.name,
  score: state.player.score,
});

export default connect(mapStateToProps)(Header);
