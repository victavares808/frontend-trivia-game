import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Button extends Component {
  render() {
    const { disabled, className, onClick } = this.props;
    const classe = className;
    return (
      <div>
        <button
          className={ classe }
          type="button"
          data-testid="btn-play"
          disabled={ disabled }
          onClick={ onClick }
        >
          Play
        </button>
      </div>
    );
  }
}

Button.propTypes = {
  disabled: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default connect()(Button);
