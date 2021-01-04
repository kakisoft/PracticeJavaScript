
const exec = require('child_process').exec
let callback;


const DOCKER_PATH_01 = "C:\\kaki\\MY_PROJECT\\application\\";
const DOCKER_PATH_02 = "C:\\kaki\\MY_PROJECT\\application\\sub01\\";
const DOCKER_PATH_03 = "C:\\kaki\\MY_PROJECT\\application\\sub02\\";

const DOCKER_FILE_NAME = "docker-compose.yml";

// 「cd」と「execute を個別にしない」
exec("cd " + DOCKER_PATH_01 + " && docker-compose down");
exec("cd " + DOCKER_PATH_02 + " && docker-compose down");
exec("cd " + DOCKER_PATH_03 + " && docker-compose down");




