import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FaCog, FaPlay } from 'react-icons/fa';

class Button extends Component {
  buttonIcon = () => {
    const { name } = this.props;
    if (name === 'Settings') {
      return <FaCog />;
    } if (name === 'Play') {
      return <FaPlay />;
    }
  }

  render() {
    const { disabled, className, onClick, testId } = this.props;
    const classe = className;
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
