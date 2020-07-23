import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withSnackbar } from 'notistack';
import * as actions from '../redux/actions';
import * as selectors from '../redux/selectors';

class NotifierContainer extends Component {
  state = {
    displayed: [],
  };

  storeDisplayed = (key) => {
    this.setState(({ displayed }) => ({
      displayed: [...displayed, key],
    }));
  };

  render() {
    const { notifications, enqueueSnackbar, dequeueSnackbarAction } = this.props;
    const { displayed } = this.state;

    notifications.forEach((notification) => {
      setTimeout(() => {
        if (displayed.indexOf(notification.get('key')) > -1) return;
        enqueueSnackbar(
          notification.get('message'),
          notification.get('options').toJS(),
        );
        this.storeDisplayed(notification.get('key'));
        dequeueSnackbarAction(notification.get('key'));
      }, 1);
    });

    return null;
  }
}

NotifierContainer.propTypes = {
  notifications: PropTypes.objectOf(PropTypes.any).isRequired,
  enqueueSnackbar: PropTypes.func.isRequired,
  dequeueSnackbarAction: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  notifications: selectors.getNotifications,
});

const mapDispatchToProps = {
  dequeueSnackbarAction: actions.dequeueSnackbar,
};

export default connect(mapStateToProps, mapDispatchToProps)(withSnackbar(NotifierContainer));
