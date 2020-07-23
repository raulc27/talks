import React from 'react';
import { shallow } from 'enzyme';
import List from '../List';

const minimalProps = {
  children: <li>list item</li>,
};

describe('<List /> Tests', () => {
  
  it('should render without exploding', (done) => {
    const wrapper = shallow(<List {...minimalProps}/>);
    expect(wrapper).toHaveLength(1);
    done();
  });

  it('should render correctly', (done) => {
    const wrapper = shallow(<List {...minimalProps}/>);
    expect(wrapper).toMatchSnapshot();
    done();
  });

});
