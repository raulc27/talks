import React, { Component, Fragment } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  AppBar, Toolbar, IconButton, List, ListItem, ListItemText, ListSubheader,
  Grid, Typography, CssBaseline, Badge, Divider, Button, Stepper, Step, StepLabel,
} from '@material-ui/core';
import { Menu as MenuIcon, Mail as MailIcon, Assignment as AssignmentIcon, AccountCircle } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

import * as selectors from '../redux/selectors';
import * as actions from '../redux/actions';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.grey[100],
  },
  grow: {
    flexGrow: 1,
  },
  orderList: {
    backgroundColor: theme.palette.background.paper,
  },
  orderListActionButtons: {
    margin: theme.spacing.unit,
  },
  orderListSubHeader: {
    textTransform: 'uppercase',
  },
});

class AppContainer extends Component {
  handleProfileMenuOpen = () => {
    console.log('menu open');
  }

  requestOrder = () => {
    const { requestOrderAction } = this.props;
    requestOrderAction();
  }

  cancelOrder = () => {
    const { cancelOrderAction } = this.props;
    cancelOrderAction();
  }

  renderStep = (step, key) => {
    const { completedSteps } = this.props;
    const isCompleted = completedSteps.has(step.get('name'));
    return (
      <Step
        key={key}
        completed={isCompleted}
      >
        <StepLabel>
          {step.get('title')}
        </StepLabel>
      </Step>
    );
  }

  renderCart = () => {
    const { classes, orderIsInProgress } = this.props;
    return (
      <Fragment>
        <List
          className={classes.orderList}
          subheader={
            <ListSubheader className={classes.orderListSubHeader}>
              Items do pedido
            </ListSubheader>
          }
        >
          <ListItem alignItems="flex-start">
            <ListItemText
              primary="Item um"
              secondary={
                <Fragment>
                  {'Descrição do item'}
                </Fragment>
              }
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemText
              primary="Item dois"
              secondary={
                <Fragment>
                  {'Descrição do item'}
                </Fragment>
              }
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemText
              primary="Item três"
              secondary={
                <Fragment>
                  {'Descrição do item'}
                </Fragment>
              }
            />
          </ListItem>
        </List>
        <Divider />
        <List className={classes.orderList}>
          <ListItem>
            <Button
              variant="contained"
              color="primary"
              disabled={orderIsInProgress}
              className={classes.orderListActionButtons}
              onClick={this.requestOrder}
            >
              Efetuar pedido
            </Button>
            <Button
              variant="contained"
              color="secondary"
              disabled={!orderIsInProgress}
              className={classes.orderListActionButtons}
              onClick={this.cancelOrder}
            >
              Cancelar pedido
            </Button>
          </ListItem>
        </List>
      </Fragment>
    );
  }

  renderSteps = () => {
    const { orderStepTypes } = this.props;
    const steps = orderStepTypes.map((item, i) => this.renderStep(item, i)).reduce((acc, curr) => {
      acc.push(curr);
      return acc;
    }, []);
    return (
      <Stepper>
        {steps}
      </Stepper>
    );
  }

  render() {
    const {
      isMenuOpen, classes,
    } = this.props;

    return (
      <CssBaseline>
        <div className={classes.root}>
          <div className="header">
            <AppBar position="static">
              <Toolbar>
                <IconButton color="inherit">
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="inherit" noWrap>
                  iFuji
                </Typography>
                <div className={classes.grow} />
                <div className="header-left">
                  <IconButton color="inherit">
                    <MailIcon />
                  </IconButton>
                  <IconButton color="inherit">
                    <Badge badgeContent={1} color="secondary">
                      <AssignmentIcon />
                    </Badge>
                  </IconButton>
                  <IconButton
                    aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                    aria-haspopup="true"
                    onClick={this.handleProfileMenuOpen}
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                </div>
              </Toolbar>
            </AppBar>
          </div>
          <div className="body">
            <Grid
              container
              justify="center"
              alignItems="center"
              spacing={16}
            >
              <Grid item xs={12}>
                {this.renderCart()}
              </Grid>
              <Grid item xs={12}>
                {this.renderSteps()}
              </Grid>
            </Grid>
          </div>
        </div>
      </CssBaseline>
    );
  }
}

AppContainer.defaultProps = {
  isMenuOpen: true,
  classes: {},
};

AppContainer.propTypes = {
  isMenuOpen: PropTypes.bool,
  classes: PropTypes.objectOf(PropTypes.any),
  orderStepTypes: PropTypes.objectOf(PropTypes.any).isRequired,
  orderIsInProgress: PropTypes.bool.isRequired,
  completedSteps: PropTypes.objectOf(PropTypes.any).isRequired,
  requestOrderAction: PropTypes.func.isRequired,
  cancelOrderAction: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  orderStepTypes: selectors.getOrderStepTypes,
  orderIsInProgress: selectors.orderIsInProgress,
  completedSteps: selectors.getCompletedSteps,
});

const mapDispatchToProps = {
  requestOrderAction: actions.requestOrder,
  cancelOrderAction: actions.cancelOrder,
};

export default withStyles(styles, {
  withTheme: true,
})(connect(mapStateToProps, mapDispatchToProps)(AppContainer));
