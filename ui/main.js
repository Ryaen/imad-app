console.log('Loaded!');
/*var element = document.getElementById('maintext');
element.innerHTML='New value';
var img = document.getElementById('modi');
var marginLeft = 0;
function moveright(){
    marginLeft = marginLeft + 5;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick=function(){
   var interval = setInterval(moveright,200);
    };*/
var button = document.getElementById('counter');
button.onclick = function(){

    //create a request to counter endpoint
    var request = new XMLHttpRequest();
    
    //cature the response and store it in a variable
    request.onreadystatechange = function(){
        if(request.readystate === XMLHttpRequest.DONE){
            if(request.status === 200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML=counter.toString();
            }
            
        }
    };
    
    //make a request
    request.open('GET','http://shubhgiri345.imad.hasura-app.io/counter',true);
    request.send(null);
 };
 //submit name
 var nameinput = document.getElementById("name");
 var name = nameinput.value;
 var submit = document.getElementById("submit_bin");
 submit.onclick = function(){
  var names = ['name1','name2','name3','name4'];
var list = '';
for(var i=0;i<names.length;i++){
 list += '<li>' + names[i] + '</li>';
}
 var ul = document.getElementById("namelist");
 ul.innerHTML = list;
 };
 };