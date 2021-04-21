const Particle = require('./particle');
const Cursor = require('./cursor');
// const SupList = require('./supList');
const UTILS = require('./utils');
const { v1: uuidv1 } = require('uuid');

export default class Simulation {
    constructor(opts = {}) {
        this.showDirections = opts.showDirections ?? false;
        this.showLines = opts.showLines ?? false;
        this.h = opts.height ?? 300;
        this.w = opts.width ?? 400;
        this.ratio = this.w/this.h; // utilisé pour le redimensionnement
        this.toSummon = opts.toSummon ?? 10;
        this.fps = opts.fps ?? 40;
        this.particles = {};
        this.particleOpts = opts.particleOpts ?? {
            mass: 5
        };
        this.parent = opts.parent ?? document.body;
        this.bg = opts.background ?? '#fefefe';

        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext("2d");
        this.canvas.classList.add("simulation");
        this.canvas.dataset.uuid = uuidv1();
        this.canvas.style.background = this.bg;
        this.parent.appendChild(this.canvas);

        this.playing = opts.autoPlay ?? true;
        this.t = 0;

        this.rect = this.canvas.getBoundingClientRect();
        this.cursor = new Cursor(this);

        if(this.w > document.body.offsetWidth) {
            this.w = this.canvas.parentElement.offsetWidth * 0.9;
            this.h = this.w/this.ratio;
        }
    }

    get particlesUUIDs() {
        return Object.keys(this.particles)
    }

    setFPS(fps) {
        this.fps = fps;
    }

    size(height=this.h, width=this.w) {
        this.h = height
        this.w = width
        this.init();
    }

    anim() {
        // this.t +=1;
        this.context.clearRect(0, 0, this.w, this.h);
        for(let i=0; i<this.particlesUUIDs.length; i++) {
            this.particles[this.particlesUUIDs[i]].update(this.t);
        }
        if(!this.playing) return;
        this.animFrame = requestAnimationFrame(()=>this.anim());
        // setTimeout(()=>this.anim(), 1000/this.fps);
        this.cursor.draw();
    }   

    init() {
        cancelAnimationFrame(this.animFrame);
        this.canvas.height = this.h;
        this.canvas.width = this.w;
        this.particles = {};
        for(let i=0; i<this.toSummon; i++) {
            this.addParticle();
        }

        this.anim();
    }

    addParticles(particles) {
        for(let i=0; i<particles.length; i++) {
            this.addParticle(particles[i]);
        }
    }
    
    addParticle(opts={}) {
        let p = new Particle(this, {...this.particleOpts, ...opts});

        if(!opts.coords) {        
            p.coords.position({
                x: UTILS.randomInt(p.h, this.w-p.h),
                y: UTILS.randomInt(p.h, this.h-p.h),
            });

            p.coords.speed({
                x: UTILS.randomInt(-2,2),
                y: UTILS.randomInt(-2, 2),
            });
        }

        this.particles[p.uuid] = p;
    }

    removeParticle(uuid) {
        if(this.particles[uuid]) {
            delete this.particles[uuid];
        }
    }

    pause() { this.playing = false; }
    play() { 
        if(this.playing) return;
        this.playing = true; 
        this.anim() 
    }

}