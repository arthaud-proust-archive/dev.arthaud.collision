const Simulation = require('./simulation');
const TEMPLATES = require('./templates');
var simulations = [];
// s.init();
// addEventListener('resize', () => s.size())

const playBtn = document.getElementById('play');
const pauseBtn = document.getElementById('pause');


playBtn.addEventListener('click', ()=>{
    simulations.forEach(s=>s.play())
});
pauseBtn.addEventListener('click', ()=> {
    simulations.forEach(s=>s.pause())
});

simulations.push(TEMPLATES[0]())
simulations.push(TEMPLATES[1]())
simulations.push(TEMPLATES[2]())
simulations.push(TEMPLATES[3]())
simulations.push(TEMPLATES[4]())
simulations.push(TEMPLATES[5]())
simulations.push(TEMPLATES[6]())
simulations.push(TEMPLATES[7]())

console.log(simulations);