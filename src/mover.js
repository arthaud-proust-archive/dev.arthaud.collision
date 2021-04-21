module.exports = class Mover {
    constructor(params={}) {
        this._defaultParams = {
            x:0,
            y:0,
            vx:0,
            vy:0,
            ax:0,
            ay:0,
            friction: ()=>1
        };

        this._types = {
            position: '',
            speed: 'v',
            acceleration: 'a'
        }

        Object.entries(this._defaultParams).forEach(([key, value])=>{
            this[key] = params[key] ?? value;
        })

        // définition des setters/getters
        Object.entries(this._types).forEach(([type, prefix])=>{
            this[type] = function(coords={}) {
                if(coords.x !== undefined) this[prefix+'x'] = coords.x;
                if(coords.y !==undefined) this[prefix+'y'] = coords.y;
                return {
                    x: this[prefix+'x'],
                    y: this[prefix+'y']
                }
                //  || this[prefix+'x'];
                // this[prefix+'y'] = coords.y || this[prefix+'y'];
            }
        });
    }

    update() {
        this.vx = this.ax + this.friction() * this.vx;
        this.vy = this.ay + this.friction() * this.vy;

        // console.log(this.vx * this.friction());
        this.x += this.vx ;
        this.y += this.vy ;
    }
    get speedValue() {
        return Math.sqrt(this.vx**2 + this.vy**2)
    }

    get getSpeed() {
        return {x:this.vx, y:this.vy}
    }

    get nextPosition() {
        return {
            x: this.x + this.vx,
            y: this.y + this.vy,
        }
    }

    get nextSpeed() {
        return {
            x: this.vx + this.ax,
            y: this.vy + this.ay,
        }
    }
}