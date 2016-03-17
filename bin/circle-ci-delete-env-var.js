#!/usr/bin/env node
'use strict';
const CircleCI = require('../index');
const program = require('commander');

program
  .arguments('<token> <username> <project> <key>')
  .action((token, username, project, key) => {
    let circleCI = new CircleCI({
      token,
      username,
      project
    });
    
    circleCI.deleteEnvVar(key);
  })
  .parse(process.argv);

