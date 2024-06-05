import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import {LeaderBoardUser} from '../types/commonTypes';
import {COLORS} from '../theme/colors';
import {addMedalToRank} from '../utils/commonFunctions';

const styles = StyleSheet.create({
  mainWrapper: {
    width: '100%',
    height: 65,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 5,
    borderColor: COLORS.BORDER_COLOR,
  },
  rankContainer: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderWidth: 2,
    borderRadius: 5,
  },
  nameContainer: {
    width: '65%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 5,
  },
  bananasContainer: {
    width: '35%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 5,
  },
  rightInnerContainer: {
    width: '80%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 5,
  },
  medalText: {
    fontSize: 25,
  },
  text: {
    fontWeight: 'bold',
  },
});

type LeaderboardUserItemProps = {
  user: LeaderBoardUser;
  onPressUser: (user: LeaderBoardUser) => void;
  userName: string;
};

// Use TouchableOpacity to give the button a touchable effect for the user
const LeaderboardUserItem = ({
  user,
  onPressUser,
  userName,
}: LeaderboardUserItemProps) => {
  const backgroundColor =
    user.name.toLowerCase() === userName.toLowerCase()
      ? COLORS.USER_ITEM_SELECTED_BACKGROUND_COLOR
      : COLORS.MAIN_BACKGROUND_COLOR;
  return (
    <TouchableOpacity
      style={styles.mainWrapper}
      onPress={() => onPressUser(user)}>
      <View style={{...styles.rankContainer, backgroundColor: backgroundColor}}>
        <Text style={styles.text}>#{user.rank}</Text>
      </View>
      <View
        style={{
          ...styles.rightInnerContainer,
          backgroundColor: backgroundColor,
        }}>
        <View style={styles.nameContainer}>
          <Text style={styles.text}>{user.name}</Text>
        </View>
        <View style={styles.bananasContainer}>
          <Text style={styles.text}>
            <Text style={styles.medalText}>{addMedalToRank(user.rank)}</Text>
            {user.bananas}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default LeaderboardUserItem;
