import {SET_FILTER, SET_DATA, SEARCH_USER} from './actions';
import leaderBoardData from '../data/leaderboard.json';
import {LeaderBoardUser} from '../types/commonTypes';

type ActionProps = {
  type: string;
  payload: any;
};

const data = Object.values(leaderBoardData);
const initialData = data.filter((user: LeaderBoardUser) => user.name !== '');

const initialState = {
  data: initialData,
  filteredData: initialData,
  filter: '',
};

const rootReducer = (state = initialState, action: ActionProps) => {
  switch (action.type) {
    case SET_FILTER:
      const filteredData = state.data.filter(item =>
        item.name.toLowerCase().includes(action.payload.toLowerCase()),
      );
      return {
        ...state,
        filter: action.payload,
        filteredData: filteredData,
      };
    case SET_DATA:
      return {
        ...state,
        data: action.payload,
        filteredData: action.payload,
      };
    case SEARCH_USER:
      const userName = action.payload.toLowerCase();
      if (userName === '') {
        return {
          ...state,
          filteredData: state.data,
        };
      }
      const user = state.data.find(
        user => user.name.toLowerCase() === userName,
      );
      if (!user) {
        console.log(
          'This user name does not exist! Please specify an existing user name!',
        );
        return state;
      }

      let topUsers = [...state.data]
        .sort((a, b) => b.bananas - a.bananas)
        .slice(0, 10);
      const userInTop10 = topUsers.find(u => u.uid === user.uid);

      if (!userInTop10) {
        topUsers = topUsers.slice(0, 9);
        topUsers.push({
          ...user,
          rank: state.data.findIndex(u => u.uid === user.uid) + 1,
        } as typeof user & {rank: number});
      }

      topUsers = topUsers.map((user, index) => ({...user, rank: index + 1}));

      return {
        ...state,
        filteredData: topUsers,
      };
    default:
      return state;
  }
};

export default rootReducer;
