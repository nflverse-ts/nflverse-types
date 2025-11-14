/**
 * NFL data constants
 * @module constants
 */

import type { SeasonType, Team } from './types.js';

/**
 * Minimum valid NFL season (modern era)
 * Data availability varies by endpoint, but most data starts from 1999
 */
export const MIN_SEASON = 1999;

/**
 * Maximum regular season week (expanded to 18 weeks in 2021)
 */
export const MAX_REGULAR_SEASON_WEEK = 18;

/**
 * Maximum playoff week
 * - Week 19: Wild Card
 * - Week 20: Divisional
 * - Week 21: Conference Championships
 * - Week 22: Super Bowl
 */
export const MAX_PLAYOFF_WEEK = 22;

/**
 * Valid season types
 */
export const SEASON_TYPES: readonly SeasonType[] = ['REG', 'POST', 'PRE'] as const;

/**
 * Current NFL team abbreviations (as of 2024 season)
 * Standard abbreviations used across nflverse ecosystem
 */
export const NFL_TEAMS: readonly Team[] = [
  // AFC East
  'BUF', // Buffalo Bills
  'MIA', // Miami Dolphins
  'NE',  // New England Patriots
  'NYJ', // New York Jets

  // AFC North
  'BAL', // Baltimore Ravens
  'CIN', // Cincinnati Bengals
  'CLE', // Cleveland Browns
  'PIT', // Pittsburgh Steelers

  // AFC South
  'HOU', // Houston Texans
  'IND', // Indianapolis Colts
  'JAX', // Jacksonville Jaguars
  'TEN', // Tennessee Titans

  // AFC West
  'DEN', // Denver Broncos
  'KC',  // Kansas City Chiefs
  'LV',  // Las Vegas Raiders
  'LAC', // Los Angeles Chargers

  // NFC East
  'DAL', // Dallas Cowboys
  'NYG', // New York Giants
  'PHI', // Philadelphia Eagles
  'WAS', // Washington Commanders

  // NFC North
  'CHI', // Chicago Bears
  'DET', // Detroit Lions
  'GB',  // Green Bay Packers
  'MIN', // Minnesota Vikings

  // NFC South
  'ATL', // Atlanta Falcons
  'CAR', // Carolina Panthers
  'NO',  // New Orleans Saints
  'TB',  // Tampa Bay Buccaneers

  // NFC West
  'ARI', // Arizona Cardinals
  'LA',  // Los Angeles Rams
  'SF',  // San Francisco 49ers
  'SEA', // Seattle Seahawks
] as const;

/**
 * Historical team abbreviations (relocated or renamed teams)
 * These teams no longer use these abbreviations but appear in historical data
 */
export const HISTORICAL_TEAMS: readonly string[] = [
  'SD',  // San Diego Chargers (now LAC - Los Angeles Chargers)
  'STL', // St. Louis Rams (now LA - Los Angeles Rams)
  'OAK', // Oakland Raiders (now LV - Las Vegas Raiders)
] as const;

/**
 * All valid team abbreviations (current + historical)
 */
export const ALL_TEAMS: readonly string[] = [...NFL_TEAMS, ...HISTORICAL_TEAMS] as const;
