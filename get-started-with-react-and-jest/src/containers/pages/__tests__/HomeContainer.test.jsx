import React from 'react';
import { shallow } from 'enzyme';
import { asImmutable } from '../../../utils';
import { marvel } from '../../../redux';
import HomeContainer from '../HomeContainer';
import { createReduxTestStore } from '../../../utils/test';

const character = {
  id: 1,
  name: 'character name',
  description: 'character desc',
  thumbnail: 'character thumb',
}

const minimalProps = {
  isFetchingCharacters: false,
  fetchCharactersAction: jest.fn(),
  characters: asImmutable([character]),
};

describe('<HomeContainer /> Tests', () => {
  it('should render without exploding', (done) => {
    const testStore = createReduxTestStore();
    const wrapper = shallow(<HomeContainer store={testStore} {...minimalProps} />);
    expect(wrapper).toHaveLength(1);
    done();
  });

  it('should fetch characters when component is mounted', (done) => {
    const testStore = createReduxTestStore();
    const wrapper = shallow(<HomeContainer store={testStore} {...minimalProps} />);
    testStore.when(marvel.actions.FETCH_CHARACTERS_REQUESTED, () => {
      expect(testStore.select(marvel.selectors.isFetchingCharacters)).toBe(true);
      done();
    });
    wrapper.dive();
  });
});
