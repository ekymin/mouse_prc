const PI2 = Math.PI * 2;

export class Cursor {
    constructor(r){
        this.radius = r;

        this.x = 0;
        this.y = 0;
        this.speed = 0.1;
    }

    draw(ctx){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, PI2, true);
        ctx.fillStyle = 'green';
        ctx.fill();
        ctx.closePath();
    }

    animate(x,y){
        this.x += (x - this.x) * this.speed;
        this.y += (y - this.y) * this.speed;
    }
}