function canNest(){
  var a1=[];
  var a2=[];
  var num1=parseInt(prompt("Enter the number of Element in First Array"));
  for(var i=0;i<num1;i++){
      a1[i]=parseInt(prompt(`Enter ${i+1} element of First Array`));
  }
  var num2=parseInt(prompt("Enter the number of Element in Second Array"));
  for(var i=0;i<num2;i++){
      a2[i]=parseInt(prompt(`Enter ${i+1} element of Second Array`));
  }
  for(var i=0;i<num1;i++){
      for(var j=i+1;j<num1;j++){
          if(a1[i]>a1[j]){
              t=a1[i];
              a1[i]=a1[j];
              a1[j]=t;
          }
      }
  }
  for(var i=0;i<num2;i++){
      for(var j=i+1;j<num2;j++){
          if(a2[i]>a2[j]){
              t=a2[i];
              a2[i]=a2[j];
              a2[j]=t;
          }
      }
  }
  if(a1[0]>a2[0]){
      document.write(`Can be Nested ${a1[0]>a2[0]}`);
  }
  else if(a1[num1-1]<a2[num2-1]){
      document.write(`Can be Nested ${a1[num1-1]<a2[num2-1]}`);
  }
  else{
      document.write("False");
  }


}
canNest();