import {addMedalToRank} from '../../src/utils/commonFunctions';
import {expect, describe, it} from '@jest/globals';

describe('Common function tests', () => {
  it('should return 🥇 when rank is 1', () => {
    expect(addMedalToRank(1)).toEqual('🥇');
  });
  it('should return 🥈 when rank is 2', () => {
    expect(addMedalToRank(2)).toEqual('🥈');
  });
  it('should return 🥉 when rank is 3', () => {
    expect(addMedalToRank(3)).toEqual('🥉');
  });
});
