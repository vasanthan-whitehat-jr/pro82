var mouseEvent = "emty";

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

color = "black";
width_of_line = 2;

function my_mousedown(e) {
color = document.getElementById("color").value;
width_of_line = document.getElementById("width_of_line").value;
radius = document.getElementById("radius").value;
mouseEvent = "mousedown";
}
canavas.addListner("mousemove",my_mousemove);
function my_mousemove(e){
current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
current_position_of_mouse_y = e.clientY - canvas.offsetTop;

if (mouseEvent == "mousedown"){
console.log("Current position ofn x and y coodinates")
console.log("x = " + current_position_of_mouse_x "y = " + current_position_of_mouse_y);
ctx.beginPath();
ctx.strokestyle = color;
ctx.lineWidth = width_of_line;
ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,radius,0,2*Math.PI)
}
}
canvas.addEventListner("mouseup",my_mouseup);
function my_mouseup(e){
mouseEvent = "mouseUP";
}
canvas.addEventListner("mouseleave",my_mouseleave);
function my_mouseleave(e){
mouseEvent = "mouseleave";
}
function clearArea(){
ctx.clearRect(0,0, ctx.canvas.width;ctx.canvas.height);
}