import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ui, router } from '../redux';
import Header from '../components/Header';

class HeaderContainer extends Component {
  openSidebar = () => {
    const { openSidebarAction } = this.props;
    openSidebarAction();
  }

  push = (href) => {
    const { pushAction } = this.props;
    pushAction(href);
  }

  render() {
    return (
      <Header
        openSidebarFn={this.openSidebar}
        pushFn={this.push}
      />
    );
  }
}

HeaderContainer.propTypes = {
  /** required */
  openSidebarAction: PropTypes.func.isRequired,
  pushAction: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  openSidebarAction: ui.actions.openSidebar,
  pushAction: router.actions.push,
};

export default connect(null, mapDispatchToProps)(HeaderContainer);
