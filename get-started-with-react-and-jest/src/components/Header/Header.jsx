import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaBars } from 'react-icons/lib/fa';
import Menu from '../Menu';
import MenuItem from '../MenuItem';
import menuStyle from '../Menu/style/Menu.scss';
import menuItemStyle from '../MenuItem/style/MenuItem.scss';

import Style from './style/Header.scss';

class Header extends Component {
  goToHome = (e) => {
    const { pushFn } = this.props;
    e.preventDefault();
    pushFn('/');
  }

  goToSignIn = (e) => {
    const { pushFn } = this.props;
    e.preventDefault();
    pushFn('/signin');
  }

  goToSignUp = (e) => {
    const { pushFn } = this.props;
    e.preventDefault();
    pushFn('/signup');
  }

  openSidebar = (e) => {
    const { openSidebarFn } = this.props;
    e.preventDefault();
    openSidebarFn();
  }

  render() {
    return (
      <header className={Style.root}>
        <div className={Style.container}>
          <div className={Style.contentLeftContainer}>
            <Menu style={{ ...menuStyle, root: Style.menu__root }}>
              <MenuItem
                onClick={this.openSidebar}
                style={{ ...menuItemStyle, container: Style.menuItem__container }}
              >
                <FaBars />
              </MenuItem>
              <MenuItem
                href="/"
                onClick={this.goToHome}
                style={{ ...menuItemStyle, container: Style.menuItem__container }}
              >
                Home
              </MenuItem>
            </Menu>
          </div>
          <div className={Style.contentRightContainer}>
            <MenuItem
              href="signin"
              onClick={this.goToSignIn}
              style={{ ...menuItemStyle, container: Style.menuItem__container }}
            >
              Sign In
            </MenuItem>
            <MenuItem
              href="signup"
              onClick={this.goToSignUp}
              style={{ ...menuItemStyle, container: Style.menuItem__container }}
            >
              Sign Up
            </MenuItem>
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  pushFn: PropTypes.func.isRequired,
  openSidebarFn: PropTypes.func.isRequired,
};

export default Header;
