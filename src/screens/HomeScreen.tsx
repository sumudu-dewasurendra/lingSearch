import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {COLORS} from '../theme/colors';
import SearchInputHeader from '../components/CompositeComponents/SearchInputHeader';
import LeaderboardUserItem from '../components/LeaderboardUserItem';
import LeaderBoardTitleHeader from '../components/LeaderBoardTitleHeader';
import {useDispatch, useSelector} from 'react-redux';
import {searchUser, setData, sortUsers} from '../redux/actions';
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

const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setData(leaderBoardData));
  }, [dispatch]);

  const filteredData = useSelector((state: any) => state.filteredData);
  const sortAlphabeticallyEnabled = useSelector(
    (state: any) => state.sortAlphabetically,
  );

  const [sortAlphabetically, setSortAlphabetically] = useState<boolean>(
    sortAlphabeticallyEnabled,
  );
  const [searchText, setSearchText] = useState<string>('');

  // If the search text is empty, show all the users
  useEffect(() => {
    if (searchText === '') {
      dispatch(searchUser(searchText));
    }
  }, [searchText, dispatch]);

  useEffect(() => {
    dispatch(sortUsers(sortAlphabetically));
  }, [sortAlphabetically, dispatch]);

  function searchUserFromLeaderBoard() {
    dispatch(searchUser(searchText));
  }

  return (
    <View style={styles.mainWrapper}>
      <Text style={styles.title}>Leaderboard</Text>
      <SearchInputHeader
        searchText={searchText}
        onChangeSearchText={setSearchText}
        searchButtonLabel="Search"
        onPresSearchButton={searchUserFromLeaderBoard}
        searchbuttonBorderRadius={30}
        searchButtonWrapperStyles={styles.searchButton}
        searchTextColor={COLORS.TEXT_COLOR_WHITE}
      />
      <LeaderBoardTitleHeader
        sortAlphabetically={sortAlphabetically}
        onPressName={() => setSortAlphabetically(!sortAlphabeticallyEnabled)}
      />
      <FlatList
        data={filteredData}
        keyExtractor={item => item.uid}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        initialNumToRender={20}
        renderItem={({item}) => (
          <LeaderboardUserItem
            userName={searchText}
            user={item}
            onPressUser={() => {}} // TODO: Add navigation to user profile
          />
        )}
      />
    </View>
  );
};

export default HomeScreen;
