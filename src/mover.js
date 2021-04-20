module.exports = class Mover {
    constructor(params={}) {
        this._defaultParams = {
            x:0,
            y:0,
            vx:0,
            vy:0,
            ax:0,
            ay:0,
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
        this.x += this.vx;
        this.y += this.vy;
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