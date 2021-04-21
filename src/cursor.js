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
        this.simulation.canvas.addEventListener('mousemove', e=>this.place(e));
        this.simulation.canvas.addEventListener('mouseleave', ()=>this.mouseUp());
        this.simulation.canvas.addEventListener('mousedown', ()=>this.mouseDown());
        this.simulation.canvas.addEventListener('mouseup', ()=>this.mouseUp());

        this.simulation.canvas.addEventListener("touchstart", ()=>this.mouseDown(), false);
        this.simulation.canvas.addEventListener("touchend", ()=>this.mouseUp(), false);
        this.simulation.canvas.addEventListener("touchcancel", ()=>this.handleCancel(), false);
        this.simulation.canvas.addEventListener("touchleave", ()=>this.mouseUp, false);
        this.simulation.canvas.addEventListener("touchmove", e=>this.place(e), false);
    }

    handleCancel() {
        this.click=false
        this.aimed=undefined;
        this.x=-100;
        this.y=-100;
    }

    mouseDown() {
        this.click=true;
    }

    mouseUp() {
        this.click=false
        if(this.aimed && this.aimed.cursorCallback) {
            this.aimed.cursorCallback(this);
        }
        this.aimed=undefined;
        this.x=-100;
        this.y=-100;
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
    
    place(e) {
        e.preventDefault();
        var page = {};
        if(e.changedTouches) {
            page = {
                x: e.changedTouches[0].pageX,
                y: e.changedTouches[0].pageY
            };
        } else {
            page = {x:e.pageX,y: e.pageY};
        }

        console.log(page);
        this.x = page.x - this.simulation.rect.x;
        this.y = page.y - this.simulation.rect.y;

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