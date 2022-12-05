import { readFileSync } from 'fs';
import { day5part1, day5part2, inputStacks, parseInstructions } from './day5';

const rawFile = readFileSync('day5/input.txt', 'utf-8');

const instructions = parseInstructions(rawFile.split('\n\n')[1]);

console.log('PART 1 = ' + day5part1(inputStacks, instructions));

console.log('PART 2 = ' + day5part2(inputStacks, instructions));
