/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';
import VK from '../src';

describe('VK', () => {
  test('should throw error when apiId is not set', () => {
    try {
      shallow(<VK />);
    } catch (e) {
      expect(e.message).toEqual('You need to set apiId');
    }
  });

  test('mounted correctly', async done => {
    const wrapper = await shallow(<VK apiId="123456789" />);

    expect(wrapper.instance()).toHaveProperty('_mounted', true);
    done();
  });
});
