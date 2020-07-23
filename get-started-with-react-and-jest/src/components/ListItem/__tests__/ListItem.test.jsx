import React from 'react';
import { shallow } from 'enzyme';
import ListItem from '../ListItem';

const minimalProps = {
  children: <div>list item</div>,
};

const commonProps = {
  ...minimalProps,
  onClick: jest.fn(),
};

describe('<ListItem /> Tests', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should render without exploding', (done) => {
    const wrapper = shallow(
      <ListItem {...minimalProps}/>
    );
    expect(wrapper).toHaveLength(1);
    done();
  });

  it('should render correctly', (done) => {
    const wrapper = shallow(
      <ListItem {...minimalProps}/>
    );
    expect(wrapper).toMatchSnapshot();
    done();
  });

  it('should render correctly with all props', (done) => {
    const wrapper = shallow(
      <ListItem {...commonProps} />
    );
    expect(wrapper).toMatchSnapshot();
    done();
  });

  it('should call onClick handler when click on list item', (done) => {
    const wrapper = shallow(<ListItem {...commonProps}/>);
    wrapper.simulate('click');
    expect(commonProps.onClick.mock.calls.length).toBe(1);
    done();
  });
});
