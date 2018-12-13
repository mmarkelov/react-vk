/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';
import VK from '../src';

describe('Provider', () => {
  test('mounted correctly', async done => {
    const wrapper = await shallow(
      <VK apiId="123456789"/>
    );

    expect(wrapper.instance()).toHaveProperty('_mounted', true);
    done();
  });
});
