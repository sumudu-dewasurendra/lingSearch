import {LeaderBoardUser} from '../types/commonTypes';

export function organizeDataAndAddRank(dataArray: LeaderBoardUser[]) {
  return dataArray
    .filter(user => user.name !== '')
    .sort((a, b) => {
      if (b.bananas === a.bananas) {
        return (
          new Date(b.lastDayPlayed).getTime() -
          new Date(a.lastDayPlayed).getTime()
        );
      }
      return b.bananas - a.bananas;
    })
    .reduce((acc: LeaderBoardUser[], user, index, sortedArray) => {
      // Add rank to each user
      if (index === 0 || user.bananas !== sortedArray[index - 1].bananas) {
        user.rank = index + 1;
      } else {
        user.rank = acc[index - 1].rank;
      }
      acc.push(user);
      return acc;
    }, []);
}

export function addSearchedUserToTopUsers(
  dataArray: LeaderBoardUser[],
  users: LeaderBoardUser[],
) {
  let topUsers: LeaderBoardUser[] = [];
  if (users.length > 1) {
    topUsers = users;
    return topUsers;
  } else {
    let usersNotInTop10: LeaderBoardUser[] = [];

    // If the user exists, find the top 10 leaderboard users and check if the users is in the top 10
    topUsers = dataArray.sort((a, b) => b.bananas - a.bananas).slice(0, 10);
    users.forEach(user => {
      const userInTop10 = topUsers.find(u => u.uid === user.uid);
      if (!userInTop10) {
        usersNotInTop10.push(user);
      }
    });

    // If the filtered users is not in the top 10, add the user to the top 10 list
    if (usersNotInTop10.length > 0) {
      topUsers = topUsers.slice(0, 9);
      topUsers = [...topUsers, ...usersNotInTop10];
    }

    return topUsers;
  }
}

export function sortUsersByName(dataArray: LeaderBoardUser[]) {
  return dataArray.sort((a, b) => a.name.localeCompare(b.name));
}

export function sortLowerstRankUsers(dataArray: LeaderBoardUser[]) {
  return dataArray.sort((a, b) => {
    if (b.bananas === a.bananas) {
      return a.name.localeCompare(b.name);
    }
    return a.bananas - b.bananas;
  });
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
