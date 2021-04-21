# Documentation particle.js

## Créer une particule
Arguments:
- [Simulation](https://github.com/arthaud-proust/collision/blob/master/docs/simulation.md)  
- OPTIONS: Voir paragraphe #Options

Exemple:  
```js
new Particle(
    Simulation simulation, 
    {...OPTIONS}
);
```

## Options 
- `mass`  
Type: Number  
Par défaut: `10`  
- `density`  
Type: Number  
Par défaut: `1`
- `color`  
Type: Color  
Valeurs: hex | rgb | string  
Par défaut: `'black'`
- `style`  
Type: String    
Valeurs: 'fill' | 'stroke'  
Par défaut: `'fill'`
- `draggable`  
Type: Boolean  
Par défaut: `false`
- `coords`  
Type: [Mover => arg(opts)](https://github.com/arthaud-proust/collision/blob/master/docs/mover.md)   
Par défaut: `{ vx:0, vy:0 }`


# Méthodes

### `cursorCallback(Cursor cursor)`
Fonction qui sera éxécutée par le curseur après un drag'n'drop

### `draw()`
Dessine la particule dans la simulation

### `checkParticleCollision()`
Vérifie si une collision a lieu avec une autre particule de la simulation

### `checkWallCollision()`
Vérifie si une collision a lieu avec une bordure de la simulation

# Propriétés

### `uuid` String
Identifiant unique universel de la particule

### `simulation` Simulation
Simulation dans laquelle est la particule

### `ctx` CanvasRenderingContext2D
Contexte du canvas de la simulation (raccourci de `this.simulation.context`)

### `mass` Number
Masse de la particule

### `density` Number
Densité

### `color` Color

### `style` 'fill' | 'stroke'

### `draggable` Boolean

### `h` Number
Hauteur

### `w` Number
Largeur

### `coords` [Mover](https://github.com/arthaud-proust/collision/blob/master/docs/mover.md)

### `v` Number
Valeur du vecteur vitesse de la particule

### `a` Number
Valeur du vecteur accélération de la particule

### `Ec` Number
Valeur de l'énergie cinétique de la particule

### `hover` Boolean
La particule est-elle survolée?

### `grab` Boolean
Est-on en train de cliquer-glisser depuis la particule?
