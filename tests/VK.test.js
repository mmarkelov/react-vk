/* eslint-env jest */

import React from 'react';
import { mount } from 'enzyme';
import VK from '../src';

describe('VK', () => {
  test('mounted correctly', () => {
    const wrapper = mount(<VK apiId="123456789" />);

    expect(wrapper.instance()).toHaveProperty('_mounted', true);
  });
});
