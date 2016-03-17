#!/usr/bin/env node
'use strict';
const program = require('commander');
// import chalk from 'chalk';
const projectVersion = require('../package.json').version;

program
  .version(projectVersion)
  .command('add-env-var', 'Add a key value pair to the specified circle.ci project')
  .command('delete-env-var', 'Removes a key value pair to the specified circle.ci project')
  .command('list-env-var', 'Lists all the environment variables for the specified circle.ci project')
  .parse(process.argv);
