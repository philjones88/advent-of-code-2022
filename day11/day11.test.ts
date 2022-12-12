import { readFileSync } from 'fs';
import { expect, test } from 'vitest';
import { day11 } from './day11';

test('Day 11 part 1 example', () => {
  const rawFile = readFileSync('day11/example.txt', 'utf-8');
  expect(day11(rawFile, { numberOfRounds: 20, useComplexWorryFactor: false })).toEqual(10605);
});

test('Day 11 part 2 example', () => {
  const rawFile = readFileSync('day11/example.txt', 'utf-8');
  expect(day11(rawFile, { numberOfRounds: 10000, useComplexWorryFactor: true })).toEqual(2713310158);
});
