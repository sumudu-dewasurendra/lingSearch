import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {COLORS} from '../theme/colors';
import SearchInputHeader from '../components/CompositeComponents/SearchInputHeader';
import LeaderboardUserItem from '../components/LeaderboardUserItem';
import {useDispatch, useSelector} from 'react-redux';
import {searchUser, setData} from '../redux/actions';
import leaderBoardData from '../data/leaderboard.json';

const styles = StyleSheet.create({
  mainWrapper: {
    backgroundColor: COLORS.BACKGROUND_COLOR,
    flex: 1,
    alignItems: 'center',
    paddingTop: 70,
    padding: 10,
    paddingBottom: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  searchInputHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
});

const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setData(leaderBoardData));
  }, [dispatch]);

  const filteredData = useSelector((state: any) => state.filteredData);

  const [searchText, setSearchText] = useState<string>('');

  function searchUserFromLeaderBoard() {
    dispatch(searchUser(searchText));
  }

  return (
    <View style={styles.mainWrapper}>
      <Text style={styles.title}>Leader Board</Text>
      <SearchInputHeader
        searchText={searchText}
        onChangeSearchText={setSearchText}
        searchButtonLabel="Search"
        onPresSearchButton={searchUserFromLeaderBoard}
        searchButtonHeight={40}
        searchButtonWidth={80}
      />
      <FlatList
        data={filteredData}
        keyExtractor={item => item.uid}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        initialNumToRender={20}
        renderItem={({item}) => (
          <LeaderboardUserItem user={item} onPressUser={() => {}} />
        )}
      />
    </View>
  );
};

export default HomeScreen;
