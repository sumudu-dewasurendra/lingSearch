import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import {LeaderBoardUser} from '../types/commonTypes';
import {COLORS} from '../theme/colors';

const styles = StyleSheet.create({
  mainWrapper: {
    width: 350,
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderWidth: 3,
    borderRadius: 5,
    marginBottom: 5,
    borderColor: COLORS.BORDER_COLOR,
    paddingLeft: 10,
    paddingRight: 10,
  },
  textItemContainer: {
    width: '33%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
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
      style={styles.mainWrapper}
      onPress={() => onPressUser(user)}>
      <View
        style={{
          ...styles.textItemContainer,
          alignItems: 'flex-start',
          borderRightWidth: 1,
        }}>
        <Text>{user.name}</Text>
      </View>
      <View style={styles.textItemContainer}>
        <Text>{user.rank}</Text>
      </View>
      <View
        style={{
          ...styles.textItemContainer,
          alignItems: 'flex-end',
          borderLeftWidth: 1,
        }}>
        <Text>{user.bananas}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default LeaderboardUserItem;
