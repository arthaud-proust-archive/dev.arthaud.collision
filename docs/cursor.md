# Documentation cursor.js

## Créer un curseur
Arguments:
- [Simulation](https://github.com/arthaud-proust/collision/blob/master/docs/simulation.md)
- OPTIONS: Voir paragraphe #Options

Exemples:  
```js
new Cursor(
    Simulation simulation
    {...OPTIONS}
);
```
```js
new Cursor(simulation, {
    enabled: true // active le curseur pour cette simulation
})
```


## Options 
- `x` : Coordonnée x du curseur  
Type: Number  
Par défaut: `-100`
- `y` : Coordonnée y du curseur  
Type: Number  
Par défaut: `-100`  
- `enabled` : Le curseur est-il actif?  
Type: Boolean  
Par défaut: `false`  

# Méthodes

### `enable()`
Active le curseur pour cette simulation

### `draw()`
Dessine le curseur et le lien éventuel (aim) avec une particule  

### `aim(Particle particle)`
Crée un lien avec une particule (par exemple pour tirer)

### `place(TouchEvent|MoveEvent e)`

# Propriétés

### `simulation` [Simulation](https://github.com/arthaud-proust/collision/blob/master/docs/simulation.md)

### `x` Number
Position x du curseur

### `y` Number
Position y du curseur

### `click` Boolean

### `aimed` undefined | [Particle](https://github.com/arthaud-proust/collision/blob/master/docs/particle.md)

### `enabled` Boolean

### `module` Number
Module des coordonnées du curseur

### `coords` Object
Coordonnées du curseur