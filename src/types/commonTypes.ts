export type LeaderBoardUser = {
  bananas: number;
  lastDayPlayed: string;
  longestStreak: number;
  name: string;
  stars: number;
  subscribed: boolean;
  uid: string;
  rank?: number;
};

export type ReduxState = {
  data: LeaderBoardUser[];
  filteredData: LeaderBoardUser[];
  sortAlphabetically: boolean;
  sortByRank: boolean;
  filter: string;
};
