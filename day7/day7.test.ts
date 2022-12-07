import { readFileSync } from 'fs';
import { expect, test } from 'vitest';
import { day7part1 } from './day7';

test('Day 7 example 1', () => {
  const rawFile = readFileSync('day7/example.txt', 'utf-8');
  expect(day7part1(rawFile)).toEqual({ smallDirs: 95437, smallestDirToDelete: 24933642 });
});

test('Day 7 example 2', () => {
  const rawFile = readFileSync('day7/example2.txt', 'utf-8');
  expect(day7part1(rawFile)).toEqual({ smallDirs: 96178, smallestDirToDelete: 24933642 });
});
