import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { emailImgState } from '../redux/reducer/index';
import fetchGravatar from '../services/gravatarAPI';

class Feedback extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    const img = fetchGravatar('trybe@trybe.com');
    console.log(img);
    dispatch(emailImgState(img));
  }

  render() {
    const { img } = this.props;
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
            Name
          </h3>
          <p
            data-testid="header-score"
          >
            Score
          </p>
        </header>
      </div>
    );
  }
}

Feedback.propTypes = {
  dispatch: PropTypes.func.isRequired,
  img: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  img: state.feedback.img,
});

export default connect(mapStateToProps)(Feedback);
