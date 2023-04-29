function lan(){
  l=document.myf.language.value;
  if(l==1){
        window.open("index.html","_self");
      }
      else if(l==2){
        window.open("bangla.html","_self");
      }  
}



function lan2(){
  l=document.myf.language.value;
  if(l==2){
        window.open("index.html","_self");
      }
      else if(l==1){
        window.open("bangla.html","_self");
      }  
}


var myVar = setInterval(myTimer, 0);

function myTimer() {
  var d = new Date();
  var t = d.toDateString();
  document.getElementById("demo").innerHTML =t;
}


  /*var d = new Date();
  var t = d.toDateString();
  document.getElementById("demo").innerHTML = t;*/
