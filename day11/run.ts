import { readFileSync } from 'fs';
import { day11 } from './day11';

const rawFile = readFileSync('day11/input.txt', 'utf-8');

console.log('PART 1 = ' + day11(rawFile, { numberOfRounds: 20, useComplexWorryFactor: false }));
console.log('PART 1 = ' + day11(rawFile, { numberOfRounds: 10000, useComplexWorryFactor: true }));
