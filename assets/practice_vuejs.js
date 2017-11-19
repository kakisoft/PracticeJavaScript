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