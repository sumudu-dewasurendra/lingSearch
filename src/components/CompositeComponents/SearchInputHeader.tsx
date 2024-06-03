import React from 'react';
import {View, StyleSheet} from 'react-native';
import SearchInput from '../SearchInput';
import Button from '../Button';

const styles = StyleSheet.create({
  searchInputHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
});

type SearchInputHeaderProps = {
  searchText: string;
  onChangeSearchText: (text: string) => void;
  searchButtonLabel: string;
  onPresSearchButton: () => void;
};

const SearchInputHeader = ({
  searchText,
  onChangeSearchText,
  searchButtonLabel,
  onPresSearchButton,
}: SearchInputHeaderProps) => {
  return (
    <View style={styles.searchInputHeader}>
      <SearchInput
        searchText={searchText}
        onChangeSearchText={onChangeSearchText}
      />
      <Button label={searchButtonLabel} onPressButton={onPresSearchButton} />
    </View>
  );
};

export default SearchInputHeader;
