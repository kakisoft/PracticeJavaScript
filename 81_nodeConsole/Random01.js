function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

//   console.log(getRandomInt(3));
//   // expected output: 0, 1 or 2

//   console.log(getRandomInt(1));
//   // expected output: 0

//   console.log(Math.random());


//=============================================
//
//=============================================

// console.log(getRandomInt(1000));
// console.log(getRandomInt(1000));
// console.log(getRandomInt(1000));
// console.log(getRandomInt(1000));
// console.log(getRandomInt(1000));


//=============================================
//
//=============================================
var indexList = [];
const REQUIRED_NUMBER = 3;  // 8
const numOfPhrases = 10;    // 1000

for(var i=0; i<REQUIRED_NUMBER; i++ ){
    indexList.push(getRandomInt(numOfPhrases))
}

console.log(indexList);

//-------------------------
const PHRASE_LIST = 
[
    {"name_en":"art aged","name_jp": "アートエイジ"},
    {"name_en":"bar red","name_jp": "赤バー"},    
    {"name_en":"art ancient","name_jp": "アート古代"},
    {"name_en":"base nameless","name_jp": "基本名無し"},
    {"name_en":"art billowing","name_jp": "アートビリング"},
    {"name_en":"bird lively","name_jp": "活気のある鳥"},
    {"name_en":"art black","name_jp": "アートブラック"},
    {"name_en":"bird wild","name_jp": "野生の鳥"},
    {"name_en":"art bold","name_jp": "アートボールド"},
    {"name_en":"block sparkling","name_jp": "輝くブロック"},
    {"name_en":"boat proud","name_jp": "誇りに思うボート"},
    {"name_en":"art calm","name_jp": "落ち着いた"}
]

var selected_phase_list = [];
indexList.forEach(el => {
    selected_phase_list.push(PHRASE_LIST[el]);
});


console.log(selected_phase_list);


selected_phase_list.forEach(el => {
    var name_en = el["name_en"];
    var name_jp = el["name_jp"];

    console.log(name_en + ":" + name_jp);
});


