const Q = require('q');
const https = require('https');

function addEnvVar(key, value) {

}

function makeRequestToCircle(token, username, project, endpoint) {
  let url = `https://circleci.com/api/v1/project/${username}/${project}/${endpoint}?circle-token=${token}`;

}
