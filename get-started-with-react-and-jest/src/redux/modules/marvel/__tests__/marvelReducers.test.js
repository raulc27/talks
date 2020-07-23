import { reducer } from '../marvelReducers';
import * as actions from '../marvelActions';
import { asImmutable } from '../../../../utils';

const initialState = asImmutable({
  isFetchingCharacters: false,
  fetchError: {},
  characters: [],
});

describe('marvel/marvelReducers.js Tests', () => {
  it('should save state correctly with fetchCharacters action', (done) => {
    expect(reducer(initialState, actions.fetchCharacters())).toMatchSnapshot();
    done();
  });
  
  it('should save state correctly with completeFetchCharacters action', (done) => {
    const data = [{
      id: 1,
      name: 'character name',
    }];
    expect(reducer(initialState, actions.completeFetchCharacters(data))).toMatchSnapshot();
    done();
  });

  it('should save state correctly with failFetchCharacters action', (done) => {
    const error = {
      type: 'Error',
    };
    expect(reducer(initialState, actions.failFetchCharacters(error))).toMatchSnapshot();
    done();
  })
});