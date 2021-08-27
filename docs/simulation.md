# Documentation simulation.js

## Créer une simulation
Arguments:
- OPTIONS: Voir paragraphe #Options

Exemples:  
```js
new Simulation(
    {...OPTIONS}
);
```
```js
new Simulation({
    x:10, // 10px depuis le bord haut
    y:30, // 30px depuis le bord gauche
    vx:0, // 0px par intervale t 
    vy:1  // 1px par intervale t
});
```


## Options 
- `showDirections` : Montre les vecteurs vitesse  
Type: Boolean  
Par défaut: `false`  
- `showLines` : Montre les lignes entre les particules  
Type: Boolean  
Par défaut: `false`  
- `height` : Hauteur de la simulation  
Type: Number  
Par défaut: `300`  
- `width` : Largeur de la simulation  
Type: Number  
Par défaut: `400`  
- `toSummon` : Nombre de particules à faire apparaître aléatoirement  
Type: Number  
Par défaut: `10`  
- `fps` : Fps de l'animation (encore en développement)  
Type: Number  
Par défaut: `40`  
- `particleOpts` : Options par défaut des particules  
Type: Array  
Par défaut: `{mass:5}`  
- `parent` : Élément DOM dans lequel sera ajouté la simulation  
Type: Element  
Par défaut: `document.body`  
- `background` : Couleur de fond de la simulation  
Type: Color  
Valeurs: hex | rgb | string  
Par défaut: `'black'`  
- `autoPlay` : Lance l'animation dès l'initialisation de l'animation  
Type: Boolean  
Par défaut: `true` 

# Méthodes

### `setFPS(Number fps)`
Définit le nombre de fps de l'animation (encore en voie de développement).

### `size(Number height, Number width)`
Définit la taille de la simulation (encore en voie de développement).

### `init()`
Initialise et démarre la simulation. Méthode à appeler avant de manipuler la simulation ou avant d'y ajouter des particules.

### `play()`
Joue l'animation de la simulation

### `pause()`
Arrête l'animation de la simulation

### `addParticle(Array opts)`
Ajoute une particule  
**Paramètre**:
- [Options de particules](https://github.com/arthaud-proust/collision/blob/master/docs/particle.md)  

**Exemple:**
```js
s.addParticle({
    coords: {
        y:40,
        x:10,
        ax:1
    }
})
```

### `removeParticle(Uuidv1 uuid)`
Supprime une particule  
**Paramètre**:
- uuid de la particule

**Exemple:**
```js
s.removeParticle('2eb9fe19-066d-401c-8ed1-1beca6d03af7')
```

### `addParticles(Array)`
Permet d'ajouter plusieurs particules.  
**Paramètre**:
- Un tableau de [options de particules](https://github.com/arthaud-proust/collision/blob/master/docs/particle.md)  
Optionnel, si non défini ce sont les paramètres par défaut des particules de la simulation qui seront utilisés (Simulation.particleOpts)

**Exemple:**
```js
const initialV= {
    x:0,
    y:2
};
let s = new Simulation({
    showLines:true,
    toSummon:0,
    fps: 60,
    background: 'white',
    particleOpts: {
        mass: 30
    }
});

s.init();

s.addParticles([
    {
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
    }
]);
```

# Propriétés

### `showDirections` Boolean
Doit-on afficher les vecteurs vitesse des particules?

### `showLines` Boolean
Doit-on afficher les lignes entre les particules?

### `h` Number
Hauteur de la simulation

### `w` Number
Largeur de la simulation

### `ratio` Number
Ratio largeur/hauteur de la simulation

### `toSummon` Number

### `fps` Number

### `particles` Array(Particles)
Particules de la simulation

### `particleOpts` [Particle => arg(opts)](https://github.com/arthaud-proust/collision/blob/master/docs/particle.md)
Options par défaut des particules de la simulation

### `bg` Color
Couleur de fond de la simulation

### `parent` Element
Element dans lequel est le canvas

### `canvas` Element 

### `context` CanvasRenderingContext2D

### `playing` Boolean
L'animation est-elle lancée?
<!-- ### `t` Number -->
<!-- Temps de la simulation -->

### `rect` DOMRect
Coordonnées dans la page du canvas de la simulation

### `cursor` [Cursor](https://github.com/arthaud-proust/collision/blob/master/docs/cursor.md)

### `particlesUUIDs` Array
Tableau contenant l'uuid de chaque particule de la simulation