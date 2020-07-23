import { asImmutable } from '../../../utils';
import * as actions from './marvelActions';

const initialState = asImmutable({
  isFetchingCharacters: false,
  fetchError: {},
  characters: [],
});

export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case actions.FETCH_CHARACTERS_REQUESTED:
        return state.set('isFetchingCharacters', true);
      case actions.FETCH_CHARACTERS_COMPLETED:
        return state.merge({
          isFetchingCharacters: false,
          characters: action.payload.data,
        });
      case actions.FETCH_CHARACTERS_FAILED:
        return state.merge({
          isFetchingCharacters: false,
          fetchError: action.payload.error,
        });
      default:
        return state;
    }
};

