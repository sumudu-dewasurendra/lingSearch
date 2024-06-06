import React from 'react';
import {create} from 'react-test-renderer';
import SearchInput from '../../src/components/SearchInput';
import {expect, test} from '@jest/globals';

test('renders SearchInput component correctly', () => {
  const tree = create(
    <SearchInput
      placeholder="Search"
      onChangeSearchText={(text: string) => console.log(text)}
      searchText=""
    />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
