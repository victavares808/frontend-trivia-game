import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BsMoonStarsFill } from 'react-icons/bs';
import { FiSun } from 'react-icons/fi';
import { changeBackgroundColor } from '../redux/actions';
import Button from '../components/Button';
import '../css/Settings.css';

class Settings extends Component {
 changeBGColor = () => {
   const { backgroundColor, sendNewBackgroundColor } = this.props;
   if (backgroundColor === 'dark') {
     sendNewBackgroundColor('light');
   } else {
     sendNewBackgroundColor('dark');
   }
 }

  goBackToLoginPage = () => {
    const { history } = this.props;
    history.push('/');
  }

  render() {
    const { backgroundColor } = this.props;
    return (
      <div className="settings-container">
        <h1
          data-testid="settings-title"
        >
          Settings
        </h1>
        <button
          style={
            backgroundColor === 'dark'
              ? { backgroundColor: 'black', color: 'yellow' } : (
                { backgroundColor: 'white' })
          }
          label="Color Mode"
          className="PAGE__MODE"
          type="button"
          value={ backgroundColor }
          onClick={ this.changeBGColor }
        >
          <div className={ backgroundColor === 'dark' ? 'unchecked' : 'checked' }>
            <div className="icon sun-icon">
              <FiSun />
            </div>
            <div className="icon moon-icon">
              <BsMoonStarsFill />
            </div>
          </div>
        </button>
        <Button
          type="button"
          onClick={ this.goBackToLoginPage }
          name="Go Home"
          classe="standard-btn GO_HOME_BTN"
        />
      </div>
    );
  }
}

Settings.propTypes = {
  backgroundColor: PropTypes.string,
  sendNewBackgroundColor: PropTypes.func,
}.isRequired;

const mapStateToProps = (state) => ({
  backgroundColor: state.settings.backgroundColor,
});

const mapDispatchToProps = (dispatch) => ({
  sendNewBackgroundColor: (backgroundColor) => dispatch(
    changeBackgroundColor(backgroundColor),
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
