function createInsertStatement(){
    var targetSyntaxElement = document.getElementById("target-syntax");
    var targetSyntaxContent = targetSyntaxElement.value;
    var targetSyntaxContentArray =  targetSyntaxContent.split(/\r?\n/g);
  
    targetSyntaxContentArray.forEach((lineUnitElement)=>{
      var linerContentArray = [];
      var linerContentArray = lineUnitElement.split(/\t/g);
  
      
      linerContentArray.forEach(function(cellUnitElement) {
        console.log(cellUnitElement)  
      });


    });
  }
  
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 【 配列で指定した特定の文字を大文字化 】 

unitArray = unitArray.map(
    function(el){
      if(RESERVED_WORD_LIST.indexOf(el) >= 0){ 
        return el.toLowerCase();
        // return el.toUpperCase();
      }else{
        return el;
      }
    }
  );

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 大文字・小文字を問わずに

  //-----< ToUppr or ToLower Reserved Words >-----
  if(resultType == RESULT_TYPE.TO_LOWER){
    unitArray = unitArray.map(function(el){
        if(RESERVED_WORD_LIST.indexOf(el.toUpperCase()) >= 0){ 
          return el.toLowerCase();
        }else{
          return el;
        }
      }
    );

  }else{
    unitArray = unitArray.map(function(el){
        if(RESERVED_WORD_LIST.indexOf(el.toUpperCase()) >= 0){ 
          return el.toUpperCase();
        }else{
          return el;
        }
      }
    );    
  }

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

