# @nflverse/types

> Shared TypeScript types and constants for the nflverse ecosystem

[![npm version](https://badge.fury.io/js/%40nflverse%2Ftypes.svg)](https://www.npmjs.com/package/@nflverse/types)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Overview

`@nflverse/types` provides the foundational TypeScript types and constants used across all nflverse TypeScript packages. This package ensures type consistency and enables optimal tree-shaking across the ecosystem.

## Features

- **Zero Runtime Cost**: Pure TypeScript types (0 bytes in JavaScript bundles)
- **Type Safety**: Strongly typed NFL domain concepts
- **Constants**: Canonical NFL data constants
- **Tree-Shakeable**: Only bundle what you use
- **Single Source of Truth**: All nflverse packages reference these types

## Installation

```bash
npm install @nflverse/types
```

## Usage

### Type Imports (Recommended)

```typescript
// Type-only imports (zero runtime cost)
import type { Season, Week, Team, SeasonType } from '@nflverse/types';

function getSeasonData(season: Season, week: Week): void {
  // Your code here
}
```

### Constants

```typescript
// Import constants (minimal runtime cost)
import { MIN_SEASON, NFL_TEAMS, SEASON_TYPES } from '@nflverse/types';

console.log(`NFL data available from ${MIN_SEASON}`);
console.log(`Current teams: ${NFL_TEAMS.length}`);
```

## Available Types

### Core Types

- `Season` - NFL season year (e.g., 2023)
- `Week` - Week number (1-22)
- `Team` - Team abbreviation (e.g., 'KC', 'BUF')
- `SeasonType` - Season phase: 'REG' | 'POST' | 'PRE'
- `DateString` - ISO date string (YYYY-MM-DD)

### Constants

- `MIN_SEASON` - Earliest available NFL season (1999)
- `NFL_TEAMS` - Array of current NFL team abbreviations
- `HISTORICAL_TEAMS` - Array of historical team abbreviations
- `SEASON_TYPES` - Valid season types
- `MAX_REGULAR_SEASON_WEEK` - Maximum regular season week (18)
- `MAX_PLAYOFF_WEEK` - Maximum playoff week (22)

## Ecosystem Packages

This package is used by:

- [`@nflverse/nflreadts`](https://www.npmjs.com/package/@nflverse/nflreadts) - Data loading
- `@nflverse/nflfastr` - Play-by-play analysis (coming soon)
- `@nflverse/nflseedr` - Playoff seeding simulations (coming soon)
- `@nflverse/nfl4th` - 4th down decision models (coming soon)
- `@nflverse/complete` - Umbrella package (coming soon)

## Bundle Size

- **Types**: 0 KB (removed at compile time)
- **Constants**: ~1 KB minified

## Development

```bash
# Install dependencies
npm install

# Run tests
npm test

# Build
npm run build

# Type check
npm run typecheck
```

## Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## License

MIT © Riel St. Amand