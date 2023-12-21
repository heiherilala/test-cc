# fit Complexité d'un algorithme

Calculer la complexité d'un algorithme est un moyen de mesurer sa performance. Il existe deux types de complexité :

- la complexité spatiale : quantifie l'utilisation de la mémoire
- la complexité temporelle : quantifie la vitesse d'exécution.

## La complexité temporelle

Le calcul de la complexité temporelle d'un algorithme a pour but de comparer l'efficacité des algorithmes qui résolvent un même problème. Dans une situation donnée, cela permet d'établir lequel des algorithmes disponibles est le plus optimal.

Calculer la complexité en temps revient à compter le nombre d'opérations élémentaires (affectation, calcul arithmétique ou logique, comparaison...) effectuées par l'algorithme.

Pour simplifier, nous supposerons que toutes les opérations élémentaires ont le même coût, c'est-à-dire 1 "unité" de temps.

Étudier ce cout en temps revient à estimer le nombre d’affectations, le nombre de comparaisons et d’opérations nécessaires à l’exécution de l’algorithme.

    Exemple : a = b * 3 : 1 opération + 1 affectation = 2 "unités".

La complexité en temps d'un algorithme est exprimée par une fonction, T (pour Time), qui dépend de :

de la taille des données passées en paramètre : 
plus les données sont grandes, plus il faut d'opérations élémentaires pour les traiter.

La complexité dans le pire des cas est le plus souvent calculée, car elle est la plus pertinente. En effet, il est toujours préférable de considérer le pire cas.

## La complexité spatiale
Étudier la complexité spatiale d’un algorithme, ou complexité en mémoire, consiste à estimer la quantité de mémoire dont va avoir besoin l'algorithme pour s'exécuter.
Plus précisément, l'int aloue généralement 32 bits ou 4 octets (mais nous le considérerons simplement comme une case mémoire).

 On conviendra que :

    - on utilise une case mémoire lorsqu’une variable est créée ; O(1)
    - on utilise n cases mémoires lorsqu’un tableau de taille n est créé ; O(n)
    - on utilise une case mémoire lorsque, en récursivité, on ajoute un appel récursif à la pile d’exécution. O(1)

exemple 
- un variabel int a => 32bit => O(1)
- un variabel [int] a => 32bit*n Octé => O(n)
- un variabel [[int]] => 32bit*n*n => O(n²)
- une variable bitArray => peut utiliser des millions de bit

Pour faciliter les choses, nous avons simplement ajouté 1 unité de mémoire à tous les types de variables, 
donc ; 1 int => 1 unité | 1 bitArray => 1 unité | 1 [int] => 1*n unités ...

## addRice

#### Mayah code
```js
  addRice() {
    if (!this.ricePresent) {
      this.ricePresent = true;
      console.log('Rice has been added.');
    } else {
      console.log('There\'s already rice in the rice cooker.');
    }
  },
```
Initialisation du compteur d'opérations élémentaires :
>1 opération (initialisation de la fonction). 

Test conditionnel (if) :
>1 opération pour évaluer !this.ricePresent.

Bloc if (si la condition est vraie) :
>1 opération pour assigner true à this.ricePresent. \
>1 opération pour exécuter console.log('Rice has been added.').

