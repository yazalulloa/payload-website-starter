import * as migration_20250825_230931 from './20250825_230931';

export const migrations = [
  {
    up: migration_20250825_230931.up,
    down: migration_20250825_230931.down,
    name: '20250825_230931'
  },
];
