console.log('Loaded!');
var element = document.getElementById('maintext');
element.innerHTML='New value';
var img = document.getElementById('modi');
img.onclick=function(){
    img.style.marginLeft = '100px';
};