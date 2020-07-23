import React from 'react';
import { shallow } from 'enzyme';
import { asImmutable } from '../../../utils';
import MarvelCharactersListItem from '../MarvelCharactersListItem';

const minimalProps = {
  name: 'character name',
  thumbnail: 'character thumb',
}

const commonProps = {
  ...minimalProps,
  description: 'character desc',
}

describe('<MarvelCharactersListItem /> Tests', () => {
  it('should render without exploding', (done) => {
    const wrapper = shallow(
      <MarvelCharactersListItem {...minimalProps}/>
    );
    expect(wrapper).toHaveLength(1);
    done();
  });

  it('should render correctly', (done) => {
    const wrapper = shallow(
      <MarvelCharactersListItem {...minimalProps}/>
    );
    expect(wrapper).toMatchSnapshot();
    done();
  });

  it('should render correctly with all props', (done) => {
    const wrapper = shallow(
      <MarvelCharactersListItem {...commonProps}/>
    );
    expect(wrapper).toMatchSnapshot();
    done();
  });
});
