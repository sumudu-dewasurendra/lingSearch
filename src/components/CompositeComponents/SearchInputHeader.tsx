import React from 'react';
import {View, StyleSheet} from 'react-native';
import SearchInput from '../SearchInput';
import Button from '../Button';

const styles = StyleSheet.create({
  searchInputHeader: {
    width: 350,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});

type SearchInputHeaderProps = {
  searchText: string;
  onChangeSearchText: (text: string) => void;
  searchButtonLabel: string;
  onPresSearchButton: () => void;
  searchButtonWidth?: number;
  searchButtonHeight?: number;
};

const SearchInputHeader = ({
  searchText,
  onChangeSearchText,
  searchButtonLabel,
  onPresSearchButton,
  searchButtonWidth,
  searchButtonHeight,
}: SearchInputHeaderProps) => {
  return (
    <View style={styles.searchInputHeader}>
      <SearchInput
        searchText={searchText}
        onChangeSearchText={onChangeSearchText}
      />
      <Button
        label={searchButtonLabel}
        onPressButton={onPresSearchButton}
        width={searchButtonWidth}
        height={searchButtonHeight}
      />
    </View>
  );
};

export default SearchInputHeader;
