import { describe, it, expect } from 'vitest';
import type { Season, Week, Team, SeasonType, Down, Conference, Division } from '../src/types.js';

describe('Type exports', () => {
  it('should allow valid Season values', () => {
    const season: Season = 2023;
    expect(typeof season).toBe('number');
  });

  it('should allow valid Week values', () => {
    const week: Week = 5;
    expect(typeof week).toBe('number');
  });

  it('should allow valid Team values', () => {
    const team: Team = 'KC';
    expect(typeof team).toBe('string');
  });

  it('should allow valid SeasonType values', () => {
    const types: SeasonType[] = ['REG', 'POST', 'PRE'];
    expect(types).toHaveLength(3);
  });

  it('should allow valid Down values', () => {
    const downs: Down[] = [1, 2, 3, 4];
    expect(downs).toHaveLength(4);
  });

  it('should allow valid Conference values', () => {
    const conferences: Conference[] = ['AFC', 'NFC'];
    expect(conferences).toHaveLength(2);
  });

  it('should allow valid Division values', () => {
    const divisions: Division[] = ['East', 'West', 'North', 'South'];
    expect(divisions).toHaveLength(4);
  });
});
