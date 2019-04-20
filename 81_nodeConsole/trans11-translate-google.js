///////////////////////////////////////////////////////////
// translate-google
// https://www.npmjs.com/package/translate-google
// 
// npm i translate-google
///////////////////////////////////////////////////////////

const translate = require('translate-google')
//---------------------------------------------------------------


const tranObj01 = 
[
    'art'
    ,'band'
    ,'bar'
    ,'base'
    ,'bird'
    ,'block'
    ,'boat'
    ,'bonus'
    ,'bread'
    ,'breeze'
    ,'brook'
    ,'bush'
    ,'butterfly'
    ,'cake'
    ,'cell'
    ,'cherry'
    ,'cloud'
    ,'credit'
    ,'darkness'
    ,'dawn'
    ,'dew'
    ,'disk'
    ,'dream'
    ,'dust'
    ,'feather'
    ,'field'
    ,'fire'
    ,'firefly'
    ,'flower'
    ,'fog'
    ,'forest'
    ,'frog'
    ,'frost'
    ,'glade'
    ,'glitter'
    ,'grass'
    ,'hall'
    ,'hat'
    ,'haze'
    ,'heart'
    ,'hill'
    ,'king'
    ,'lab'
    ,'lake'
    ,'leaf'
    ,'limit'
    ,'math'
    ,'meadow'
    ,'mode'
    ,'moon'
    ,'morning'
    ,'mountain'
    ,'mouse'
    ,'mud'
    ,'night'
    ,'paper'
    ,'pine'
    ,'poetry'
    ,'pond'
    ,'queen'
    ,'rain'
    ,'recipe'
    ,'resonance'
    ,'rice'
    ,'river'
    ,'salad'
    ,'scene'
    ,'sea'
    ,'shadow'
    ,'shape'
    ,'silence'
    ,'sky'
    ,'smoke'
    ,'snow'
    ,'snowflake'
    ,'sound'
    ,'star'
    ,'sun'
    ,'sun'
    ,'sunset'
    ,'surf'
    ,'term'
    ,'thunder'
    ,'tooth'
    ,'tree'
    ,'truth'
    ,'union'
    ,'unit'
    ,'violet'
    ,'voice'
    ,'water'
    ,'waterfall'
    ,'wave'
    ,'wildflower'
    ,'wind'
    ,'wood'    
]

//==============================================================================
const tranObj02 = 
[
    'aged'
    ,'ancient'
    ,'autumn'
    ,'billowing'
    ,'bitter'
    ,'black'
    ,'blue'
    ,'bold'
    ,'broad'
    ,'broken'
    ,'calm'
    ,'cold'
    ,'cool'
    ,'crimson'
    ,'curly'
    ,'damp'
    ,'dark'
    ,'dawn'
    ,'delicate'
    ,'divine'
    ,'dry'
    ,'empty'
    ,'falling'
    ,'fancy'
    ,'flat'
    ,'floral'
    ,'fragrant'
    ,'frosty'
    ,'gentle'
    ,'green'
    ,'hidden'
    ,'holy'
    ,'icy'
    ,'jolly'
    ,'late'
    ,'lingering'
    ,'little'
    ,'lively'
    ,'long'
    ,'lucky'
    ,'misty'
    ,'morning'
    ,'muddy'
    ,'mute'
    ,'nameless'
    ,'noisy'
    ,'odd'
    ,'old'
    ,'orange'
    ,'patient'
    ,'plain'
    ,'polished'
    ,'proud'
    ,'purple'
    ,'quiet'
    ,'rapid'
    ,'raspy'
    ,'red'
    ,'restless'
    ,'rough'
    ,'round'
    ,'royal'
    ,'shiny'
    ,'shrill'
    ,'shy'
    ,'silent'
    ,'small'
    ,'snowy'
    ,'soft'
    ,'solitary'
    ,'sparkling'
    ,'spring'
    ,'square'
    ,'steep'
    ,'still'
    ,'summer'
    ,'super'
    ,'sweet'
    ,'throbbing'
    ,'tight'
    ,'tiny'
    ,'twilight'
    ,'wandering'
    ,'weathered'
    ,'white'
    ,'wild'
    ,'winter'
    ,'wispy'
    ,'withered'
    ,'yellow'
    ,'young'
]


const noun = tranObj01[0];

var wordList = [];
tranObj02.forEach(el => {
    wordList.push(noun + ' ' + el)
});



const fs = require("fs");
const eol = require('os').EOL;
const TARGET_FILE_NAME = "translate_01.csv";


// console.log(wordList)
translate(wordList, {from: 'en', to: 'ja'}).then(res => {
    // console.log(res)
    // res.forEach(el => {
    //     console.log(el)
    // });

    for(var i=0; i<res.length; i++){
        writeEl = '"' + wordList[i] + '"' + "," + '"' + res[i] + '"' + eol;
        fs.appendFile(TARGET_FILE_NAME, writeEl, 'utf-8',  (err) => {});
        console.log(res[i])
    }
}).catch(err => {
    console.error(err)
})

//==============================================================================


