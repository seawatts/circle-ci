'use strict';
const requestPromise = require('request-promise');
const chalk = require('chalk');

module.exports = class CircleCIRequest {
  constructor(config) {
    this.baseURL = `https://circleci.com/api/v1/project/${config.username}/${config.project}`;
    this.token = config.token;
  }

  makeRequest(httpMethod, circleCIEndpoint, body) {
    let options = {
      method: httpMethod,
      uri: `${this.baseURL}/${circleCIEndpoint}`,
      qs: {
        'circle-token': this.token
      },
      body,
      json: true
    };

    const promise = requestPromise(options);
    promise.then((response) => process.stdout.write(chalk.green(JSON.stringify(response))));
    promise.catch((error) => process.stdout.write(chalk.bold.red(error)));
  }
};
