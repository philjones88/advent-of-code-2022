import { readFileSync } from 'fs';
import { expect, test } from 'vitest';
import { day12part1, day12part2 } from './day12';

test('Day 12 part 1 example', () => {
  const rawFile = readFileSync('day12/example.txt', 'utf-8');
  expect(day12part1(rawFile)).toEqual(31);
});

test('Day 12 part 2 example', () => {
  const rawFile = readFileSync('day12/example.txt', 'utf-8');
  expect(day12part2(rawFile)).toEqual(29);
});
