var point = {x:0,y:0};
var max = {x:0,y:0};
function fillrandomcolor(){
    var canvas = document.getElementById("mycanvas");
    var pen = canvas.getContext("2d");
    pen.fillStyle=getrandomcolor();
    pen.fillRect(point.x*100,point.y*100,100,100);
    point.x = point.x + 1;
    if(point.x == Math.floor(canvas.clientWidth/100)){
        point.x = 0;
        point.y = point.y + 1;
    }
    if(point.y == Math.floor(canvas.clientHeight/100)){
        point.y = 0;
    }
}
function getrandomcolor(){
    return "#"+Math.floor(Math.random()*16777215).toString(16);
}