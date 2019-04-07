import React from 'react';
import { configure, shallow, mount } from "enzyme";

import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import AddEmployee from '../containers/AddEmployee';
import Input from '../components/Input';
import SelectBox from '../components/SelectBox';

test('test AddEmployee has correct children', () => {
    let wrapper = shallow(<AddEmployee />);
    expect(wrapper.find(Input).length).toBe(3);
    expect(wrapper.find(SelectBox).length).toBe(2);
});

test('test initial state', () => {
    let wrapper = shallow(<AddEmployee />);
    expect(wrapper.state().employee_id).toBe('');
    expect(wrapper.state().name).toBe('');
    expect(wrapper.state().age).toBe('');
    expect(wrapper.state().department_id).toBe('');
    expect(wrapper.state().position_id).toBe('');
    expect(wrapper.state().formErrorMessageMap).toEqual(new Map());
});

test('test input text change', () => {
    let wrapper = shallow(<AddEmployee />);

    wrapper.instance().handleChange({ target: { value: 'My new value', name: 'employee_id' } });
    expect(wrapper.state().employee_id).toBe('My new value');
});

test('test validation', () => {
    let wrapper = shallow(<AddEmployee/>);

    expect(wrapper.instance().validate()).toBe(false);

});
