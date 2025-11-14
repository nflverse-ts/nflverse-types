# @nflverse/types Setup Instructions

This document provides step-by-step instructions for setting up and publishing the @nflverse/types package.

## Package Overview

**Location**: `../nflverse-types-package/` (ready to copy to new repo)

**Purpose**: Foundation package containing shared TypeScript types and constants for the entire nflverse TypeScript ecosystem.

**Bundle Size**: ~0 KB for type imports, ~1 KB for constants (minified)

## What's Included

### Types (`src/types.ts`)
- `Season` - NFL season year
- `Week` - Week number (1-22)
- `SeasonType` - 'REG' | 'POST' | 'PRE'
- `Team` - Team abbreviation string
- `DateString` - ISO date string (YYYY-MM-DD)
- `Down` - 1 | 2 | 3 | 4
- `Conference` - 'AFC' | 'NFC'
- `Division` - 'East' | 'West' | 'North' | 'South'
- `Position` - All NFL positions (QB, RB, WR, etc.)

### Constants (`src/constants.ts`)
- `MIN_SEASON` = 1999
- `MAX_REGULAR_SEASON_WEEK` = 18
- `MAX_PLAYOFF_WEEK` = 22
- `SEASON_TYPES` = ['REG', 'POST', 'PRE']
- `NFL_TEAMS` - Array of 32 current teams
- `HISTORICAL_TEAMS` - ['SD', 'STL', 'OAK']
- `ALL_TEAMS` - Combined current + historical

### Tests
- `tests/types.test.ts` - Type validation tests
- `tests/constants.test.ts` - Constants validation tests

## Setup Steps

### 1. Create GitHub Repository

```bash
# Create new repo on GitHub (via web interface or gh CLI)
gh repo create nflverse-ts/nflverse-types --public --description "Shared TypeScript types for nflverse ecosystem"
```

### 2. Copy Package Files

```bash
# From the nflverse-types-package directory
cd ../nflverse-types-package
cp -r . /path/to/nflverse-types/

# Or if you cloned the repo first:
git clone git@github.com:nflverse-ts/nflverse-types.git
cp -r ../nflverse-types-package/* nflverse-types/
cd nflverse-types
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Build and Test

```bash
# Type check
npm run typecheck

# Run tests
npm test

# Build
npm run build

# Verify build output
ls -lh dist/
```

Expected output:
```
dist/
├── index.js      (~1 KB)
├── index.cjs     (~1 KB)
├── index.d.ts    (~500 bytes)
└── index.d.cts   (~500 bytes)
```

### 5. Verify Package

```bash
# Check package contents
npm pack --dry-run

# Should show:
# - dist/
# - README.md
# - package.json
```

### 6. Publish to npm

```bash
# Login to npm (if not already)
npm login

# Publish (first release)
npm publish --access public

# Verify published
npm view @nflverse/types
```

### 7. Test Installation

```bash
# In a test project
npm install @nflverse/types

# Test import
node -e "import('@nflverse/types').then(m => console.log(m.MIN_SEASON))"
# Should output: 1999
```

## Usage Examples

### Type-Only Imports (Zero Bundle Cost)

```typescript
import type { Season, Week, Team } from '@nflverse/types';

function loadData(season: Season, week: Week): void {
  console.log(`Loading data for ${season} week ${week}`);
}
```

### Constant Imports

```typescript
import { MIN_SEASON, NFL_TEAMS } from '@nflverse/types';

console.log(`Data available from ${MIN_SEASON}`);
console.log(`${NFL_TEAMS.length} teams in the league`);
```

### Mixed Imports

```typescript
import type { Season, Team } from '@nflverse/types';
import { MIN_SEASON, NFL_TEAMS } from '@nflverse/types';

function isValidSeason(season: Season): boolean {
  return season >= MIN_SEASON;
}

function isValidTeam(team: Team): boolean {
  return NFL_TEAMS.includes(team as any);
}
```

## Next Steps (After Publishing)

1. **Update nflreadts** to depend on `@nflverse/types`
   - Add dependency: `npm install @nflverse/types`
   - Update imports to use `@nflverse/types` instead of local types
   - Re-export types from nflreadts for backward compatibility

2. **Document in nflreadts README**
   - Note that types come from `@nflverse/types`
   - Encourage type-only imports for zero bundle cost

3. **Future Packages**
   - `@nflverse/nflfastr` will depend on `@nflverse/types`
   - `@nflverse/nflseedr` will depend on `@nflverse/types`
   - etc.

## Versioning Strategy

- **0.1.0**: Initial release (current)
- **0.x.x**: Pre-1.0 releases (breaking changes allowed)
- **1.0.0**: Stable release (semantic versioning from here)

### Breaking Changes
- Adding a new team to `NFL_TEAMS`: **Minor** (non-breaking)
- Changing `MIN_SEASON` value: **Major** (breaking)
- Removing a type: **Major** (breaking)
- Renaming a type: **Major** (breaking)

## Troubleshooting

### Build Fails
```bash
# Clean and rebuild
npm run clean
npm install
npm run build
```

### Tests Fail
```bash
# Check TypeScript compilation
npm run typecheck

# Run tests with verbose output
npm test -- --reporter=verbose
```

### Publish Fails (403)
```bash
# Verify npm login
npm whoami

# Check package name availability
npm view @nflverse/types

# If name is taken, update package.json name
```

## Files Structure

```
@nflverse/types/
├── src/
│   ├── types.ts          # Type definitions
│   ├── constants.ts      # Constants
│   └── index.ts          # Main entry (re-exports)
├── tests/
│   ├── types.test.ts     # Type tests
│   └── constants.test.ts # Constants tests
├── dist/                 # Build output (generated)
├── package.json          # Package config
├── tsconfig.json         # TypeScript config
├── tsup.config.ts        # Build config
├── vitest.config.ts      # Test config
├── .eslintrc.json        # Linting config
├── .prettierrc           # Formatting config
├── .gitignore            # Git ignore
├── .npmignore            # npm ignore
├── README.md             # Package documentation
└── SETUP-INSTRUCTIONS.md # This file
```

## Support

For issues or questions:
- GitHub Issues: https://github.com/nflverse-ts/nflverse-types/issues
- nflverse Discord: (link TBD)

---

**Ready to proceed!** Follow steps 1-7 above to get @nflverse/types published.
