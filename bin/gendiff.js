#!/usr/bin/env node

import { program } from 'commander';
import fs from 'fs';
import parse from '../src/parse.js';

program
  .version('0.0.1')
  .helpOption('-h, --help','output usage information')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2) => {
    const file1 = fs.readFileSync(filepath1);
    const file2 = fs.readFileSync(filepath2);

    const obj1 = parse(file1);
    const obj2 = parse(file2);

    //console.log(process.cwd());
    //console.log(obj2);
  })
program.parse(process.argv)
