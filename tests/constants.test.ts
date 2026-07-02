import { describe, it, expect } from 'vitest';
import {
  MIN_SEASON,
  MAX_REGULAR_SEASON_WEEK,
  MAX_PLAYOFF_WEEK,
  SEASON_TYPES,
  NFL_TEAMS,
  HISTORICAL_TEAMS,
  ALL_TEAMS,
} from '../src/constants.js';

describe('Constants', () => {
  describe('MIN_SEASON', () => {
    it('should be 1999', () => {
      expect(MIN_SEASON).toBe(1999);
    });
  });

  describe('MAX_REGULAR_SEASON_WEEK', () => {
    it('should be 18', () => {
      expect(MAX_REGULAR_SEASON_WEEK).toBe(18);
    });
  });

  describe('MAX_PLAYOFF_WEEK', () => {
    it('should be 22', () => {
      expect(MAX_PLAYOFF_WEEK).toBe(22);
    });
  });

  describe('SEASON_TYPES', () => {
    it('should contain REG, POST, PRE', () => {
      expect(SEASON_TYPES).toEqual(['REG', 'POST', 'PRE']);
    });

    it('should be readonly', () => {
      expect(Object.isFrozen(SEASON_TYPES)).toBe(false); // Array is not frozen but type is readonly
      expect(SEASON_TYPES).toHaveLength(3);
    });
  });

  describe('NFL_TEAMS', () => {
    it('should have 32 teams', () => {
      expect(NFL_TEAMS).toHaveLength(32);
    });

    it('should include all current teams', () => {
      expect(NFL_TEAMS).toContain('KC');
      expect(NFL_TEAMS).toContain('BUF');
      expect(NFL_TEAMS).toContain('SF');
      expect(NFL_TEAMS).toContain('PHI');
    });

    it('should not include historical teams', () => {
      expect(NFL_TEAMS).not.toContain('SD');
      expect(NFL_TEAMS).not.toContain('STL');
      expect(NFL_TEAMS).not.toContain('OAK');
    });
  });

  describe('HISTORICAL_TEAMS', () => {
    it('should include relocated teams', () => {
      expect(HISTORICAL_TEAMS).toContain('SD');  // Now LAC
      expect(HISTORICAL_TEAMS).toContain('STL'); // Now LA
      expect(HISTORICAL_TEAMS).toContain('OAK'); // Now LV
    });

    it('should have 3 historical teams', () => {
      expect(HISTORICAL_TEAMS).toHaveLength(3);
    });
  });

  describe('ALL_TEAMS', () => {
    it('should include both current and historical teams', () => {
      expect(ALL_TEAMS).toHaveLength(35); // 32 + 3
    });

    it('should include current teams', () => {
      expect(ALL_TEAMS).toContain('KC');
      expect(ALL_TEAMS).toContain('SF');
    });

    it('should include historical teams', () => {
      expect(ALL_TEAMS).toContain('SD');
      expect(ALL_TEAMS).toContain('OAK');
    });
  });
});
