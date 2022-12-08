const readInputIntoArray = (rawFile: string): number[][] => rawFile.split('\n').map((row) => row.trim().split('').map(Number));

export const day8part1 = (rawFile: string): number => {
  const treeMap = readInputIntoArray(rawFile);

  let visibleTrees = 0;

  const rowsLength = treeMap.length;
  const colsLength = treeMap[0].length;

  // Calculate the edge visible trees
  visibleTrees += (rowsLength - 1) * 2;
  visibleTrees += (colsLength - 1) * 2;

  for (let rowIdx = 1; rowIdx < rowsLength - 1; rowIdx++) {
    for (let colIdx = 1; colIdx < colsLength - 1; colIdx++) {
      const currentTree = treeMap[rowIdx][colIdx];

      let visibleNorth = true;
      let visibleEast = true;
      let visibleSouth = true;
      let visibleWest = true;

      for (let checkNorth = 0; checkNorth < rowIdx; checkNorth++) {
        if (currentTree <= treeMap[checkNorth][colIdx]) {
          visibleNorth = false;
          break;
        }
      }

      for (let checkEast = rowsLength - 1; checkEast > colIdx; checkEast--) {
        if (currentTree <= treeMap[rowIdx][checkEast]) {
          visibleEast = false;
          break;
        }
      }

      for (let checkSouth = colsLength - 1; checkSouth > rowIdx; checkSouth--) {
        if (currentTree <= treeMap[checkSouth][colIdx]) {
          visibleSouth = false;
          break;
        }
      }

      for (let checkWest = 0; checkWest < colIdx; checkWest++) {
        if (currentTree <= treeMap[rowIdx][checkWest]) {
          visibleWest = false;
          break;
        }
      }

      if (visibleNorth || visibleEast || visibleSouth || visibleWest) {
        visibleTrees++;
      }
    }
  }

  return visibleTrees;
};

export const day8part2 = (rawFile: string): number => {
  const treeMap = readInputIntoArray(rawFile);

  let mostScenicTreeScore = 0;

  const rowsLength = treeMap.length;
  const colsLength = treeMap[0].length;

  for (let rowIdx = 1; rowIdx < rowsLength - 1; rowIdx++) {
    for (let colIdx = 1; colIdx < colsLength - 1; colIdx++) {
      const currentTree = treeMap[rowIdx][colIdx];

      let currentTreesScenicScore: number[] = [];

      let count = 0;

      for (let checkNorth = rowIdx - 1; checkNorth >= 0; checkNorth--) {
        if (treeMap[checkNorth][colIdx] >= currentTree) {
          count++;
          break;
        }
        count++;
      }

      currentTreesScenicScore.push(count);
      count = 0;

      for (let checkEast = colIdx + 1; checkEast <= rowsLength - 1; checkEast++) {
        if (treeMap[rowIdx][checkEast] >= currentTree) {
          count++;
          break;
        }
        count++;
      }

      currentTreesScenicScore.push(count);
      count = 0;

      for (let checkSouth = rowIdx + 1; checkSouth <= colsLength - 1; checkSouth++) {
        if (treeMap[checkSouth][colIdx] >= currentTree) {
          count++;
          break;
        }
        count++;
      }

      currentTreesScenicScore.push(count);
      count = 0;

      for (let checkWest = colIdx - 1; checkWest >= 0; checkWest--) {
        if (treeMap[rowIdx][checkWest] >= currentTree) {
          count++;
          break;
        }
        count++;
      }

      currentTreesScenicScore.push(count);

      const calculatedScenicScore = currentTreesScenicScore.reduce((acc, curr) => acc * curr, 1);
      if (calculatedScenicScore > mostScenicTreeScore) {
        mostScenicTreeScore = calculatedScenicScore;
      }
    }
  }

  return mostScenicTreeScore;
};
