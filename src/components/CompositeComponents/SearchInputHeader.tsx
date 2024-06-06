import React from 'react';
import {View, StyleSheet} from 'react-native';
import SearchInput from '../SearchInput';
import Button from '../Button';

const styles = StyleSheet.create({
  searchInputHeader: {
    width: '100%',
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
  searchbuttonBorderRadius?: number;
  searchButtonWrapperStyles: {[key: string]: any};
  searchButtonTextColor?: string;
};

const SearchInputHeader = ({
  searchText,
  onChangeSearchText,
  searchButtonLabel,
  onPresSearchButton,
  searchbuttonBorderRadius,
  searchButtonWrapperStyles,
  searchButtonTextColor,
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
        borderRadius={searchbuttonBorderRadius}
        wrapperStyles={searchButtonWrapperStyles}
        labelColor={searchButtonTextColor}
      />
    </View>
  );
};

export default SearchInputHeader;
