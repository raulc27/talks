import React from 'react';
import { shallow } from 'enzyme';
import { FaBars } from 'react-icons/lib/fa';
import MenuItem from '../../components/MenuItem';
import HeaderContainer from '../HeaderContainer';
import { createReduxTestStore } from '../../utils/test';
import { ui, auth, router } from '../../redux';

describe('<HeaderContainer /> Tests', () => {
  const eventMockObject = {
    preventDefault: jest.fn(),
  };

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should render without exploding', (done) => {
    const testStore = createReduxTestStore();
    const wrapper = shallow(<HeaderContainer store={testStore} />);
    expect(wrapper).toHaveLength(1);
    done();
  });

  it('should open sidebar when click on hamburguer menu item', (done) => {
    const testStore = createReduxTestStore({
      configs: {
        initialState: {
          ui: {
            sidebarIsOpen: false,
          },
        },
      },
    });
    const wrapper = shallow(<HeaderContainer store={testStore} />);
    testStore.when(ui.actions.OPEN_SIDEBAR, () => {
      const sidebarIsOpen = testStore.select(ui.selectors.sidebarIsOpen);
      expect(sidebarIsOpen).toBe(true);
      done();
    });

    const menuItem = wrapper.dive().shallow()
    .find(MenuItem)
    .filterWhere(item => item.children().type() === FaBars);

    const menuItemAnchor = menuItem.dive().shallow().find('a').first();
    menuItemAnchor.simulate('click', eventMockObject);
  });

  it('should navigate to Home page when click on menu item', (done) => {
    const testStore = createReduxTestStore();
    const wrapper = shallow(<HeaderContainer store={testStore} />);
    testStore.when(router.actions.PUSH, () => {
      done();
    });
    const menuItem = wrapper.dive().shallow()
    .find(MenuItem)
    .filterWhere(item => item.children().contains('Home'));
    const menuItemAnchor = menuItem.dive().shallow().find('a').first();
    menuItemAnchor.simulate('click', eventMockObject);
  });

  it('should navigate to Sign In page when click on menu item', (done) => {
    const testStore = createReduxTestStore();
    const wrapper = shallow(<HeaderContainer store={testStore} />);
    testStore.when(router.actions.PUSH, () => {
      done();
    });
    const menuItem = wrapper.dive().shallow()
    .find(MenuItem)
    .filterWhere(item => item.children().contains('Sign In'));
    const menuItemAnchor = menuItem.dive().shallow().find('a').first();
    menuItemAnchor.simulate('click', eventMockObject);
  });

  it('should navigate to Sign Up page when click on menu item', (done) => {
    const testStore = createReduxTestStore();
    const wrapper = shallow(<HeaderContainer store={testStore} />);
    testStore.when(router.actions.PUSH, () => {
      done();
    });
    const menuItem = wrapper.dive().shallow()
    .find(MenuItem)
    .filterWhere(item => item.children().contains('Sign Up'));
    const menuItemAnchor = menuItem.dive().shallow().find('a').first();
    menuItemAnchor.simulate('click', eventMockObject);
  });
});
