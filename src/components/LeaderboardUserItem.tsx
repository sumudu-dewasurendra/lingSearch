import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import {LeaderBoardUser} from '../types/commonTypes';
import {COLORS} from '../theme/colors';

const styles = StyleSheet.create({
  mainWrapper: {
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

type LeaderboardUserItemProps = {
  user: LeaderBoardUser;
  onPressUser: (user: LeaderBoardUser) => void;
};

// Use TouchableOpacity to give the button a touchable effect for the user
const LeaderboardUserItem = ({user, onPressUser}: LeaderboardUserItemProps) => {
  return (
    <TouchableOpacity
      style={{...styles.mainWrapper}}
      onPress={() => onPressUser(user)}>
      <Text>{user.name}</Text>
      <Text>{user.rank}</Text>
      <Text>{user.bananas}</Text>
    </TouchableOpacity>
  );
};

export default LeaderboardUserItem;
