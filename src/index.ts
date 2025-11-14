/**
 * @nflverse/types - Shared TypeScript types and constants for the nflverse ecosystem
 *
 * This package provides the foundational types and constants used across all
 * nflverse TypeScript packages, ensuring type consistency and optimal tree-shaking.
 *
 * @packageDocumentation
 */

// Export all types
export type {
  Season,
  Week,
  SeasonType,
  Team,
  DateString,
  Down,
  Conference,
  Division,
  Position,
} from './types.js';

// Export all constants
export {
  MIN_SEASON,
  MAX_REGULAR_SEASON_WEEK,
  MAX_PLAYOFF_WEEK,
  SEASON_TYPES,
  NFL_TEAMS,
  HISTORICAL_TEAMS,
  ALL_TEAMS,
} from './constants.js';
