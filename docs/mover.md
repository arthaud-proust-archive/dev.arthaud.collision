# Documentation mover.js

## Créer un mover
Arguments:
- OPTIONS: Voir paragraphe #Options

Exemples:  
```js
new Mover(
    {...OPTIONS}
);
```
```js
new Mover({
    x:10, // 10px depuis le bord haut
    y:30, // 30px depuis le bord gauche
    vx:0, // 0px par intervale t 
    vy:1  // 1px par intervale t
});
```

## Options 
- `x` : Coordonnée x  
Type: Number  
Par défaut: `0`  
- `y` : Coordonnée y  
Type: Number  
Par défaut: `0`  
- `vx` : Coordonnée x du vecteur vitesse  
Type: Number  
Par défaut: `0`  
- `vy` : Coordonnée y du vecteur vitesse  
Type: Number  
Par défaut: `0`  
- `ax` : Coordonnée x du vecteur accélération  
Type: Number  
Par défaut: `0`  
- `ay` : Coordonnée y du vecteur accélération  
Type: Number  
Par défaut: `0`  
- `friction` : Force de friction  
Type: function  
Par défaut: `()=>1`  

# Propriétés

### `speedValue` Number
Valeur du vecteur vitesse

### `getSpeed` Object
Coordonnées du vecteur vitesse

### `nextPosition` Object
Coordonnées {x,y} au prochain tick

### `nextSpeed` Object
Coordonnées du vecteur vitesse {x,y} au prochain tick

### `+ toutes les options` (dans #options)