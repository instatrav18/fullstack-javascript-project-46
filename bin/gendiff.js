#!/usr/bin/env node

import { program } from 'commander';
import genDiff from '../src/gendiff.js';

program
  .version('0.0.1')
  .helpOption('-h, --help','output usage information')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2) => console.log(genDiff(filepath1, filepath2)))
program.parse(process.argv)
