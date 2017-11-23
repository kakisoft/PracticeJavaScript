/*
## vuejs.org 
https://jp.vuejs.org/
（API）
https://jp.vuejs.org/v2/api/#グローバル-API
https://vuejs.org/v2/api/#Global-API
*/
var chunk02 = new Vue({
    el:'#myapp02',  //elは、「element」かな。
    data:{
        content2:"hello World"
    }
});

//==========================
//  表示制御(v-show、v-if)
//==========================
var chunk03 = new Vue({
    el:'#myapp03',
    data:{
        content3:"<h1>タグを含む場合</h1>"
    }
});

var chunk04 = new Vue({
   el:'#myapp04',
   data:{
        content:"showContent-Sample",
        showContent: true
   },
   methods:{
       visibleSwitch : function(){
           this.showContent = !this.showContent;
        }
   }
});

//==========================
//  クラス制御（v-class）
//==========================
var chunk05 = new Vue({
    el:'#myapp05',
    data:{
        content5:"class control sample1",
        myStyle05: 'red' //クラスを指定
    }
});

var chunk06 = new Vue({
    el:'#myapp06',
    data:{
        content6:"class control sample2",
        isRed: true,
        isBold: true
    },
    methods:{
        fontColorSwitch: function() {this.isRed = !this.isRed},
        boldSwitch: function() {this.isBold = !this.isBold}
    }
});

//==========================
//   ループ（v-repeat）
//==========================
var chunk07 = new Vue({
    el: '#myapp07',
    data: {
        d1: ['a', 'b'],
        d2: {k1: 'v1', k2: 'v2'},
        d3: [
            {name: 'yamada', score: 62},
            {name: 'sagawa', score: 84}
        ]
    }
});

//==========================
//  モデルの内容を表示（v-model）
//==========================
var chunk08 = new Vue({
    el: '#myapp08',
    data: {
        name: 'yamada', 
        isAdmin: true,
        phone: 'iphone',
        city: 'tokyo'
    }
});

//==========================
//       filters
//==========================
var chunk09 = new Vue({
    el:'#myapp09',
    data:{
        msg:'hello',
        price:7980
    }
});

var chunk10 = new Vue({
    el:'#myapp10',
    data:{
        keyword:'',
        users:[
            {name: 'tagawa', score: 81},
            {name: 'yamada', score: 92},
            {name: 'tom', score: 64}
        ]
    }
}); 

//==========================
//       Order by
//==========================

