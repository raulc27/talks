import React from 'react';
import { shallow } from 'enzyme';
import { asImmutable } from '../../../utils';
import MarvelCharactersList from '../MarvelCharactersList';

const character = {
  id: 1,
  name: 'character name',
  description: 'character desc',
  thumbnail: 'character thumb',
}

const minimalProps = {
  characters: asImmutable([character]),
  isLoading: false,
}

describe('<MarvelCharactersList /> Tests', () => {
  it('should render without exploding', (done) => {
    const wrapper = shallow(
      <MarvelCharactersList {...minimalProps}/>
    );
    expect(wrapper).toHaveLength(1);
    done();
  });

  it('should render correctly', (done) => {
    const wrapper = shallow(
      <MarvelCharactersList {...minimalProps}/>
    );
    expect(wrapper).toMatchSnapshot();
    done();
  });

  it('should render correctly when is loading', (done) => {
    const wrapper = shallow(
      <MarvelCharactersList {...minimalProps} isLoading={true} />
    );
    expect(wrapper).toMatchSnapshot();
    done();
  });

});
