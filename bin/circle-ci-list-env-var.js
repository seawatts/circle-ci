#!/usr/bin/env node
'use strict';
const CircleCI = require('../index');
const program = require('commander');

program
  .arguments('<token> <username> <project>')
  .action((token, username, project) => {
    let circleCI = new CircleCI({
      token,
      username,
      project
    });
    
    circleCI.listEnvVar();
  })
  .parse(process.argv);

