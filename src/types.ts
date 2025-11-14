/**
 * Core NFL data types
 * @module types
 */

/**
 * NFL Season year
 * Valid seasons typically start from 1999 (modern NFL era)
 *
 * @example
 * const season: Season = 2023;
 */
export type Season = number;

/**
 * NFL Week number
 * - Regular season: 1-18
 * - Playoffs: 19-22 (Wild Card, Divisional, Conference, Super Bowl)
 *
 * @example
 * const week: Week = 5; // Week 5 of regular season
 */
export type Week = number;

/**
 * NFL Season phase
 * - REG: Regular season
 * - POST: Postseason (playoffs)
 * - PRE: Preseason
 *
 * @example
 * const type: SeasonType = 'REG';
 */
export type SeasonType = 'REG' | 'POST' | 'PRE';

/**
 * NFL Team abbreviation
 * Standard 2-3 character team codes
 *
 * @example
 * const team: Team = 'KC'; // Kansas City Chiefs
 */
export type Team = string;

/**
 * Date string in ISO format (YYYY-MM-DD)
 *
 * @example
 * const date: DateString = '2023-09-07';
 */
export type DateString = string;

/**
 * Down number in football (1st, 2nd, 3rd, or 4th down)
 *
 * @example
 * const down: Down = 3; // 3rd down
 */
export type Down = 1 | 2 | 3 | 4;

/**
 * NFL Conference
 * - AFC: American Football Conference
 * - NFC: National Football Conference
 *
 * @example
 * const conf: Conference = 'AFC';
 */
export type Conference = 'AFC' | 'NFC';

/**
 * NFL Division name
 *
 * @example
 * const div: Division = 'West';
 */
export type Division = 'East' | 'West' | 'North' | 'South';

/**
 * Player position abbreviation
 * Covers offensive, defensive, and special teams positions
 *
 * @example
 * const pos: Position = 'QB'; // Quarterback
 */
export type Position =
  // Offense
  | 'QB'  // Quarterback
  | 'RB'  // Running Back
  | 'FB'  // Fullback
  | 'WR'  // Wide Receiver
  | 'TE'  // Tight End
  | 'OL'  // Offensive Line
  | 'OT'  // Offensive Tackle
  | 'OG'  // Offensive Guard
  | 'C'   // Center
  // Defense
  | 'DL'  // Defensive Line
  | 'DE'  // Defensive End
  | 'DT'  // Defensive Tackle
  | 'NT'  // Nose Tackle
  | 'LB'  // Linebacker
  | 'ILB' // Inside Linebacker
  | 'OLB' // Outside Linebacker
  | 'MLB' // Middle Linebacker
  | 'DB'  // Defensive Back
  | 'CB'  // Cornerback
  | 'S'   // Safety
  | 'SS'  // Strong Safety
  | 'FS'  // Free Safety
  // Special Teams
  | 'K'   // Kicker
  | 'P'   // Punter
  | 'LS'; // Long Snapper
