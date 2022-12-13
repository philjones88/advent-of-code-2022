import { readFileSync } from 'fs';
import { expect, test } from 'vitest';
import { day13part1, day13part2 } from './day13';

test('Day 13 part 1 example', () => {
  const rawFile = readFileSync('day13/example.txt', 'utf-8');
  expect(day13part1(rawFile)).toEqual(13);
});

test('Day 13 part 2 example', () => {
  const rawFile = readFileSync('day13/example.txt', 'utf-8');
  expect(day13part2(rawFile)).toEqual(140);
});