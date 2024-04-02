import { Cursor } from "./cursor.js";

class App{
    constructor(){
        this.canvas = document.createElement('canvas'); //create canvas
        document.body.appendChild(this.canvas); //append canvas last of body
        this.ctx = this.canvas.getContext('2d'); //ctx = context 2d rendering
        this.pixelRatio = (window.devicePixelRatio > 1) ? 2 : 1;

        this.radius = 20; // cursor radius
        this.cursor = new Cursor(this.radius);
        this.mouseX = 0;
        this.mouseY = 0;

        window.addEventListener('resize', this.resize.bind(this), false); //addEventListener(type, listener, options)
        this.resize();    
        
        window.addEventListener("mousemove",this.mousemove.bind(this), false);
        this.animate();
    }

    resize(){
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * this.pixelRatio;
        this.canvas.height = this.stageHeight * this.pixelRatio;
        this.ctx.scale(this.pixelRatio, this.pixelRatio);
    }

    // ver02 24.04.02
    mousemove(e){
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;
    }

/*  //ver01 24.04.02
    mousemove(e){
        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
        //console.log("corsur", e.clientX)
        this.cursor.animate(e.clientX, e.clientY);
        this.cursor.draw(this.ctx);
    }
*/
   animate(e){
        window.requestAnimationFrame(this.animate.bind(this));
        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
        this.cursor.animate(this.mouseX , this.mouseY);
        this.cursor.draw(this.ctx);
   }


}

window.onload =() => {
    new App();
}