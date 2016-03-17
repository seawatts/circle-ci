#!/usr/bin/env node
'use strict';
const CircleCI = require('../index');
const program = require('commander');

program
  .arguments('<token> <username> <project> <key> <value>')
  .action((token, username, project, key, value) => {
    let circleCI = new CircleCI({
      token,
      username,
      project
    });
    
    circleCI.addEnvVar(key, value);
  })
  .parse(process.argv);

