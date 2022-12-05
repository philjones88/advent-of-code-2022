import { readFileSync } from 'fs';
import { expect, test } from 'vitest';
import { parseInstructions, day5part1, day5part2, exampleStacks } from './day5';

test('instruction parsing', () => {
  const rawFile = readFileSync('day5/example.txt', 'utf-8');
  const rawFileParts = rawFile.split('\n\n');
  const result = parseInstructions(rawFileParts[1]);

  expect(result).toEqual([
    { amount: 1, from: 2, to: 1 },
    { amount: 3, from: 1, to: 3 },
    { amount: 2, from: 2, to: 1 },
    { amount: 1, from: 1, to: 2 },
  ]);
});

test('Day 5 Part 1 example', () => {
  const rawFile = readFileSync('day5/example.txt', 'utf-8');
  const rawFileParts = rawFile.split('\n\n');
  const instructions = parseInstructions(rawFileParts[1]);

  const result = day5part1(exampleStacks, instructions);

  expect(result).toBe('CMZ');
});

test('Day 5 Part 2 example', () => {
  const rawFile = readFileSync('day5/example.txt', 'utf-8');
  const rawFileParts = rawFile.split('\n\n');
  const instructions = parseInstructions(rawFileParts[1]);

  const result = day5part2(exampleStacks, instructions);

  expect(result).toBe('MCD');
});
