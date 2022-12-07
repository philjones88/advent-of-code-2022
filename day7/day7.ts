export const day7part1 = (rawFile: string): { smallDirs: number; smallestDirToDelete: number } => {
  const commands = rawFile.split('\n').map((c) => c.trim());

  let cwd: string[] = [];

  const directories = new Map<string, number>([['', 0]]);

  for (const command of commands) {
    if (command.startsWith('$')) {
      if (command === '$ cd /') {
        cwd = [''];
        continue;
      }

      if (command === '$ cd ..') {
        cwd.pop();
        continue;
      }

      if (command.startsWith('$ cd ')) {
        cwd.push('/' + command.split(' ').reverse()[0]);
        continue;
      }

      if (command === '$ ls') {
        continue;
      }
    }

    // we can ignore `dir _` lines
    if (command.startsWith('dir ')) {
      continue;
    }

    const fileCommand = command.split(' ');
    // iterate down tree updating sizes
    let cwdPathBuilder = '';
    for (const cwdPath of cwd) {
      cwdPathBuilder += cwdPath;
      if (directories.has(cwdPathBuilder)) {
        directories.set(cwdPathBuilder, (directories.get(cwdPathBuilder) || 0) + +fileCommand[0]);
      } else {
        directories.set(cwdPathBuilder, +fileCommand[0]);
      }
    }
  }

  console.log(directories);

  let smallDirs = 0;

  for (const directory of directories) {
    if (directory[1] < 100000) {
      smallDirs += directory[1];
    }
  }

  let smallestDirToDelete = 0;

  const totalDiskSize = 70000000 - (directories.get('') || 0);
  const targetDiskSize = 30000000;

  let directorySizes: number[] = [];

  directories.forEach((d) => directorySizes.push(d));

  directorySizes = directorySizes.sort((a, b) => a - b);

  for (const size of directorySizes) {
    if (totalDiskSize + size > targetDiskSize) {
      smallestDirToDelete = size;
      break;
    }
  }

  return { smallDirs, smallestDirToDelete };
};