Bloc else (si la condition est fausse) :
>1 opération pour else.\
>1 opération pour exécuter console.log('There's already rice in the rice cooker.').

``
Les opérations dans les if non vérifiés ne sont pas exécutées, donc si la condition est fausse, nous n'ajoutons pas ce qu'il y a à l'intérieur.
``

* Spatial:
this.ricePresent est déjà instancié par la classe et non par la fonction, donc la fonction l'utilise seulement, c'est-à-dire 0 unité.

Donc,

- ***if true : 4 opérations élémentaires; avec Complexiter O(1)***
- ***if falce : 4  opérations élémentaires; avec Complexiter O(1)***

#### Ma vertion de code
```js
addRice() {
  if (!this.ricePresent) {
    this.ricePresent = true;
    console.log('Rice has been added.');
    return;
  }
  console.log('There\'s already rice in the rice cooker.');
}
```
Initialisation du compteur d'opérations élémentaires :
>1 opération (initialisation de la fonction).

Test conditionnel (if) :
>1 opération pour évaluer !this.ricePresent.

Bloc if (si la condition est vraie) 
>1 opération pour assigner true à this.ricePresent.\
>1 opération pour exécuter console.log('Rice has been added.').\
>1 opération pour le mot-clé return.

Bloc (si la condition est fausse) :
>1 opération pour exécuter console.log('There's already rice in the rice cooker.').

``
Les opérations dans les if non vérifiés ne sont pas exécutées, donc si la condition est fausse, nous n'ajoutons pas ce qu'il y a à l'intérieur.
``

* Spatial:
this.ricePresent est déjà instancié par la classe et non par la fonction, donc la fonction l'utilise seulement, c'est-à-dire 0 unité.

Donc,

- ***if true : 5 opérations élémentaires; avec Complexiter O(1)***
- ***if falce : 3  opérations élémentaires; avec Complexiter O(1)***



## cookRice

#### Mayah code
```js
  cookRice() {
    if (this.ricePresent && !this.riceCooked) {
      console.log('Cooking rice...');
      this.delaySync(1500);
      this.riceCooked = true;
      console.log('The rice has been cooked!');
    } else if (!this.ricePresent) {
      console.log('Cannot cook. The rice cooker is empty.');
    } else {
      console.log('The rice is already cooked.');
    }
  },
```
nitialisation du compteur d'opérations élémentaires :
>1 opération (initialisation de la fonction).

Test conditionnel (if) (du premier if):
>2 opérations pour évaluer this.ricePresent && !this.riceCooked.

Bloc if (si la condition est vraie) :
>1 opération pour exécuter console.log('Cooking rice...'). \
>1 opération pour appeler this.delaySync(1500) (sous réserve de ce que fait cette fonction, elle pourrait contenir plusieurs opérations).\
>1 opération pour assigner true à this.riceCooked.\
>1 opération pour exécuter console.log('The rice has been cooked!').

Test conditionnel (if) (du second else if):
>1 opérations pour évaluer !this.ricePresent.

Bloc else if (si la première condition est fausse et la deuxième est vraie) :
>1 opération pour else. (du premier if)\
>1 opération pour exécuter console.log('Cannot cook. The rice cooker is empty.').

Bloc else (si les deux conditions précédentes sont fausses) :
>1 opération pour else. (du premier if)\
>1 opération pour else. (du second else if)\
>1 opération pour exécuter console.log('The rice is already cooked.').

``
Les opérations dans les if non vérifiés ne sont pas exécutées, donc si la condition est fausse, nous n'ajoutons pas ce qu'il y a à l'intérieur.
``

* Spatial:
this.ricePresent et this.riceCooked sont déjà instanciés par la classe et non par la fonction, donc la fonction l'utilise seulement, c'est-à-dire 0 unité.

Donc,

- ***première condition est vraie : 7 opérations élémentaires; avec Complexiter O(1)***
- ***la deuxième est vraie : 6  opérations élémentaires; avec Complexiter O(1)***
- ***if false : 7  opérations élémentaires; avec Complexiter O(1)***
    
#### Ma vertion de code
```js
  cookRice() {
    if (!this.ricePresent) {
      console.log('Cannot cook. The rice cooker is empty.');
      return;
    }
    if (!this.riceCooked) {
      console.log('Cooking rice...');
      this.delaySync(1500);
      this.riceCooked = true;
      console.log('The rice has been cooked!');
      return;
    }
      console.log('The rice is already cooked.');
  },

```
Initialisation du compteur d'opérations élémentaires :
>1 opération (initialisation de la fonction).

Premier test conditionnel (if) :
>1 opération pour évaluer !this.ricePresent.

Bloc if (si la condition est vraie) :
>1 opération pour exécuter console.log('Cannot cook. The rice cooker is empty.').\
>1 opération pour le mot-clé return.

Deuxième test conditionnel (if) :
>1 opération pour évaluer !this.riceCooked.

Bloc if (si la condition est vraie) :
>1 opération pour exécuter console.log('Cooking rice...').\
>1 opération pour appeler this.delaySync(1500) (sous réserve de ce que fait cette fonction, elle pourrait contenir plusieurs opérations).\
>1 opération pour assigner true à this.riceCooked.\
>1 opération pour exécuter console.log('The rice has been cooked!').\
>1 opération pour le mot-clé return.

Bloc else (si les deux conditions précédentes sont fausses) :
>1 opération pour exécuter console.log('The rice is already cooked.').

``
Les opérations dans les if non vérifiés ne sont pas exécutées, donc si la condition est fausse, nous n'ajoutons pas ce qu'il y a à l'intérieur.
``

* Spatial:
this.ricePresent et this.riceCooked sont déjà instanciés par la classe et non par la fonction, donc la fonction l'utilise seulement, c'est-à-dire 0 unité.

Donc,

- ***première condition est vraie : 4 opérations élémentaires; avec Complexiter O(1)***
- ***la deuxième est vraie : 8  opérations élémentaires; avec Complexiter O(1)***
- ***if falce : 4  opérations élémentaires; avec Complexiter O(1)***

## steam

#### Mayah code
```js
  steam() {
    if (this.ricePresent && !this.steamingInProgress) {
      console.log('Steaming in progress...');
      this.steamingInProgress = true;
      this.delaySync(1500);
      this.steamingInProgress = false;
      console.log('Steaming completed!');
    } else if (!this.ricePresent) {
      console.log('Cannot steam. The rice cooker is empty.');
    } else {
      console.log('Steaming is already in progress.');
    }
  },
```
Initialisation du compteur d'opérations élémentaires :
>1 opération (initialisation de la fonction).

Test conditionnel (if) (du premier if):
>2 opérations pour évaluer this.ricePresent && !this.steamingInProgress.

Bloc if (si la condition est vraie) :
>1 opération pour exécuter console.log('Steaming in progress...').\
>1 opération pour assigner true à this.steamingInProgress.\
>1 opération pour appeler this.delaySync(1500) (sous réserve de ce que fait cette fonction, elle pourrait contenir plusieurs opérations).\
>1 opération pour assigner false à this.steamingInProgress.\
>1 opération pour exécuter console.log('Steaming completed!').\

Test conditionnel (if) (du second if):
>1 opérations pour évaluer !this.ricePresent.
>1 opération pour else. (du premier if)\

Bloc else if (si la première condition est fausse et la deuxième est vraie) :
>1 opération pour exécuter console.log('Cannot steam. The rice cooker is empty.').

Bloc else (si les deux conditions précédentes sont fausses) :
>1 opération pour else. (du second else if)\
>1 opération pour exécuter console.log('Steaming is already in progress.').

``
Les opérations dans les if non vérifiés ne sont pas exécutées, donc si la condition est fausse, nous n'ajoutons pas ce qu'il y a à l'intérieur.
``

* Spatial:
this.ricePresent, this.steamingInProgress et this.riceCooked sont déjà instanciés par la classe et non par la fonction, donc la fonction l'utilise seulement, c'est-à-dire 0 unité.

Donc,

- ***première condition est vraie : 8 opérations élémentaires; avec Complexiter O(1)***
- ***la deuxième est vraie : 6  opérations élémentaires; avec Complexiter O(1)***
- ***if false : 7  opérations élémentaires; avec Complexiter O(1)***

#### Ma vertion de code
```js
  steam() {
    if (!this.ricePresent) {
      console.log('Cannot steam. The rice cooker is empty.');
      return;
    }
    if (this.ricePresent && !this.steamingInProgress) {
      console.log('Steaming in progress...');
      this.steamingInProgress = true;
      this.delaySync(1500);
      this.steamingInProgress = false;
      console.log('Steaming completed!');
      return;
    } 
    console.log('Steaming is already in progress.');
  },
```

Initialisation du compteur d'opérations élémentaires :
>1 opération (initialisation de la fonction).

Premier test conditionnel (if) :
>1 opération pour évaluer !this.ricePresent.

Bloc if (si la condition est vraie) :
>1 opération pour exécuter console.log('Cannot steam. The rice cooker is empty.').\
>1 opération pour le mot-clé return.

Deuxième test conditionnel (if) :
>2 opérations pour évaluer this.ricePresent && !this.steamingInProgress.

Bloc if (si la condition est vraie) :
>1 opération pour exécuter console.log('Steaming in progress...').\
>1 opération pour assigner true à this.steamingInProgress.\
>1 opération pour appeler this.delaySync(1500) (sous réserve de ce que fait cette fonction, elle pourrait contenir plusieurs opérations).\
>1 opération pour assigner false à this.steamingInProgress.\
>1 opération pour exécuter console.log('Steaming completed!').\
>1 opération pour le mot-clé return.

Bloc else (si les deux conditions précédentes sont fausses) :
>1 opération pour exécuter console.log('Steaming is already in progress.').

``
Les opérations dans les if non vérifiés ne sont pas exécutées, donc si la condition est fausse, nous n'ajoutons pas ce qu'il y a à l'intérieur.
``


* Spatial:
this.ricePresent, this.steamingInProgress et this.riceCooked sont déjà instanciés par la classe et non par la fonction, donc la fonction l'utilise seulement, c'est-à-dire 0 unité.

Donc,

- ***première condition est vraie : 4 opérations élémentaires; avec Complexiter O(1)***
- ***la deuxième est vraie : 10  opérations élémentaires; avec Complexiter O(1)***
- ***if false : 5  opérations élémentaires; avec Complexiter O(1)***

## keepWarm

#### Mayah code
```js
  keepWarm() {
    if (this.ricePresent && this.riceCooked && !this.heatingInProgress) {
      console.log('The rice is now being kept warm.');
      this.heatingInProgress = true;
    } else if (!this.ricePresent) {
      console.log('Cannot keep warm. The rice cooker is empty.');
    } else if (!this.riceCooked) {
      console.log('Cannot keep warm. The rice is not cooked.');
    } else {
      console.log('Keeping warm is already in progress.');
    }
  },
```

Initialisation du compteur d'opérations élémentaires :
>1 opération (initialisation de la fonction).

Test conditionnel (if) :
>3 opérations pour évaluer this.ricePresent && this.riceCooked && !this.heatingInProgress.

Bloc if (si la condition est vraie) :
>1 opération pour exécuter console.log('The rice is now being kept warm.').\
>1 opération pour assigner true à this.heatingInProgress.

Test conditionnel (if) :
>1 opération pour évaluer !this.ricePresent.
>1 opération pour else. (du premier if)\

Premier bloc else if (si la première condition est fausse et la deuxième est vraie) :
>1 opération pour exécuter console.log('Cannot keep warm. The rice cooker is empty.').\

Test conditionnel (if) :
>2 opérations pour évaluer !this.ricePresent et !this.riceCooked.
>1 opération pour else. (du 2em if)\

Deuxième bloc else if (si les deux premières conditions sont fausses et la troisième est vraie) :
>1 opération pour exécuter console.log('Cannot keep warm. The rice is not cooked.').

Bloc else (si toutes les conditions précédentes sont fausses) :
>1 opération pour else. (du 3em if)\
>1 opération pour exécuter console.log('Keeping warm is already in progress.').

``
Les opérations dans les if non vérifiés ne sont pas exécutées, donc si la condition est fausse, nous n'ajoutons pas ce qu'il y a à l'intérieur.
``


* Spatial:
this.ricePresent, this.heatingInProgress et this.riceCooked sont déjà instanciés par la classe et non par la fonction, donc la fonction l'utilise seulement, c'est-à-dire 0 unité.

Donc,

- ***première condition est vraie : 6 opérations élémentaires; avec Complexiter O(1)***
- ***la 2em est vraie : 7  opérations élémentaires; avec Complexiter O(1)***
- ***la 3em est vraie : 10  opérations élémentaires; avec Complexiter O(1)***
- ***if false : 11  opérations élémentaires; avec Complexiter O(1)***

#### Ma vertion de code
```js
  keepWarm() {
    if (this.ricePresent && this.riceCooked && !this.heatingInProgress) {
      console.log('The rice is now being kept warm.');
      this.heatingInProgress = true;
      return;
    } else if (!this.ricePresent) {
      console.log('Cannot keep warm. The rice cooker is empty.');
      return;
    } else if (!this.riceCooked) {
      console.log('Cannot keep warm. The rice is not cooked.');
      return;
    }
    console.log('Keeping warm is already in progress.');
  },
```
Initialisation du compteur d'opérations élémentaires :
>1 opération (initialisation de la fonction).

Test conditionnel (if) :
>3 opérations pour évaluer this.ricePresent && this.riceCooked && !this.heatingInProgress.

Bloc if (si la condition est vraie) :
>1 opération pour exécuter console.log('The rice is now being kept warm.').\
>1 opération pour assigner true à this.heatingInProgress.\
>1 opération pour le mot-clé return.

Test conditionnel (if) :
>1 opération pour évaluer !this.ricePresent.

Premier bloc else if (si la première condition est fausse et la deuxième est vraie) :
>1 opération pour else. (du premier if)\
>1 opération pour évaluer !this.ricePresent.\
>1 opération pour exécuter console.log('Cannot keep warm. The rice cooker is empty.').\
>1 opération pour le mot-clé return.

Test conditionnel (if) :
>2 opérations pour évaluer !this.ricePresent et !this.riceCooked.

Deuxième bloc else if (si les deux premières conditions sont fausses et la troisième est vraie) :
>1 opération pour else. (du premier if)\
>1 opération pour else. (du 2em if)\
>1 opération pour exécuter console.log('Cannot keep warm. The rice is not cooked.').\
>1 opération pour le mot-clé return.

Bloc else (si toutes les conditions précédentes sont fausses) :
>1 opération pour else. (du premier if)\
>1 opération pour else. (du 2em if)\
>1 opération pour exécuter console.log('Keeping warm is already in progress.').

``
Les opérations dans les if non vérifiés ne sont pas exécutées, donc si la condition est fausse, nous n'ajoutons pas ce qu'il y a à l'intérieur.
``

* Spatial:
this.ricePresent, this.heatingInProgress et this.riceCooked sont déjà instanciés par la classe et non par la fonction, donc la fonction l'utilise seulement, c'est-à-dire 0 unité.

Donc,

- ***première condition est vraie : 8 opérations élémentaires; avec Complexiter O(1)***
- ***la 2em est vraie : 8  opérations élémentaires; avec Complexiter O(1)***
- ***la 3em est vraie : 11  opérations élémentaires; avec Complexiter O(1)***
- ***if false : 10  opérations élémentaires; avec Complexiter O(1)***

## removeRice

#### Mayah code
```js
  removeRice() {
    if (this.ricePresent && (this.riceCooked || this.heatingInProgress)) {
      this.ricePresent = false;
      this.riceCooked = false;
      this.steamingInProgress = false;
      this.heatingInProgress = false;
      console.log('The rice has been removed from the rice cooker.');
    } else {
      console.log('There\'s no rice to remove or it is not cooked yet.');
    }
  },
```

Initialisation du compteur d'opérations élémentaires :
>1 opération (initialisation de la fonction).

Test conditionnel (if) :
>3 opérations pour évaluer this.ricePresent && (this.riceCooked || this.heatingInProgress).

Bloc if (si la condition est vraie) :
>1 opération pour assigner false à this.ricePresent.
>1 opération pour assigner false à this.riceCooked.
>1 opération pour assigner false à this.steamingInProgress.
>1 opération pour assigner false à this.heatingInProgress.
>1 opération pour exécuter console.log('The rice has been removed from the rice cooker.').

Bloc else (si la condition est fausse) :
>1 opération pour else.\
>1 opération pour exécuter console.log('There's no rice to remove or it is not cooked yet.').

``
Les opérations dans les if non vérifiés ne sont pas exécutées, donc si la condition est fausse, nous n'ajoutons pas ce qu'il y a à l'intérieur.
``

* Spatial:
this.ricePresent, this.heatingInProgress et this.riceCooked sont déjà instanciés par la classe et non par la fonction, donc la fonction l'utilise seulement, c'est-à-dire 0 unité.

Donc,

- ***est vraie : 9 opérations élémentaires; avec Complexiter O(1)***
- ***est faut : 6  opérations élémentaires; avec Complexiter O(1)***

#### Ma vertion de code
```js
  removeRice() {
    if (this.ricePresent && (this.riceCooked || this.heatingInProgress)) {
      this.ricePresent = false;
      this.riceCooked = false;
      this.steamingInProgress = false;
      this.heatingInProgress = false;
      console.log('The rice has been removed from the rice cooker.');
      return;
    }
      console.log('There\'s no rice to remove or it is not cooked yet.');
  },
```
Initialisation du compteur d'opérations élémentaires :
>1 opération (initialisation de la fonction).

Test conditionnel (if) :
>3 opérations pour évaluer this.ricePresent && (this.riceCooked || this.heatingInProgress).

Bloc if (si la condition est vraie) :
>1 opération pour assigner false à this.ricePresent.\
>1 opération pour assigner false à this.riceCooked.\
>1 opération pour assigner false à this.steamingInProgress.\
>1 opération pour assigner false à this.heatingInProgress.\
>1 opération pour exécuter console.log('The rice has been removed from the rice cooker.').\
>1 opération pour le mot-clé return.

Bloc else (si la condition est fausse) :
>1 opération pour exécuter console.log('There's no rice to remove or it is not cooked yet.').

``
Les opérations dans les if non vérifiés ne sont pas exécutées, donc si la condition est fausse, nous n'ajoutons pas ce qu'il y a à l'intérieur.
``

* Spatial:
this.ricePresent, this.heatingInProgress et this.riceCooked sont déjà instanciés par la classe et non par la fonction, donc la fonction l'utilise seulement, c'est-à-dire 0 unité.

Donc,

- ***est vraie : 10 opérations élémentaires; avec Complexiter O(1)***
- ***est faut : 5  opérations élémentaires; avec Complexiter O(1)***


## simulateRiceCooker

#### Mayah code
```js
export function simulateRiceCooker() {
  let input;
  const condition = true;

  while (condition) {
    displayMenu();
    input = prompt('Enter your choice: ');

    if (input) {
      const choice = parseInt(input);

      if (!isNaN(choice)) {
        if (choice === 1) {
          riceCooker.addRice();
        } else if (choice === 2) {
          riceCooker.cookRice();
        } else if (choice === 3) {
          riceCooker.steam();
        } else if (choice === 4) {
          riceCooker.keepWarm();
        } else if (choice === 5) {
          riceCooker.removeRice();
        } else if (choice === 6) {
          console.log('Thank you for using the Rice Cooker Simulator. Goodbye!');
          break;
        } else {
          console.log('Invalid choice. Please select a valid option.');
        }
      } else {
        console.log('Invalid input. Please enter a valid number.');
      }
    } else {
      console.log('No input provided.');
    }
  }
}
```
Initialisation du compteur d'opérations élémentaires :
>2 opérations (initialisation de la variable input et de la constante condition).

Boucle While :
>1 opération (évaluation de la condition).

> - ***tous les opérations dans ce while serons effectuer n fois***

Affichage du menu :
>1 opération (appel à la fonction displayMenu).

Lecture de l'entrée utilisateur :
>1 opération (appel à la fonction prompt).

Vérification de l'entrée utilisateur :
>1 opération (vérification de la présence d'une entrée).

Conversion de l'entrée en entier :
>2 opérations (conversion de l'entrée en entier avec parseInt et vérification de la validité avec isNaN).

1er if-else pour les choix de l'utilisateur :
>1 opération if

1er est vraie :
>1 opération if

2em if-else pour les choix de l'utilisateur :
>1 opération if\
>1 opération pour else. (du 1er if)\- une variable bitArray => peut utiliser des millions d'octaves

2emer est vraie :
>1 opération if

3em if-else pour les choix de l'utilisateur :
>1 opération if\
>1 opération pour else. (du 2em if)\

3emer est vraie :
>1 opération if

4em if-else pour les choix de l'utilisateur :
>1 opération if\
>1 opération pour else. (du 3em if)\

4emer est vraie :
>1 opération if

5em if-else pour les choix de l'utilisateur :
>1 opération if\
>1 opération pour else. (du 4em if)\

5emer est vraie :
>1 opération if

6em if-else pour les choix de l'utilisateur :
>1 opération if\
>1 opération pour else. (du 5em if)\

Si else :
>1 opération pour else. (du 6em if)\
>1 opération if

Affichage des messages en cas d'entrées invalides :
>Jusqu'à 3 opérations pour afficher les messages d'erreur correspondants.

Sortie de la boucle et affichage du message de sortie :
>2 opérations (affichage du message de remerciement et le mot-clé break).

``
Calculons seulement le cas ou "choice === 6", c'est le cas le plus gourment en temps, et en plus qui fait continuer l'application.
``

``
Les opérations dans les if non vérifiés ne sont pas exécutées, donc si la condition est fausse, nous n'ajoutons pas ce qu'il y a à l'intérieur.
``

* Spatial:
this.ricePresent, this.heatingInProgress et this.riceCooked sont déjà instanciés par la classe et non par la fonction, donc la fonction l'utilise seulement, c'est-à-dire 0 unité.
choice => 1 unité
input => 1 unité
condition => 1 unité

Donc;

- ***Pour le cas "choice === 6" : (3 + 17n) opérations élémentaires + 3 unités de mémoir; avec Complexiter O(n)***

#### Ma vertion de code
```js
export function simulateRiceCooker() {
  let input;
  const condition = true;

  while (condition) {
    displayMenu();

      input = prompt('Enter your choice: ');
      if (!isNumeric(input)) {
        console.log('Invalid input. Please enter a valid number.');
        return
      }

    const choice = parseInt(input);
    if (!isNaN(choice)) {
      switch (choice) {
        case 1:
          riceCooker.addRice();
          break;
        case 2:
          riceCooker.cookRice();
          break;* Spatial:
this.ricePresent, this.heatingInProgress et this.riceCooked sont déjà instanciés par la classe et non par la fonction, donc la fonction l'utilise seulement, c'est-à-dire 0 unité.
choice => 1 unité
input => 1 unité
condition => 1 unité
        case 3:
          riceCooker.steam();
          break;
        case 4:
          riceCooker.keepWarm();
          break;
        case 5:
          riceCooker.removeRice();
          break;
        case 6:
          console.log('Thank you for using the Rice Cooker Simulator. Goodbye!');
          break;
        default:
          console.log('Invalid choice. Please select a valid option.');
          break;
      }
    } 
  }
}
```

Initialisation du compteur d'opérations élémentaires :
>2 opérations (initialisation de la variable input et de la constante condition).

Boucle While :
>1 opération (évaluation de la condition).

> - ***tous les opérations dans ce while serons effectuer n fois***

Affichage du menu :
>1 opération (appel à la fonction displayMenu).

Lecture de l'entrée utilisateur :
>1 opération (appel à la fonction prompt).

Vérification de l'entrée utilisateur (isNumeric) :
>1 opération (appel à la fonction isNumeric).

Bloc if pour la vérification de l'entrée :
>2 opérations (vérification de la validité numérique de l'entrée et affichage d'un message en cas d'entrée invalide).

Conversion de l'entrée en entier :
>2 opérations (conversion de l'entrée en entier avec parseInt et vérification de la validité avec isNaN).

Switch pour les choix de l'utilisateur :
>Jusqu'à 6 opérations pour les différentes conditions et opérations associées (ajout de riz, cuisson du riz, cuisson à la vapeur, maintien au chaud, retrait du riz, quitter la simulation).

Affichage du message en cas de choix invalide :
>1 opération (affichage du message d'erreur).

Sortie de la boucle et affichage du message de sortie :
>2 opérations (affichage du message de remerciement et le mot-clé break).

``
Les opérations dans les if non vérifiés ne sont pas exécutées, donc si la condition est fausse, nous n'ajoutons pas ce qu'il y a à l'intérieur.
``

* Spatial:
this.ricePresent, this.heatingInProgress et this.riceCooked sont déjà instanciés par la classe et non par la fonction, donc la fonction l'utilise seulement, c'est-à-dire 0 unité.
choice => 1 unité
input => 1 unité
condition => 1 unité

Donc;

- ***Pour le cas "choice === 6" : (3 + 13n) opérations élémentaires + 3 unité de mémoir; avec Complexiter O(n)***

## Conclusion
En règle générale, nous avons constaté que le code que nous avons modifié est toujours plus performant que la version précédente, s'il n'a pas la même complexité, alors que dans la plupart des cas, nous avons simplement supprimé les autres.



















