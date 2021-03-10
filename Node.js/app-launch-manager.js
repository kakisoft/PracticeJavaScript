/*
<command>
node app-launch-manager up
node app-launch-manager down

*/

///////////////////// SET YOUR ENVIRONMENT ////////////////////////////////////////////////////////
const MYAPP_DOCKER_01 = "C:\\kaki\\MY_APP\\application\\";
const MYAPP_DOCKER_02 = "C:\\kaki\\MY_APP\\application\\sub01\\";
const MYAPP_DOCKER_03 = "C:\\kaki\\MY_APP\\application\\sub02\\";
///////////////////////////////////////////////////////////////////////////////////////////////////

const DOCKER_FILE_NAME = "docker-compose.yml";

const UP_COMMAND   = "up";
const DOWN_COMMAND = "down";

let commandCategory;


//==========< Check argument >==========
if( process.argv.length <= 2){
    console.error('Argument error. This command requires an argument "up" or "down" ');
    process.exit(1);

}else{
    commandCategory = process.argv[2];

    if( commandCategory != UP_COMMAND && commandCategory != DOWN_COMMAND ){
        console.error('Argument error. This command requires an argument "up" or "down" ');
        process.exit(1);
    }
}

//==========< Execute >==========
const exec = require('child_process').exec
let callback;


switch (commandCategory) {
    case UP_COMMAND:
        executeUpCommand();
        break;
    case DOWN_COMMAND:
        executeDownCommand();
        break;
    default:
        break;
}


//---------------------------
//    docker-composer-up
//---------------------------
function executeUpCommand(){

    let command_01 = "docker-compose -f " + MYAPP_DOCKER_01 + DOCKER_FILE_NAME + " up -d --build";
    let command_02 = "docker-compose -f " + MYAPP_DOCKER_01 + DOCKER_FILE_NAME + " up -d --build";
    let command_03 = "docker-compose -f " + MYAPP_DOCKER_01 + DOCKER_FILE_NAME + " up -d --build";

    exec(command_01);
    exec(command_02);
    exec(command_03);

    console.log('"docker-composer-up" executed');
}


//---------------------------
//    docker-compose down
//---------------------------
function executeDownCommand(){
    exec("cd " + MYAPP_DOCKER_01 + " && docker-compose down");
    exec("cd " + MYAPP_DOCKER_02 + " && docker-compose down");
    exec("cd " + MYAPP_DOCKER_03 + " && docker-compose down");

    console.log('"docker-compose down" executed');
}

