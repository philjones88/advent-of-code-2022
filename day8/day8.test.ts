import { readFileSync } from 'fs';
import { expect, test } from 'vitest';
import { day8part1, day8part2 } from './day8';

test('Day 8 part 1 example', () => {
  const rawFile = readFileSync('day8/example.txt', 'utf-8');
  expect(day8part1(rawFile)).toBe(21);
});

test('Day 8 part 2 example', () => {
  const rawFile = readFileSync('day8/example.txt', 'utf-8');
  expect(day8part2(rawFile)).toBe(8);
});
