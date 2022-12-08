import { readFileSync } from 'fs';
import { day7part1 } from './day7';

const rawFile = readFileSync('day7/input.txt', 'utf-8');

const result = day7part1(rawFile);
console.log('PART 1 = ' + result.smallDirs);
console.log('PART 2 = ' + result.smallestDirToDelete);
