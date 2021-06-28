// let dt = new Date(2020, 1, 1, )

// //2017年1月15日 22時30分
// new Date(2017,0,15,22,30)

//===================================
//      30分間隔で時間を表示
//===================================
const TIME_INTERVAL = 30;

let batchStartTime = new Date('2020/1/1 00:00:00');
let batchEndTime   = new Date('2020/1/1 23:59:59');

i = batchStartTime;
while (i < batchEndTime) {
    console.log(
                    i.getHours().toString().padStart(2, '0')
                  + ':'
                  + i.getMinutes().toString().padStart(2, '0')
             )
    i.setMinutes(i.getMinutes() + TIME_INTERVAL);
}
