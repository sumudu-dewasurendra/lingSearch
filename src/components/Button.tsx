import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import {COLORS} from '../theme/colors';

const styles = StyleSheet.create({
  buttonWrapper: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: COLORS.BORDER_COLOR,
    padding: 5,
  },
});

type ButtonProps = {
  label: string;
  onPressButton: () => void;
  width?: number;
  height?: number;
};

// Use TouchableOpacity to give the button a touchable effect for the user
const Button = ({label, onPressButton, height, width}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={{...styles.buttonWrapper, height: height, width: width}}
      onPress={onPressButton}>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
