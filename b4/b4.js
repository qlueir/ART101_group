
$("#mirror").click(function(){
 
 $("#mirror").append("<img width=3000  src='images/b4 pt2.jpg'>");
})

$("#arrow").animate ({top: '11px'}); ({bottom: '20px'})

var elem = document.getElementById("demo");
  var useMe = ["right", "down", "left", "up"];
  var interval;

  function arrowmove() {
  var i = 0;
    elem.className = useMe[i];
    interval = setInterval(function(){ 
            if(i < 4){
            i = i + 1;
            elem.className = useMe[i];
            }
            else{
                clearInterval(interval);
            }
        }, 1000);
}