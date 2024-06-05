import React from 'react';
import {create} from 'react-test-renderer';
import Button from '../../src/components/Button';
import {expect, test} from '@jest/globals';

test('renders correctly', () => {
  const tree = create(
    <Button
      label="Button"
      onPressButton={() => console.log('Button pressed')}
      width={100}
      height={50}
      borderRadius={5}
    />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
