import { OrderedMap } from 'immutable';
import { asImmutable } from '../utils';

export const getOrderStepTypes = state => state.getIn(['orders', 'orderStepTypes']);
export const getNotifications = state => state.getIn(['orders', 'snackbars'], OrderedMap({}));
export const getCompletedSteps = state => state.getIn(['orders', 'completedSteps'], asImmutable({}));
export const orderIsInProgress = state => state.getIn(['orders', 'orderIsInProgress'], false);
