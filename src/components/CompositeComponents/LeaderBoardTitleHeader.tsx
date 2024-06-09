import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from '../Button';
import {COLORS} from '../../theme/colors';

const styles = StyleSheet.create({
  mainWrapper: {
    width: '100%',
    height: 65,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  rankContainer: {
    width: 80,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  nameContainer: {
    width: '60%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 5,
  },
  bananasContainer: {
    width: '40%',
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
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  button: {
    padding: 0,
    borderWidth: 0,
  },
});

type LeaderBoardTitleHeaderProps = {
  sortAlphabetically: boolean;
  sortByRank: boolean;
  onPressName: () => void;
  onPressRank: () => void;
};

const LeaderBoardTitleHeader = ({
  sortAlphabetically,
  sortByRank,
  onPressName,
  onPressRank,
}: LeaderBoardTitleHeaderProps) => {
  return (
    <View style={styles.mainWrapper}>
      <View style={styles.rankContainer}>
        <Button
          label={`Rank ${sortByRank ? '⬇️' : '⬆️'}`}
          labelColor={COLORS.TEXT_COLOR_BLACK}
          onPressButton={onPressRank}
          wrapperStyles={styles.button}
        />
      </View>
      <View style={styles.rightInnerContainer}>
        <View style={styles.nameContainer}>
          <Button
            label={`Name ${sortAlphabetically ? '⬇️' : '⬆️'}`}
            labelColor={COLORS.TEXT_COLOR_BLACK}
            onPressButton={onPressName}
            wrapperStyles={styles.button}
          />
        </View>
        <View style={styles.bananasContainer}>
          <Text style={styles.text}>Bananas🍌</Text>
        </View>
      </View>
    </View>
  );
};

export default LeaderBoardTitleHeader;
