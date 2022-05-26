import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

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
          <p
            data-testid="header-score"
          >
            { score }
          </p>
        </header>
      </div>
    );
  }
}

Header.propTypes = {
  disabled: PropTypes.func,
  name: PropTypes.string,
  score: PropTypes.number,
}.isRequired;

const mapStateToProps = (state) => ({
  img: state.playerReducer.img,
  name: state.playerReducer.name,
  score: state.playerReducer.score,
});

export default connect(mapStateToProps)(Header);
