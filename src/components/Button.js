import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Button extends Component {
  render() {
    const { disabled, className, onClick, name, testId, path } = this.props;
    const classe = className;
    return (
      <div>
        <Link to={ path }>
          <button
            type="button"
            className={ classe }
            data-testid={ testId }
            disabled={ disabled }
            onClick={ onClick }
          >
            { name }
          </button>
        </Link>
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
