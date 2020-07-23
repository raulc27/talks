import React from 'react';
import { shallow } from 'enzyme';
import { FaClose } from 'react-icons/lib/fa';
import Anchor from '../../Anchor';
import Sidebar from '../Sidebar';

const minimalProps = {
  sidebarTitle: 'sidebar title',
  closeSidebarFn: jest.fn(),
  children: <div />,
};

describe('<Sidebar /> Tests', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should render without exploding', (done) => {
    const wrapper = shallow(<Sidebar {...minimalProps} />);
    expect(wrapper).toHaveLength(1);
    done();
  });

  it('should render correctly', (done) => {
    const wrapper = shallow(<Sidebar {...minimalProps} />);
    expect(wrapper).toMatchSnapshot();
    done();
  });

  it('should call closeSidebarFn when click on close icon', (done) => {
    const wrapper = shallow(<Sidebar {...minimalProps} />);
    const anchor = wrapper.find(Anchor).filterWhere(item => item. children().type() === FaClose).first();
    anchor.simulate('click');
    expect(minimalProps.closeSidebarFn.mock.calls.length).toBe(1);
    done();
  });
});