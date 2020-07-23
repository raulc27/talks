import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { ui } from '../redux';
import View from '../components/View';
import HeaderContainer from './HeaderContainer';
import SidebarContainer from './SidebarContainer';
import FooterContainer from './FooterContainer';

class ViewContainer extends PureComponent {
  closeSidebar = () => {
    const { closeSidebarAction } = this.props;
    closeSidebarAction();
  }

  render() {
    const {
      sidebarIsOpen, children, ...others
    } = this.props;
    return (
      <View
        header={
          <HeaderContainer />
        }
        sidebar={
          <SidebarContainer />
        }
        footer={
          <FooterContainer />
        }
        sidebarIsOpen={sidebarIsOpen}
        closeSidebarFn={this.closeSidebar}
        {...others}
      >
        {children}
      </View>
    );
  }
}

ViewContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  sidebarIsOpen: PropTypes.bool.isRequired,
  closeSidebarAction: PropTypes.func.isRequired,
};

ViewContainer.defaultProps = {
  children: undefined,
};

const mapStateToProps = createStructuredSelector({
  sidebarIsOpen: ui.selectors.sidebarIsOpen,
});

const mapDispatchToProps = {
  closeSidebarAction: ui.actions.closeSidebar,
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewContainer);
