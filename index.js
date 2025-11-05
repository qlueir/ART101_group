var MoveTrigger=0;

var myUpArrow = document.getElementById("UpArrowObject");
var myDownArrow = document.getElementById("DownArrowObject");
var myLeftArrow = document.getElementById("LeftArrowObject");
var myRightArrow = document.getElementById("RightArrowObject");

myUpArrow.onmousedown=function(){MoveTrigger=1; movefunction(this)};
myDownArrow.onmousedown=function(){MoveTrigger=2; movefunction(this)};
myLeftArrow.onmousedown=function(){MoveTrigger=3; movefunction(this)};
myRightArrow.onmousedown=function(){MoveTrigger=4; movefunction(this)};

myUpArrow.onmouseup=function(){ MoveTrigger=0; movefunction(this)};
myDownArrow.onmouseup=function(){MoveTrigger=0; movefunction(this)};
myLeftArrow.onmouseup=function(){ MoveTrigger=0; movefunction(this)};
myRightArrow.onmouseup=function(){ MoveTrigger=0; movefunction(this)};

var myvertnumber=0;
var myhoriznumber=0;
var mypic = document.getElementById("sonic");

function movefunction(){
if(MoveTrigger==0){
}
if(MoveTrigger==1){
setTimeout(movefunction,20);
myvertnumber=myvertnumber-1;
mypic.style.top=myvertnumber;
if (myvertnumber<=-10){
myvertnumber=myvertnumber+1;
MoveTrigger=0;
}
}mypic.style.top=myvertnumber;
if (myvertnumber>=700){
myvertnumber=myvertnumber-1;
MoveTrigger=0;
}}
if(MoveTrigger==3){
setTimeout(movefunction,20);
myhoriznumber=myhoriznumber-1;
mypic.style.left=myhoriznumber;

if (myhoriznumber<=-10){
myhoriznumber=myhoriznumber+1;
MoveTrigger=0;
}}

if(MoveTrigger==4){
setTimeout(movefunction,20);
myhoriznumber=myhoriznumber+1;
mypic.style.left=myhoriznumber;

if (myhoriznumber>=800){
myhoriznumber=myhoriznumber-1;
MoveTrigger=0;
}}
