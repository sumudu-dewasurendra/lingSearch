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
    borderRadius: 5,
    borderColor: COLORS.BORDER_COLOR,
    padding: 5,
  },
  inputWrapper: {
    width: '90%',
    padding: 5,
  },
});

type SearchInputProps = {
  searchText: string;
  onChangeSearchText: (text: string) => void;
};

const SearchInput = ({searchText, onChangeSearchText}: SearchInputProps) => {
  return (
    <View style={styles.mainWrapper}>
      <Text>🔍</Text>
      <TextInput
        placeholder="Search by name"
        value={searchText || ''}
        onChangeText={text => onChangeSearchText(text)}
        style={styles.inputWrapper}
      />
    </View>
  );
};

export default SearchInput;
