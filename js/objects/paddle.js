class Paddle {
    constructor(height, width) {
        this.ctx = ctx, this.x = x, this.y = y, this.w = w, this.h = h;
            this.turnedAround = false;
    }
    
    draw(){
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.w, this.h);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    
        if(!turnedAround && (this.x+this.w+(canvas.width/500)) < canvas.width){
            this.x = this.x+(canvas.width/500);
        } else {
            this.turnedAround = true;
            if(this.x-(canvas.width/500) > 0){
                this.x = this.x-(canvas.width/500);
            } else {
                this.turnedAround = false;
            }
        }
    }
}