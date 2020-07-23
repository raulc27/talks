import { OrderedMap } from 'immutable';
import { asImmutable } from '../utils';
import * as actions from './actions';

const initialState = asImmutable({
  snackbars: OrderedMap({}),
  orderIsInProgress: false,
  completedSteps: {},
  orderStepTypes: {
    ORDER_REQUESTED: {
      name: 'ORDER_REQUESTED',
      title: 'Pedido enviado',
    },
    ORDER_ACCEPTED: {
      name: 'ORDER_ACCEPTED',
      title: 'Pedido aceito',
    },
    ORDER_BEING_PREPARED: {
      name: 'ORDER_BEING_PREPARED',
      title: 'Pedido está sendo preparado',
    },
    ORDER_LEFT_FOR_DELIVERY: {
      name: 'ORDER_LEFT_FOR_DELIVERY',
      title: 'Pedido saiu para entrega',
    },
    ORDER_DELIVERED: {
      name: 'ORDER_DELIVERED',
      title: 'Pedido entregue',
    },
  },
});

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ORDER_REQUESTED: {
      return state.merge(asImmutable({
        orderIsInProgress: true,
        completedSteps: {
          ORDER_REQUESTED: true,
        },
      }));
    }
    case actions.ORDER_ACCEPTED: {
      return state.setIn(['completedSteps', 'ORDER_ACCEPTED'], true);
    }
    case actions.ORDER_BEING_PREPARED: {
      return state.setIn(['completedSteps', 'ORDER_BEING_PREPARED'], true);
    }
    case actions.ORDER_LEFT_FOR_DELIVERY: {
      return state.setIn(['completedSteps', 'ORDER_LEFT_FOR_DELIVERY'], true);
    }
    case actions.ORDER_DELIVERED: {
      return state.mergeDeep(asImmutable({
        orderIsInProgress: false,
        completedSteps: {
          ORDER_DELIVERED: true,
        },
      }));
    }
    case actions.ORDER_CANCELED: {
      return state.merge(initialState);
    }
    case actions.SNACKBAR_ENQUEUED: {
      const key = (new Date().getTime());
      return state.setIn(['snackbars', `${key}`], asImmutable({
        key,
        ...action.payload,
      }));
    }
    case actions.SNACKBAR_DEQUEUED: {
      return state.removeIn(['snackbars', `${action.payload.key}`]);
    }
    default:
      return state;
  }
};

export default rootReducer;
