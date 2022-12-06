import { readFileSync } from 'fs';
import { day6 } from './day6';

const rawFile = readFileSync('day6/input.txt', 'utf-8');

console.log('PART 1 = ' + day6(rawFile.trim(), 4));

console.log('PART 2 = ' + day6(rawFile.trim(), 14));
