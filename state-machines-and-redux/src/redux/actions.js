export const ORDER_REQUESTED = 'ORDER_REQUESTED';
export const ORDER_ACCEPTED = 'ORDER_ACCEPTED';
export const ORDER_BEING_PREPARED = 'ORDER_BEING_PREPARED';
export const ORDER_LEFT_FOR_DELIVERY = 'ORDER_LEFT_FOR_DELIVERY';
export const ORDER_DELIVERED = 'ORDER_DELIVERED';
export const ORDER_CANCELED = 'ORDER_CANCELED';

export const SNACKBAR_ENQUEUED = 'SNACKBAR_ENQUEUED';
export const SNACKBAR_DEQUEUED = 'SNACKBAR_DEQUEUED';

export const requestOrder = () => ({
  type: ORDER_REQUESTED,
  meta: {
    notify: true,
  },
  payload: {},
});

export const acceptOrder = () => ({
  type: ORDER_ACCEPTED,
  meta: {
    notify: true,
  },
  payload: {},
});

export const prepareOrder = () => ({
  type: ORDER_BEING_PREPARED,
  meta: {
    notify: true,
  },
  payload: {},
});

export const leaveToDeliverOrder = () => ({
  type: ORDER_LEFT_FOR_DELIVERY,
  meta: {
    notify: true,
  },
  payload: {},
});

export const deliverOrder = () => ({
  type: ORDER_DELIVERED,
  meta: {
    notify: true,
  },
  payload: {},
});

export const cancelOrder = () => ({
  type: ORDER_CANCELED,
  meta: {
    notify: true,
  },
  payload: {},
});

export const enqueueSnackbar = (message, options = {}) => ({
  type: SNACKBAR_ENQUEUED,
  payload: {
    message,
    options,
  },
});

export const dequeueSnackbar = key => ({
  type: SNACKBAR_DEQUEUED,
  payload: {
    key,
  },
});
