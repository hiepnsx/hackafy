import React from 'react';
import  { connect } from 'react-redux';
import {
  getIsSignedIn,
  getCurrentUser,
} from '../store/rootReducer';
import { Link } from 'react-router';
import NavLink from '../components/NavLink';
import NotificationContainer from './NotificationContainer';

import '../styles/Header.css';

class Header extends React.Component {

  renderNavs() {
    if (this.props.isSignedIn) {
      return (
        <ul className="Header__nav-group">
          <li className="Header__nav-link">
            <NavLink to="/explore">Explore</NavLink>
          </li>
          <li className="Header__nav-link Header__notification-nav">
            <NotificationContainer location={this.props.location} />
          </li>
          <li className="Header__nav-link">
            <NavLink to={`/${this.props.currentUser.username}`}>Profile</NavLink>
          </li>
        </ul>
      )
    } else {
      return (
        <ul className="Header__nav-group">
          <li className="Header__nav-link">
            <NavLink to="/signin">Sign In</NavLink>
          </li>
          <li className="Header__nav-link">
            <NavLink to="/signup">Sign Up</NavLink>
          </li>
        </ul>
      )
    }
  }

  render() {
    return (
      <header className="Header__root">
        <div className="container">
          <div className="row  Header__container">
            <div className="three columns">
              <h1 className="Header__logo">
                <Link to="/" className="Header__logo-link">Hackafy</Link>
              </h1>
            </div>
            <nav className="offset-by-six three columns">
              {this.renderNavs()}
            </nav>
          </div>
        </div>
      </header>
    )
  }
}

const mapStateToProps = (state) => ({
  isSignedIn: getIsSignedIn(state),
  currentUser: getCurrentUser(state),
});


export default connect(
  mapStateToProps
)(Header);
