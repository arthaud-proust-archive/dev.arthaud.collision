# Documentation particle.js

## Créer une particule
Arguments:
- [Simulation]()  
- OPTIONS: Voir paragraphe #Options

Exemple:  
```js
new Particle(
    Simulation:simulation, 
    {...OPTIONS}
);

```

## Options 
- `mass`  
Type: Number  
Défaut: 10  
- `density`  
Type: Number  
Défaut: 1
- `color`  
Type: Color  
Valeurs: hex | rgb | string  
Défaut: 'black'
- `style`  
Type: String    
Valeurs: 'fill' | 'stroke'  
Défaut: 'fill'
- `draggable`  
Type: Boolean  
Défaut: false
- `coords`  
Type: [CoordsObject]()   
Défaut: { vx:0, vy:0 }
