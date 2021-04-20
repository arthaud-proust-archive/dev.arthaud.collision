const UTILS = require('./utils');

module.exports = class Cursor {
    constructor(simulation, opts = []) {
        this.simulation = simulation;
        this.x=opts.x??-100;
        this.y=opts.y??-100;
        this.click = false;
        this.aimed = undefined;
        this.enabled = false;


    }

    enable() {
        this.enabled = true;
        this.simulation.canvas.addEventListener('mousemove', e=>this.set(e));
        this.simulation.canvas.addEventListener('mouseleave', e=>{
            this.mouseUp();
            this.x=-100;
            this.y=-100;
        });
        this.simulation.canvas.addEventListener('mousedown', e=>this.click=true);
        this.simulation.canvas.addEventListener('mouseup', ()=>this.mouseUp());
    }

    mouseUp() {
        this.click=false
        if(this.aimed && this.aimed.cursorCallback) {
            this.aimed.cursorCallback(this);
        }
        this.aimed=undefined;
    }

    get module() {
        return Math.sqrt(this.x**2 + this.y**2);
    }

    get coords() {
        return {
            x: this.x,
            y: this.y
        }
    }
    
    set(e) {
        this.x = e.pageX - this.simulation.rect.x;
        this.y = e.pageY - this.simulation.rect.y;
    }

    draw() {
        UTILS.drawCircle(this.simulation.context, this.coords, 5);

        if(this.aimed) {
            UTILS.drawVect(this.simulation.context, this.coords, this.aimed.coords, {
                color: 'white',
                width: 3
            });
        }
    }

    aim(particle) {
        this.aimed = particle
    }
}