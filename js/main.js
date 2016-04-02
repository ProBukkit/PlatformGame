require(['objects/paddle.js'], function (Paddle) {
    var Paddle = require('objects/paddle.js');
});
var canvas = document.getElementById("platCanvas");
var ctx = canvas.getContext("2d");
(function() {

        window.addEventListener('resize', resizeCanvas, false);
        
        function resizeCanvas() {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                paddleWidth = canvas.width/5;
                paddleHeight = canvas.height/50;
                paddleX = (canvas.width-paddleWidth)/2;
        }
        resizeCanvas();
})();

var ballRadius = 10;
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var paddleHeight = canvas.height/50;
var paddleWidth = canvas.width/5;
var paddleX = (canvas.width-paddleWidth)/2;

var paddle = new Paddle(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
}

/**
var turnedAround = false;
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
**/

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    paddle.draw();
    /**
    drawPaddle();
    
    if(!turnedAround && (paddleX+paddleWidth+(canvas.width/500)) < canvas.width){
        paddleX = paddleX+(canvas.width/500);
    } else {
        turnedAround = true;
        if(paddleX-(canvas.width/500) > 0){
        paddleX = paddleX-(canvas.width/500);
        } else {
            turnedAround = false;
        }
    }
    **/
    
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }
    
    x += dx;
    y += dy;
}

setInterval(draw, 10);