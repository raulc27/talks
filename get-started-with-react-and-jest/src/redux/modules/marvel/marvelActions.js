import MODULE_NAME from './marvelConstants';

export const FETCH_CHARACTERS_REQUESTED = `${MODULE_NAME}/FETCH_CHARACTERS_REQUESTED`;
export const FETCH_CHARACTERS_COMPLETED = `${MODULE_NAME}/FETCH_CHARACTERS_COMPLETED`;
export const FETCH_CHARACTERS_FAILED = `${MODULE_NAME}/FETCH_CHARACTERS_FAILED`;

export const fetchCharacters = () => ({
  type: FETCH_CHARACTERS_REQUESTED,
});

export const completeFetchCharacters = data => ({
  type: FETCH_CHARACTERS_COMPLETED,
  payload: {
    data,
  },
});

export const failFetchCharacters = error => ({
  type: FETCH_CHARACTERS_FAILED,
  payload: {
    error,
  },
});
