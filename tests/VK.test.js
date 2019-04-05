/* eslint-env jest */

import React from 'react';
import { mount } from 'enzyme';
import VK from '../src';

describe('VK', () => {
  it('renders without crashing', () => {
    mount(<VK />);
  });
});
