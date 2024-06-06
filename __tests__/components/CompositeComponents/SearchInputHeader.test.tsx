import React from 'react';
import {create} from 'react-test-renderer';
import SearchInputHeader from '../../../src/components/CompositeComponents/SearchInputHeader';
import {COLORS} from '../../../src/theme/colors';
import {expect, test} from '@jest/globals';

test('renders SearchInputHeader component correctly', () => {
  const tree = create(
    <SearchInputHeader
      searchText={''}
      onChangeSearchText={(text: string) => console.log(text)}
      searchButtonLabel="Search"
      onPresSearchButton={() => console.log('onPresSearchButton')}
      searchbuttonBorderRadius={30}
      searchButtonWrapperStyles={{}}
      searchButtonTextColor={COLORS.TEXT_COLOR_WHITE}
    />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
