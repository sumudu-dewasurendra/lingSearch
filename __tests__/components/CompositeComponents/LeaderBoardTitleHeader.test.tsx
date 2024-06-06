import React from 'react';
import {create} from 'react-test-renderer';
import LeaderBoardTitleHeader from '../../../src/components/CompositeComponents/LeaderBoardTitleHeader';
import {expect, test} from '@jest/globals';

test('renders LeaderBoardTitleHeader component correctly', () => {
  const tree = create(
    <LeaderBoardTitleHeader
      sortAlphabetically={true}
      onPressName={() => console.log('onPressName')}
    />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
