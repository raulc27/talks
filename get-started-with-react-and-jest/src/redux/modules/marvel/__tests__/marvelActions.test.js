import * as actions from '../marvelActions';

describe('marvel/marvelActions.js Tests', () => {
  it('should create fetchCharacters action object correctly', (done) => {
    expect(actions.fetchCharacters()).toMatchSnapshot();
    done();
  });

  it('should create completeFetchCharacters action object correctly', (done) => {
    const data = [{ id: 1, prop: 'prop' }];
    expect(actions.fetchCharacters(data)).toMatchSnapshot();
    done();
  });

  it('should create completeFetchCharacters action object correctly', (done) => {
    const error = { type: 'Error'};
    expect(actions.failFetchCharacters(error)).toMatchSnapshot();
    done();
  });
});