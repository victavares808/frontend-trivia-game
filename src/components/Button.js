import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Button extends Component {
  render() {
    const { disabled, className, onClick, name, testId } = this.props;
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
          { name }
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
}.isRequired;

export default connect()(Button);
