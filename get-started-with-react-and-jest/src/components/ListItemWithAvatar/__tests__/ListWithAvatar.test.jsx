import React from 'react';
import { shallow } from 'enzyme';
import ListItemWithAvatar from '../ListItemWithAvatar';

const minimalProps = {
  children: <div />,
  avatarUrl: 'https://avatars1.githubusercontent.com/u/819041?s=400&u=e1678422ed2e3d88571273fcfeedc8647ea0c282&v=4',
};

describe('<ListItemWithAvatar /> Tests', () => {
  it('should render without exploding', (done) => {
    const wrapper = shallow(
      <ListItemWithAvatar {...minimalProps}/>
    );
    expect(wrapper).toHaveLength(1);
    done();
  });

  it('should render correctly', (done) => {
    const wrapper = shallow(
      <ListItemWithAvatar {...minimalProps}/>
    );
    expect(wrapper).toMatchSnapshot();
    done();
  });
});
