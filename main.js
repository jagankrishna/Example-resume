function newpage() {
  window.open('resume.html','_self')
}

function loadjson(file,callback){
  var nim=new XMLHttpRequest();
  nim.overrideMimeType("application/json");
  nim.open("GET",file,true);
  nim.onreadystatechange=function() {
  if (nim.readyState===4 & nim.status=="200") {
    callback(nim.responseText);
  }

  }
  nim.send();
}

loadJSON("resources/resume.json",function(text)){
  var data =JSON.parse(text);
  console.log(data);
}

var main=document.getElementsById('mainDiv');
var left=document.getElementById('leftDiv');
var right=document.getElementById('rightDiv');
