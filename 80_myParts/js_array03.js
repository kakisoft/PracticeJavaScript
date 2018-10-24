function createInsertStatement(){
    var targetSyntaxElement = document.getElementById("target-syntax");
    var targetSyntaxContent = targetSyntaxElement.value;
    var targetSyntaxContentArray =  targetSyntaxContent.split(/\r?\n/g);
  
    targetSyntaxContentArray.forEach((lineUnitElement)=>{
      var linerContentArray = [];
      var linerContentArray = lineUnitElement.split(/\t/g);
  
      linerContentArray.forEach(function(cellUnitElement) {
  
      });
      console.log(cellUnitElement)  
    });
  }
  