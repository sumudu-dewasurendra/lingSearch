import React from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import {COLORS} from '../theme/colors';

const styles = StyleSheet.create({
  mainWrapper: {
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLORS.BORDER_COLOR,
    backgroundColor: COLORS.SEARCH_INPUT_BACKGROUND_COLOR,
    paddingHorizontal: 10,
  },
  inputWrapper: {
    width: '90%',
    padding: 16,
  },
});

type SearchInputProps = {
  searchText: string;
  onChangeSearchText: (text: string) => void;
  placeholder?: string;
};

const SearchInput = ({
  searchText,
  onChangeSearchText,
  placeholder,
}: SearchInputProps) => {
  return (
    <View style={styles.mainWrapper}>
      <Text>🔍</Text>
      <TextInput
        placeholder={placeholder || 'Search by name'}
        value={searchText || ''}
        onChangeText={text => onChangeSearchText(text)}
        style={styles.inputWrapper}
      />
    </View>
  );
};

export default SearchInput;
