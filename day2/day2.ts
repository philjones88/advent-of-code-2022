// A / X === Rock 1
// B / Y === Paper 2
// C / Z === Scissors 3

// A > C = Rock beats scissors
// C > Y = Scissors beats paper
// Y > A = Paper beats rock

// 0 = lose
// 3 = draw
// 6 = win
const calculateScore = (input: string): number => {
  switch (input) {
    case 'A X': // Rock + Rock = draw
      return 1 + 3;
    case 'B X': // Paper + Rock = lose
      return 1 + 0;
    case 'C X': // Scissors + Rock = win
      return 1 + 6;
    case 'A Y': // Rock + Paper = win
      return 2 + 6;
    case 'B Y': // Paper + Paper = draw
      return 2 + 3;
    case 'C Y': // Scissors + Paper = lose
      return 2 + 0;
    case 'A Z': // Rock + Scissors = lose
      return 3 + 0;
    case 'B Z': // Paper + Scissors = win
      return 3 + 6;
    case 'C Z': // Scissors + Scissors = draw
      return 3 + 3;
    default:
      throw new Error('Unknown input!');
  }
};

export const day2part1 = (rawFile: string): number => {
  const inputLines = rawFile.trim().split('\n');

  let totalScore = 0;

  for (const inputLine of inputLines) {
    const cleanInputLine = inputLine.toUpperCase().trim();
    totalScore += calculateScore(cleanInputLine);
  }

  return totalScore;
};

// X = lose
// Y = draw
// Z = win

export const day2part2 = (rawFile: string): number => {
  const inputLines = rawFile.trim().split('\n');

  let totalScore = 0;

  for (const inputLine of inputLines) {
    const cleanInputLine = inputLine.toUpperCase().trim();

    switch (cleanInputLine) {
      case 'A X': // Rock and lose = scissors
        totalScore += calculateScore('A Z');
        break;
      case 'A Y': // Rock and draw = rock
        totalScore += calculateScore('A X');
        break;
      case 'A Z': // Rock and win = paper
        totalScore += calculateScore('A Y');
        break;
      case 'B X': // Paper and lose = rock
        totalScore += calculateScore('B X');
        break;
      case 'B Y': // Paper and draw = paper
        totalScore += calculateScore('B Y');
        break;
      case 'B Z': // Paper and win = scissors
        totalScore += calculateScore('B Z');
        break;
      case 'C X': // Scissors and lose = paper
        totalScore += calculateScore('C Y');
        break;
      case 'C Y': // Scissors and draw = scissors
        totalScore += calculateScore('C Z');
        break;
      case 'C Z': // Scissors and win = rock
        totalScore += calculateScore('C X');
        break;
    }
  }

  return totalScore;
};
