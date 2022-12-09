import { readFileSync } from 'fs';
import { day9 } from './day9';

const rawFile = readFileSync('day9/input.txt', 'utf-8');

console.log('PART 1 = ' + day9(rawFile, 2));
console.log('PART 2 = ' + day9(rawFile, 10));
