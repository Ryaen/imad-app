console.log('Loaded!');
var element = document.getElementById('maintext');
element.innerHTML='New value';
var img = document.getElementById('modi');
var marginLeft = 0;
function moveright(){
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick=function(){
   var interval = setInterval(moveright,100);
    };