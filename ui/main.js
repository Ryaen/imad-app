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

    //make a request tocounter endpoint
    
    
    //cature the response and store it in a variable
    
    
    //render the variable in the correct span
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML=counter.toString();
    
};