import fs from 'fs';
import parse from '../src/parse.js';

const genDiff = (filepath1, filepath2) => {
  const file1 = fs.readFileSync(filepath1);
  const file2 = fs.readFileSync(filepath2);

  const obj1 = parse(file1);
  const obj2 = parse(file2);
  const obj3 = {...obj1, ...obj2}
  const keys = Object.keys(obj3).sort();
  const spaces = '  ';

  //console.log(keys);
  const result = keys.map((item) => {
    if (Object.hasOwn(obj1, item) && !Object.hasOwn(obj2, item)) return `${spaces}- ${item}: ${obj1[item]}`;
    if (!Object.hasOwn(obj1, item) && Object.hasOwn(obj2, item)) return `${spaces}+ ${item}: ${obj2[item]}`;
    if (Object.hasOwn(obj1, item) && Object.hasOwn(obj2, item) && obj1[item] !== obj2[item]) {
      return `${spaces}- ${item}: ${obj1[item]}\n${spaces}+ ${item}: ${obj2[item]}`;
    } else {
      return `${spaces}  ${item}: ${obj1[item]}`
    }
  });

  return `{\n${result.join('\n')}\n}`;

};

export default genDiff;