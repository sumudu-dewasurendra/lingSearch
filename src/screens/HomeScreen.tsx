import React, {useState, useEffect, memo} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {COLORS} from '../theme/colors';
import {ReduxState} from '../types/commonTypes';
import SearchInputHeader from '../components/CompositeComponents/SearchInputHeader';
import LeaderboardUserItem from '../components/LeaderboardUserItem';
import LeaderBoardTitleHeader from '../components/CompositeComponents/LeaderBoardTitleHeader';
import {useDispatch, useSelector} from 'react-redux';
import {
  searchUser,
  setData,
  sortUsersByName,
  sortUsersByRank,
  setSortByName,
  setSortByRank,
} from '../redux/actions';
import leaderBoardData from '../data/leaderboard.json';

const styles = StyleSheet.create({
  mainWrapper: {
    backgroundColor: COLORS.MAIN_BACKGROUND_COLOR,
    flex: 1,
    alignItems: 'center',
    paddingTop: 70,
    padding: 20,
    paddingBottom: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  searchInputHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  searchButton: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: COLORS.BUTTON_COLOR_DARK,
  },
});

const MemorizedSearchInputHeader = memo(SearchInputHeader);
const MemorizedLeaderboardUserItem = memo(LeaderboardUserItem);
const MemorizedLeaderBoardTitleHeader = memo(LeaderBoardTitleHeader);

const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setData(leaderBoardData));
  }, [dispatch]);

  const filteredData = useSelector((state: ReduxState) => state.filteredData);
  console.log('filteredData', filteredData);
  const sortAlphabeticallyEnabled = useSelector(
    (state: ReduxState) => state.sortAlphabetically,
  );
  const sortByRankEnabled = useSelector(
    (state: ReduxState) => state.sortByRank,
  );
  const filter = useSelector((state: ReduxState) => state.filter);

  const [searchText, setSearchText] = useState<string>('');

  // If the search text is empty, show all the users
  useEffect(() => {
    if (searchText === '') {
      dispatch(searchUser(searchText));
    }
  }, [searchText, dispatch]);

  useEffect(() => {
    dispatch(sortUsersByName());
  }, [sortAlphabeticallyEnabled, dispatch]);

  useEffect(() => {
    dispatch(sortUsersByRank());
  }, [sortByRankEnabled, dispatch]);

  function sortAlphabetically(isSorted: boolean) {
    dispatch(setSortByName(isSorted));
  }

  function sortByRank(isSorted: boolean) {
    dispatch(setSortByRank(isSorted));
  }

  function searchUserFromLeaderBoard() {
    dispatch(searchUser(searchText));
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      accessible={false}>
      <View style={styles.mainWrapper}>
        <Text style={styles.title}>Leaderboard</Text>
        <MemorizedSearchInputHeader
          searchText={searchText}
          onChangeSearchText={setSearchText}
          searchButtonLabel="Search"
          onPresSearchButton={searchUserFromLeaderBoard}
          searchbuttonBorderRadius={30}
          searchButtonWrapperStyles={styles.searchButton}
          searchButtonTextColor={COLORS.TEXT_COLOR_WHITE}
        />
        <MemorizedLeaderBoardTitleHeader
          sortAlphabetically={sortAlphabeticallyEnabled}
          onPressName={() => sortAlphabetically(!sortAlphabeticallyEnabled)}
          sortByRank={sortByRankEnabled}
          onPressRank={() => sortByRank(!sortByRankEnabled)}
        />
        <FlatList
          data={filteredData}
          keyExtractor={item => item.uid}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          initialNumToRender={20}
          renderItem={({item}) => (
            <MemorizedLeaderboardUserItem
              userName={filter}
              user={item}
              onPressUser={() => {}} // TODO: Add navigation to user profile
            />
          )}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default HomeScreen;
