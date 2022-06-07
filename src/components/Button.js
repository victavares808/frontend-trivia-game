import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FaCog, FaPlay, FaHome } from 'react-icons/fa';
import { MdReplay } from 'react-icons/md';
import { GiPodium } from 'react-icons/gi';
import '../css/Button.css';

class Button extends Component {
  buttonIcon = () => {
    const { name } = this.props;
    if (name === 'Settings') return <FaCog />;
    if (name === 'Play') return <FaPlay />;
    if (name === 'PlayAgain') return <MdReplay />;
    if (name === 'Ranking') return <GiPodium />;
    if (name === 'Go Home') return <FaHome />;
  }

  render() {
    const { disabled, onClick, testId, classe } = this.props;
    return (
      <div>
        <button
          type="button"
          className={ classe }
          data-testid={ testId }
          disabled={ disabled }
          onClick={ onClick }
        >
          { this.buttonIcon() }
        </button>
      </div>
    );
  }
}

Button.propTypes = {
  disabled: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
  name: PropTypes.string,
  path: PropTypes.string,
}.isRequired;

export default connect()(Button);
