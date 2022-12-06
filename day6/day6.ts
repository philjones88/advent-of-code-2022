const isUnique = (input: string[]): boolean => {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        return false;
      }
    }
  }
  return true;
};

export const day6 = (rawFile: string, startMarker: number): number => {
  let result = 0;
  let characters: string[] = [];
  for (let i = startMarker - 1; i < rawFile.length; i++) {
    characters = rawFile.slice(i + 1 - startMarker, i + 1).split('');
    if (isUnique(characters)) {
      result = i + 1;
      break;
    }
  }
  return result;
};
