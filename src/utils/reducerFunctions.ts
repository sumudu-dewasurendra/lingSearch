import {LeaderBoardUser} from '../types/commonTypes';

export function organizeDataAndAddRank(dataArray: LeaderBoardUser[]) {
  return dataArray
    .filter((user: LeaderBoardUser) => user.name !== '')
    .sort((a, b) => {
      if (b.bananas === a.bananas) {
        return (
          new Date(b.lastDayPlayed).getTime() -
          new Date(a.lastDayPlayed).getTime()
        );
      }
      return b.bananas - a.bananas;
    })
    .map((user, index) => ({
      ...user,
      rank: index + 1,
    }));
}

export function addSearchedUserToTopUsers(
  dataArray: LeaderBoardUser[],
  user: LeaderBoardUser,
) {
  // If the user exists, find the top 10 users and check if the user is in the top 10
  let topUsers = dataArray.sort((a, b) => b.bananas - a.bananas).slice(0, 10);
  const userInTop10 = topUsers.find(u => u.uid === user.uid);

  // If the user is not in the top 10, add the user to the top 10 list
  if (!userInTop10) {
    topUsers = topUsers.slice(0, 9);
    topUsers.push({
      ...user,
    });
  }

  return topUsers;
}

export function sortUsersByName(dataArray: LeaderBoardUser[]) {
  return dataArray.sort((a, b) => a.name.localeCompare(b.name));
}

export function unSortUsers(dataArray: LeaderBoardUser[]) {
  return dataArray.sort((a, b) => {
    if (b.bananas === a.bananas) {
      return (
        new Date(b.lastDayPlayed).getTime() -
        new Date(a.lastDayPlayed).getTime()
      );
    }
    return b.bananas - a.bananas;
  });
}
