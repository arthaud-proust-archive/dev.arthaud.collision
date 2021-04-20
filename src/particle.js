const Mover = require('./mover');
const UTILS = require('./utils');
const { v4: uuidv1 } = require('uuid');

module.exports = class Particle {
    constructor(simulation, opts = {}) {
        this.simulation = simulation;
        this.ctx = this.simulation.context;
        
        this.uuid = uuidv1();
        this.mass = opts.mass ?? 10; // kilos
        this.density = opts.density ?? 1;
        this.color = opts.color ?? 'black';
        this.style = opts.style ?? 'fill';

        // hauteur et largeur (mètres)
        this.h = 
        this.w = this.mass * this.density;

        this.coords = new Mover(opts.coords ?? {
            vx:1,
            vy:1
        });
    }

    get v() { // valeur du vecteur vitesse
        return Math.sqrt(this.vx**2 + this.vy**2);
    }

    get a() { // valeur du vecteur accélération
        return Math.sqrt(this.ax**2 + this.ay**2);
    }

    get Ec() { // énegie cinétique
        return 1/2 * this.mass * this.v**2
    }

    update() {
        this.draw();
        this.checkWallCollision();
        // this.checkWallCollisionV2();
        this.checkParticleCollision();
        this.coords.update();
    }

    draw() {
        this.ctx[this.style+'Style'] = this.color;
        this.ctx.beginPath();
        this.ctx.arc(
            this.coords.x, // x
            this.coords.y, // y
            this.h,        // rayon
            0,             // angle de départ de l'ac
            2 * Math.PI    // angle de fin
        );
        this.ctx[this.style]();
        this.ctx.closePath();
    }

    checkParticleCollision() {
        // essai pour chaque particule
        for(let i=0; i<this.simulation.particlesUUIDs.length; i++) {
            let {mass, uuid, h,w,coords} = this.simulation.particles[this.simulation.particlesUUIDs[i]]; // coords de la particule
            if(this.uuid === uuid) continue;
            // d = sqrt( (Bx-Ax)² + (By-Ay)² )

            // dessin du vecteur distance
            if(this.simulation.showLines) {
                UTILS.drawVect(this.ctx, this.coords, coords, {color:'gray'})
            }
             
            if(this.simulation.showDirections) {
                UTILS.drawVect(this.ctx, this.coords, {
                    x: this.coords.x+this.coords.vx*30,
                    y: this.coords.y+this.coords.vy*30,
                }, {color:'black', width: 2})
            }


            // calcul des coordonnées du vecteur distance
            let dx = this.coords.x-coords.x;
            let dy = this.coords.y-coords.y;
            let d = Math.abs(Math.sqrt(dx**2 + dy**2))
            // si la distance séparant les deux points est inférieure ou égale au rayon des deux particules
            // i.e: elle se touchent

            const xVelocityDiff = this.coords.vx - coords.vx;
            const yVelocityDiff = this.coords.vy - coords.vy;
        
            const xDist = coords.x - this.coords.x;
            const yDist = coords.y - this.coords.y;

            if (d <= this.w+w && xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {
                const angle = -Math.atan2(coords.y - this.coords.y, coords.x - this.coords.x);


                const m1 = this.mass;
                const m2 = mass;
        
                // Velocity before equation
                const u1 = UTILS.rotate(this.coords.getSpeed, angle);
                const u2 = UTILS.rotate(coords.getSpeed, angle);
        
                
                // Velocity after 1d collision equation
                const v1 = { 
                    x: u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2), 
                    y: u1.y 
                };
                const v2 = { 
                    x: u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2), 
                    y: u2.y 
                };
                
        
                // Final velocity after rotating axis back to original location
                const vFinal1 = UTILS.rotate(v1, -angle);
                const vFinal2 = UTILS.rotate(v2, -angle);
        
                // Swap this.coords velocities for realistic bounce effect
                this.coords.speed({
                    x: vFinal1.x,
                    y: vFinal1.y
                });
        
                coords.speed({
                    x: vFinal2.x,
                    y: vFinal2.y
                });
                
            }
        }
    }

    checkWallCollision() {
        // collision avec les bords

        // en y, à droite
        if( Math.ceil(this.coords.y+this.h) > this.simulation.h) {
            this.coords.speed({
                x: this.coords.vx,
                y: -Math.abs(this.coords.vy)
            });
        }

        // en y à gauche
        if(Math.floor(this.coords.y-this.h) < 0) {
            this.coords.speed({
                x: this.coords.vx,
                y: Math.abs(this.coords.vy)
            });
        } 
        
        // en x, en bas
        if(Math.ceil(this.coords.x+this.w) > this.simulation.w) {
            this.coords.speed({
                x: -Math.abs(this.coords.vx),
                y: this.coords.vy
            });  
        }
        
        // en x, en haut
        if(Math.floor(this.coords.x-this.w) < 0 ) {
            this.coords.speed({
                x: Math.abs(this.coords.vx),
                y: this.coords.vy
            });
        }
    }
}