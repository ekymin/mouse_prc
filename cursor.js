const PI2 = Math.PI * 2;

export class Cursor {
    constructor(r){
        this.radius = r;
        this.x = 0;
        this.y = 0;
        this.speed = 0.1;
        
        this.xlength = 0;
        this.ylength = 0;
    }

    draw(ctx){
        ctx.beginPath();
        //ctx.arc(this.x, this.y, this.radius, 0, PI2, true);
        ctx.ellipse(this.x, this.y, this.xlength, this.ylength, 0, 0, 2 * Math.PI);
        //ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle);
        ctx.scale(1, 1);
        ctx.fillStyle = 'green';
        ctx.fill();
        ctx.closePath();
    }

    animate(x,y){
        this.x += (x - this.x) * this.speed;
        this.y += (y - this.y) * this.speed;
        this.xlength = this.radius + (Math.abs(x - this.x) * 0.2);
        this.ylength = this.radius + (Math.abs(y - this.y) * 0.2);
        //console.log(Math.abs(x - this.x) * 0.01)
       
    }
}