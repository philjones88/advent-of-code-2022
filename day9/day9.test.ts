import { readFileSync } from 'fs';
import { expect, test } from 'vitest';
import { day9 } from './day9';

test('Day 9 part 1 example', () => {
  const rawFile = readFileSync('day9/example.txt', 'utf-8');
  expect(day9(rawFile, 2)).toEqual(13);
});

test('Day 9 part 2 example', () => {
  const rawFile = readFileSync('day9/example2.txt', 'utf-8');
  expect(day9(rawFile, 10)).toEqual(36);
});