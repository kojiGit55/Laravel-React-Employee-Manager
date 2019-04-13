import React from 'react';
import { configure, shallow, mount } from "enzyme";

import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import Top from '../containers/Top';
import Login from '../components/Login';
import Home from '../containers/Home';

test('test top has correct children', () => {
    let wrapper = shallow(<Top />);
    expect(wrapper.find(Login).length).toBe(1);
    expect(wrapper.find(Home).length).toBe(0);

    wrapper.setState({ isLoggedIn: true });

    expect(wrapper.find(Login).length).toBe(0);
    expect(wrapper.find(Home).length).toBe(1);

})
