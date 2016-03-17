'use strict';
const CircleCIRequest = require('./http/circle-ci-request');

module.exports = class CircleCI {
  constructor(config) {
    this.circleCIRequest = new CircleCIRequest(config);
  }
  
  addEnvVar(name, value) {
    this.circleCIRequest.makeRequest('POST', 'envvar', {
      name,
      value
    });
  }

  deleteEnvVar(name) {
    this.circleCIRequest.makeRequest('DELETE', `envvar/${name}`)
  }

  listEnvVar() {
    this.circleCIRequest.makeRequest('GET', 'envvar')
  }
};
