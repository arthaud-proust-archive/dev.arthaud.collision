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

];