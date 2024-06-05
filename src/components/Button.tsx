import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import {COLORS} from '../theme/colors';

const styles = StyleSheet.create({
  buttonWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: COLORS.BORDER_COLOR,
    padding: 5,
  },
  buttonText: {
    fontWeight: '700',
    fontSize: 15,
    letterSpacing: 0.5,
  },
});

type ButtonProps = {
  label: string;
  onPressButton: (x?: any) => void;
  width?: number;
  height?: number;
  borderRadius?: number;
  labelColor?: string;
  wrapperStyles?: {[key: string]: any};
};

// Use TouchableOpacity to give the button a touchable effect for the user
const Button = ({
  label,
  onPressButton,
  height,
  width,
  borderRadius,
  wrapperStyles,
  labelColor,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.buttonWrapper,
        ...wrapperStyles,
        height: height,
        width: width,
        borderRadius: borderRadius,
      }}
      onPress={onPressButton}>
      <Text style={{...styles.buttonText, color: labelColor}}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
