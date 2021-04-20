const TEMPLATES = [
    function(opts={}) {
        let s= new Simulation({
            // width: innerWidth,
            // height: innerHeight,
            parent: document.getElementById('watcher'),
            toSummon:20,
            fps: 70,
            background: "white",
            particleOpts: {
                style: 'stroke',
                color: "#888",
                mass:35
            },
            ...opts
            // autoPlay: false
        });
        s.init();
        return s;
    },

    
    function(opts={}) {
        const initialV= {
            x:0,
            y:2
        };
        let s = new Simulation({
            showDirections:true,
            parent: document.getElementById('watcher'),
            toSummon:0,
            fps: 60,
            particleOpts: {
                color: "red",
                mass: 50
            },
            ...opts
        });
        s.init();
        
        s.addParticles([{
            color: "#888",
            coords: {
                y:100,
                x:100,
                vy: -initialV.y,
            }
        },
        {
            color: "#eee",
            coords: {
                y:s.h-100,
                x:100,
                vy: initialV.y,
            }
        },
        {
            color: "#ccc",
            coords: {
                y:100,
                x:200,
                vy: -initialV.y,
            }
        },
        {
            color: "#aaa",
            coords: {
                y:s.h-100,
                x:210,
                vy: initialV.y,
            }
        }]);

        return s;
    },


    function(opts={}) {
        const initialV= {
            x:0,
            y:2
        };
        let s = new Simulation({
            debug:false,
            parent: document.getElementById('watcher'),
            toSummon:0,
            fps: 60,
            background: 'white',
            particleOpts: {
                // style: 'stroke',
                mass: 30
            },
            ...opts
        });
        s.init();
        
        s.addParticles([{
            color: "#ccc",
            coords: {
                y:(s.h+1)/2,
                x:s.w/4,
                vx: initialV.y,
            }
        },
        {
            color: "#888",
            coords: {
                y:(s.h-1)/2,
                x:3*s.w/4,
                vx: -initialV.y,
            }
        }]);

        return s;
    },



    function(opts={}) {
        const initialV= {
            x:0,
            y:2
        };
        let s = new Simulation({
            debug:false,
            parent: document.getElementById('watcher'),
            toSummon:0,
            fps: 60,
            background: 'white',
            particleOpts: {
                color: "#888",
                mass: 30
            },
            ...opts
        });
        s.init();
        
        s.addParticles([{
            coords: {
                y:s.h/2,
                x:s.w/4,
                vx: initialV.y,
            }
        },
        {
            coords: {
                y:s.h/2,
                x:s.w/2,
                // vx: -initialV.y,
            }
        },
        {
            coords: {
                y:s.h/2,
                x:3*s.w/4,
                // vx: -initialV.y,
            }
        }]);

        return s;
    },


    function(opts={}) {
        const initialV= {
            x:0,
            y:2
        };
        let s = new Simulation({
            showLines:true,
            parent: document.getElementById('watcher'),
            toSummon:0,
            fps: 60,
            background: 'white',
            particleOpts: {
                // style: 'stroke',
                mass: 30
            },
            ...opts
        });
        s.init();
        
        s.addParticles([{
            color: "#ccc",
            coords: {
                y:(s.h+1)/2,
                x:s.w/4,
                vx: initialV.y,
            }
        },
        {
            color: "#888",
            coords: {
                y:(s.h-1)/2,
                x:3*s.w/4,
                vx: -initialV.y,
            }
        },
        {
            color: "#888",
            coords: {
                y:(s.h-1)/2,
                x:3*s.w/4,
                vx: -initialV.y,
            }
        }]);

        return s;
    },

    
    function(opts={}) {
        let s= new Simulation({
            // width: innerWidth,
            // height: innerHeight,
            parent: document.getElementById('watcher'),
            toSummon:20,
            fps: 70,
            background: "white",
            showLines:true,
            particleOpts: {
                style: 'stroke',
                color: "#888",
                mass:35
            },
            ...opts
            // autoPlay: false
        });
        s.init();
        return s;
    },


    function(opts={}) {
        let s= new Simulation({
            showLines: true,
            parent: document.getElementById('watcher'),
            toSummon:40,
            fps: 70,
            background: "white",
            particleOpts: {
                style:'stroke',
                color: "#888",
                mass:10
            },
            ...opts
            // autoPlay: false
        });
        s.init();
        return s;
    },

    
    function(opts={}) {
        let s= new Simulation({
            // showLines: true,
            parent: document.getElementById('watcher'),
            toSummon:40,
            fps: 70,
            background: "white",
            particleOpts: {
                color: "#888",
                mass:5
            },
            ...opts
        });
        s.init();
        return s;
    },


    function(opts={}) {
        let s= new Simulation({
            width: 300*254/127,
            height: 300,
            // showLines: true,
            // showDirections: true,
            parent: document.getElementById('watcher'),
            toSummon:0,
            fps: 70,
            background: "green",
            particleOpts: {
                color: "#888",
                mass:15
            },
            ...opts
        });
        s.init();
        s.cursor.enable();

        const friction = ()=>0.986
        s.addParticle({
            color: "white",
            draggable:true,
            coords: {
                x:s.w/5,
                y:s.h/2,
                vx:20,
                vy:0.1,
                friction
            }
        });


        const randomPick = function(array1, array2) {
            let r = Math.round(Math.random());
            let toShift = r===1?array1:array2;
            let other = r===1?array2:array1;
            if(toShift.length>0) {
                return toShift.shift()
            } else if(other.length>0) {
                return other.shift();
            }
        }
        let red = Array(7).fill('red');
        let orange = Array(7).fill('orange');
        let n = 0;
        for (let i=0; i<5; i++) { // i -> 0 à 4

            for(let k=0; k<=i; k++) { // k -> 0à0, puis de 0à1, puis de 0à2 ... puis de 0à4
                s.addParticle({
                    color: n==4?"black":randomPick(red, orange),
                    coords: {
                        x: 3*s.w/5 + i*30, // s.w -> largeur du cadre
                        y: s.h/2 + k*30 - 15 * i,
                        friction
                    }
                });
                n++;
            }
        }
        console.log(n);

        return s;
    },

];