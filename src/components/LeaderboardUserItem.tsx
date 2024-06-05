import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
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
    borderRadius: 10,
  },
  nameContainer: {
    width: '65%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 10,
  },
  bananasContainer: {
    width: '35%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 10,
  },
  rightInnerContainer: {
    width: '80%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
  },
  medalText: {
    fontSize: 25,
  },
  text: {
    fontWeight: 'bold',
  },
});

const gradientStartCoodinates = {x: 0.0, y: 0.0};
const gradientEndCoodinates = {x: 1.0, y: 1.0};

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
      ? COLORS.USER_ITEM_GARADIENT_BACKGROUND_COLOR_SELECTED
      : COLORS.USER_ITEM_GARADIENT_BACKGROUND_COLOR;
  return (
    <TouchableOpacity
      style={styles.mainWrapper}
      onPress={() => onPressUser(user)}>
      <LinearGradient
        colors={backgroundColor}
        start={gradientStartCoodinates}
        end={gradientEndCoodinates}
        style={{...styles.rankContainer}}>
        <Text style={styles.text}>#{user.rank}</Text>
      </LinearGradient>
      <LinearGradient
        colors={backgroundColor}
        start={gradientStartCoodinates}
        end={gradientEndCoodinates}
        style={{
          ...styles.rightInnerContainer,
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
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default LeaderboardUserItem;
