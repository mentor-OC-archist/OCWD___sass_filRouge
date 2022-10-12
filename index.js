const jsonDatas = {
    P1C2E1: {
        h: "Appliquez le principe du DRY"
        , p: `Dans cet exercice, vous allez vous entraîner en créant une nouvelle classe et en séparant les propriétés typographiques pour les appliquer indépendamment sur la div de votre choix.`
        , sol: ""
        , tasks: {
            p: `Regardons la classe heading et séparons ses concerns. Elle possède toutes les propriétés qui permettent de créer le style de nos titres, ainsi qu'une propriété qui convertit le texte en majuscules. Le problème est que nous ne voulons pas toujours mettre nos titres en majuscules.
            Au lieu de créer un titre en minuscules complètement nouveau, déplaçons la propriété text-transform de heading dans une classe appelée .heading-caps. Ensuite, nous pouvons l'ajouter aux titres que nous souhaitons voir apparaître en majuscules.`
            , ol: [
                `
                  Créez une nouvelle classe appelée .heading-caps
                `,
                `
                  Déplacez la propriété text-transform dans .heading-caps
                `,
                `
                  Dans le HTML, ajoutez "heading-caps" à la classe du second titre.
                `,
            ]
        }
    }
    , 
    P1C2E2: {
        h: "L’impact de la spécificité sur la structure de votre code"
        , p: `Pratiquez en analysant la spécificité entre deux sélecteurs de classe avec deux boutons et leur couleurs. 👌`
        , sol: ""
        , tasks: {
            p: `Nous avons une classe .btn pour le style de nos boutons, qui leur ajoute un fond vert-menthe. Mais nous avons
            décidé de créer une nouvelle classe qui rend leur fond rose.La valeur hex est #EA526F. Mais... cela ne fonctionne
            pas. Nous l'avons ajoutée à notre second bouton mais il est toujours vert-menthe.
            Cela signifie que la classe .btn doit avoir une spécificité plus haute que.btn-pink. Nous avons donc besoin de
            refactoriser notre CSS pour outrepasser la couleur de fond .btn quand nous appliquons.btn-pink.`
            , ol: [
                `Nous avons une classe .btn pour le style de nos boutons, qui leur ajoute un fond vert-menthe. Mais nous avons
                  décidé de créer une nouvelle classe qui rend leur fond rose.La valeur hex est #EA526F. Mais... cela ne fonctionne
                  pas. Nous l'avons ajoutée à notre second bouton mais il est toujours vert-menthe.`
                , `Cela signifie que la classe .btn doit avoir une spécificité plus haute que.btn-pink. Nous avons donc besoin de
                  refactoriser notre CSS pour outrepasser la couleur de fond .btn quand nous appliquons.btn-pink.`
            ]
        }
    }
    , 
    P1C3E1: {
        h: "Créez votre propre barre de navigation avec BEM"
        , p: `Adaptez le code fourni en utilisant la méthode BEM.`
        , sol: ""
        , tasks: {
            p: `Nous avons créé un sondage dans lequel nous pouvons décider si un chiot est mignon ou trèèèès mignon. Mais maintenant que nous avons découvert la beauté de BEM, notre CSS semble un peu désordonné.

            Revenons en arrière et refactorons notre code en convertissant les classes qui forment notre bloc "sondage", en utilisant la méthodologie BEM.`
            , ol: [`Identifiez le bloc classe et utilisez-le comme une base pour nommer les éléments et les modificateurs.`,

            `Convertissez le nom des autres classes pour qu'elles deviennent des éléments et des modificateurs à l'intérieur du bloc sondage`,
        
            `Mettez à jour le HTML avec les noms de la nouvelle classe.`,
            ]
        }
    }
    , 
    P1C5E1: {
        h: "Pour bien démarrer avec la syntaxe SASS"
        , p: ``
        , sol: ""
        , tasks: {
            p: `Nous allons maintenant coder notre CSS dans le fichier SCSS. Ce code sera ensuite compilé en un fichier CSS qui sera généré dans le répertoire /public/css/style.css Cela vous permettra de découvrir la compilation Sass.`
            , ol: [
`Ajoutez deux propriétés CSS de votre choix comme background-color ou padding dans le fichier Sass en ciblant une classe appelée test`,

`Comparez votre .scss au .css compilé (ils doivent être identiques)`,

`Ajoutez la classe test à la div HTML et observez les résultats`,
            ]
        }
    }
    , 
    P1C5E2: {
        h: "Utilisez des sélecteurs à l’intérieur d’autres sélecteurs : découvrez le nesting !"
        , p: `Dans cet exercice, pratiquez le nesting : placez un sélecteur dans un autre.`
        , sol: ""
        , tasks: {
            p: `Donnons de la structure à notre CSS et mettons en application nos connaissances sur le nesting. Nous avons un sélecteur .parent et un sélecteur .child. Organisons-les pour refléter leurs relations en utilisant le nesting Sass, en plaçant les règles de .child dans les règles de .parent.`
            , ol: [
                `Nestez le sélecteur .child et son contenu dans .parent.`,
                `Regardez le CSS résultant. La classe .child nestée devrait maintenant compiler en tant que .parent.child {...}`,
            ]
        }
    }
    , 
    P1C6E1: {
        h: "Découvrez d’autres types de combinateurs"
        , p: `Appliquez vos nouvelles connaissances des combinateurs dans cet exercice.`
        , sol: ""
        , tasks: {
            p: `Nous avons créé des sélecteurs dont le style se base sur leurs relations avec le sélecteur root. La codebase
            contient déjà un sélecteur pour la classe root. Utilisons le nesting et les combinateurs pour ajouter du style
            aux éléments entourant et à l'intérieur de l'élément .root dans le fichier HTML.`
            , ol: [
                `Nestez un sélecteur de la classe .adjacent en utilisant le combinateur voisin ( + ) et assignez-lui le
                    background-color de votre choix.`,
        
                `Nestez un sélecteur de la classe .child en utilisant le combinateur enfant ( > ) et assignez-lui la
                    background-color de votre choix.`,
        
                `Nestez le sélecteur de la classe .descendant en utilisant un combinateur descendant.
        
                    Normalement, le combinateur descendant est un espace " ", mais avec Sass, nester directement un sélecteur va
                    compiler comme un espace du combinateur descendant dans le CSS.
        
                    Assignez la background-color de votre choix au sélecteur .descendant nesté.
                `,
        
        
                `Regardez le résultat HTML dans la fenêtre du navigateur en cliquant sur le bouton "rafraîchir"`,
        
                `Regardez le CSS compilé, qui se trouve dans /public/css/
        
                    Chaque classe combinateur devrait avoir pour préfixe la classe.root et le symbole combinateur approprié.
                `,
            ]
        }
    }
    , 
    P1C6E2: {
        h: "Utilisez l’esperluette"
        , p: `Dans cet exercice, utilisez l’esperluette.`
        , sol: ""
        , tasks: {
            p: `Le nesting dans Sass est génial mais parfois, il se peut que l'on veuilleur nester un sélecteur qui ne fonctionne pas comme les combinateurs CSS. C'est par exemple le cas des pseudo-sélecteurs comme :hover et :focus. Dans ce genre de cas, nous allons utiliser une esperluette (&) pour lier le nom du parent à celui de l'enfant qui doit être nesté.`
            , ol: [
                `Nestez le sélecteur :focus dans la classe séleteur .input`,    `Ajoutez un nouveau background-color au sélecteur :focus`,    `Regardez le résultat en effectuant une action dans la zone de texte située dans la fenêtre de navigateur`,    `Regardez le résultat dans le CSS. Le statut focus devrait avoir un style avec un sélecteur qui se compile ainsi .input:focus {...}`,
            ]
        }
    }
    , 
    P1C7E1: {
        h: "Intégrez les notions apprises"
        , p: `Dans cet exercice, utilisez le refactoring sur un ancien exercice tout en faisant attention à la spécificité.`
        , sol: ""
        , tasks: {
            p: `Modifions le sondage du chiot dans lequel nous avons utilisé BEM. Maintenant que vous avez compris le pouvoir du
            nesting dans Sass, et appris à les :focus avec l'esperluette, refactorisons les composants de notre sondage pour
            qu'ils tiennent dans un nesting Sass, tout en ayant une spécificité basse.`
            , ol: [
                `Nestez l'élément et modifiez les sélecteurs à l'intérieur du bloc .poll`,
                `Mettez à jour le nom de chaque sélecteur, en remplaçant le préfixe du bloc par l'esperluette &`,
                `Regardez le résultat dans le HTML pour vous assurez que vous n'avez rien cassé.`,
                `Regardez le CSS compilé. Vous devriez voir les sélecteur BEM, qui sont identiques à ce que nous avions dans
                  notre CSS à la fin de l'exercice le partie 1, chapitre 3.`,
            ]
        }
    }
    , 
    P1C7E2: {
        h: "Utilisez les spécificités là où vous en avez besoin"
        , p: `Dans cet exercice, créez plusieurs sélecteurs et augmentez la spécificité.`
        , sol: ""
        , tasks: {
            p: `Nous avons un bouton standard, dont le style est défini par la classe .btn, qui configure aussi le background-color vert menthe. Nous avons aussi un bouton modifié, avec un background transparent, une bordure vert menthe et une couleur de fond, créés grâce au modificateur .btn--outline.

            Maintenant, nous voulons obtenir une variante de la couleur de ces boutons, où .btn--pink rend le fond de .btn rose. Nous voulons également créer une alternative à .btn--outline pour que la couleur de la bordure et la couleur de la police soient roses, plutôt que vert menthe.Mais nous ne voulons pas créer un modificateur supplémentaire et séparé, qui créerait deux esthétiques différentes du bouton, tout comme une nouvelle teinte rose.Nous voulons ajouter .btn--pink a un élément qui a déjà une classe .btn--outline et que notre bouton ait un contour rose.`
            , ol: [
                `Utilisez le nesting et l'esperluette (&) pour créer un modificateur .btn--pink`,
                `Changez la couleur de fond de .btn--pink en #EA526F`,
                `Utilisez le nesting et l'esperluette (&) pour créer un modificateur .btn--outline`,
                `Dans la branche .btn--outline du bloc .btn, nestez le nouveau sélecteur en utilisant l'esperluette (&) pour le lier à .btn--pink`,
                `Dans .btn--outline.btn--pink, changez la couleur du bord et de la police en #EA526F`,
                `Regardez le résultat dans le HTML. Il devrait y avoir un bouton vert menthe, une bouton vert menthe encadré, un bouton rose et un bouton rose encadré.`,
                `Regardez le CSS compilé. Il devrait y avoir un sélecteur .btn, un sélecteur .btn--pink, un sélecteur .btn--outline et un sélecteur .btn--outline.btn--pink`,
            ]
        }
    }
    , 
    P2C1E1: {
        h: "Utilisez des variables pour gérer les couleurs"
        , p: `Dans cet exercice, remplacez les couleurs dans le code par des variables que vous allez créer.`
        , sol: ""
        , tasks: {
            p: `Nos boutons sont soit vert menthe, soit rose, ce qui signifie que nous allons devoir utiliser ces deux couleurs un grand nombre de fois. Nettoyons tout cela et remplaçons ces couleurs par des variables.`
            , ol: [
                `Créez une variable pour stocker la couleur primaire vert menthe #15DEA5, nommez-la $color-primary et placez-là au-dessus de .btn {...}`,
                `Créez une variable pour stocker la couleur secondaire rose #EA526F, nommez-la $color-secondary et placez-là au-dessus de .btn{...}`,
                `Remplacez toutes les instances de #15DEA5 avec la nouvelle variable $color-primary`,
                `Remplacez toutes les instances de #EA526F avec la nouvelle variable $color-secondary`,
                `Rafraîchissez la page et vérifiez que rien n'a changé visuellement.`,
                `Mettez à jour la valeur de la couleur stockée dans $color-primary avec la valeur de votre choix.`,
                `Rafraîchissez la page pour voir le premier bouton qui contient la nouvelle couleur.`,
                `Regardez le CSS. Sass a remplacé les variables par leurs valeurs hex lors de la compilation`,
            ]
        }
    }
    , 
    P2C2E1: {
        h: "Gérez les paramètres du mixin"
        , p: `Dans cet exercice, pratiquez et créez une mixin qui contiendra les règles des bordures.`
        , sol: ""
        , tasks: {
            p: `Nous utilisons des bordures partout sur notre site. Elles ont toutes la même épaisseur, une ligne continue et la même couleur. Plutôt que d'avoir à les taper à la main, créons une @mixin. Cela va nous éviter de les taper tout le temps et de mettre à jour le style de la bordure de manière globale, en mettant à jour le contenu de la mixin.`
            , ol: [
                `Créez une mixin appellée border en utilisant le mot-clé @mixin. Placez-là entre $color-primary et .btn{...}`,
                `Ajouter une propriété border, avec une épaisser de .1rem, une ligne continue et une couleur $color-primary`,
                `Remplacez toutes les instances de la propriété border dans la codebase par notre nouvelle mixin border, en utilisant le mot-clé @include`,
                `Regardez le rendu HTML pour vous assurer que les choses n'ont pas changé visuellement.`,
                `Regardez le CSS et remarquez que Sass remplace les instances de la mixin par le contenu défini à l'intérieur : border: .1rem solid #15DEA5;`,
            ]
        }
    }
    , 
    P2C1E2: {
        h: "Customisez la valeur par défaut de la mixin"
        , p: `À présent, nous allons reprendre notre mixin du dernier exercice tout en l’améliorant pour qu’elle puisse être utilisée, peu importe la couleur de la bordure que l’on souhaite appliquer.`
        , sol: ""
        , tasks: {
            p: `Nous avons crée une mixin pour notre bordure, ce qui est assez cool. Mais on ne peut l'utiliser que dans nos boutons de couleur vert menthe. Mais nous avons aussi crée ces boutons roses, dont les bordures peuvent être modifiées certes mais à la main. Aaaaarghhhh
            Adaptons notre mixin pour faire en sorte qu'elle accepte un argument appelé $color, ce qui donne la possibilité de préciser la couleur de notre choix. Et comme nous avons crée principalement des boutons verts menthe, précisons une valeur par défaut, qui ne nous oblige pas à préciser vert-menthe à chaque fois pour ces boutons là.`
            , ol: [
                `Ajoutez à la mixin border un argument $color`,
                `Modifiez la propriété border pour utiliser la valeur $color que nous passons, plutôt que $color-primary`,
                `Ajoutez une valeur par défaut à l'argument $color de $color-primary`,
                `Remplacez la propriété border située dans le sélecteur .btn--outline.btn--pink selector avec la mixin border`,
                `Passez en argument$color-secondary`,
                `Vérifiez que le HTML n'a pas changé visuellement`,
                `Vérifiez qu'avec le CSS compilé, la mixin a compilé la bordure et que vous obtenez une bordure de .1rem qui est solid, de la couleur que nous avons spécifié, sauf si on en choisi une autre, auquel cas le code sera compilé avec la valeur de $color-primary`,
            ]
        }
    }
    , 
    P2C3E1: {
        h: "Utilisez les extensions Sass"
        , p: `Dans cet exercice, reprenez ce que vous avez vu dans ce chapitre en unifiant la typographie de deux blocs grâce aux extensions.`
        , sol: ""
        , tasks: {
            p: `Notre site web est composé de différentes pages et mises en page comme .form et .proj-prev. Chaque bloc a besoin d'un élément tire, qui devrait avoir les mêmes règles typographiques partout. Nous pourrions utiliser des mixins pour faire cela mais cela nous amènerait à avoir du code répétitif dans notre CSS compilé.

            À la place, nous allons créer un sélecteur .heading-typography et l'utiliser pour contenir tous les styles dont nos éléments titres ont besoins, et ensuite étendre les sélecteurs des titres à .heading-typography.`
            , ol: [
                `Créez un sélecteur .heading-typography et donnez-lui des propriétés typographiques comme font-size, font-style, color, etc.`,
                `Utilisez le nesting et l'esperluette pour créer des éléments de titre pour les blocs.form et .proj-prev`,
                `Utilisez le mot-clé @extend pour étendre nos nouveaux éléments .form__heading et .proj-prev__heading à .heading-typography`,
                `Regardez le HTML. Les deux blocs devraient avoir les mêmes propriétés et les mêmes valeurs que celles définies dans .heading-typography`,
                `Regardez le CSS compilé. La règle mise en place pour .heading-typography devrait également avoir des sélecteurs de .form__heading and de .proj-prev__heading, séparés par des virgules.`,
            ]
        }
    }
    , 
    P2C3E2: {
        h: "Utilisez les placeholders"
        , p: `Dans cet exercice, créez et utilisez les placeholders.`
        , sol: ""
        , tasks: {
            p: `Étendre nos éléments de titre à .heading-typography fonctionne, mais nous avons une classe sélecteur qui n'est utilisée par aucun bloc ou élément de notre site. Au lieude ça .heading-typography existe simplement pour .form__heading and .proj-prev__heading

            Avoir un sélecteur qui n'est pas utilisé dans le CSS peut prêter à confusion notre futur nous, car nous pourrions ne pas nous souvenir qu'on l'utilise pour étendre d'autres éléments. Alors, au lieu de compiler des sélecteurs inutiles, changeons le sélecteur .heading-typography en placeholder !`
            , ol: [
                `Convertissez .heading-typography d'une classe sélecteur à un placeholder en changeant le préfixe "." par un signe pourcentage (%)`,
                `Mettez à jour .form__heading et .proj-prev__heading de sorte à les étendre au nouveau placeholder %heading-typography plus qu'au sélecteur .heading-typography qui n'existe plus`,
                `Regardez le rendu HTML pour vous assurer que rien n'a changé visuellement`,
                `Regardez le CSS compilé. La règle mise en place pour ,heading-typography devrait avoir .form__heading et .proj-prev__heading qui lui sont attachés. Cependant, il ne devrait y avoir aucune instance du sélecteur %heading-typography`,
            ]
        }
    }
    , 
    P2C5E1: {
        h: "Découvrez d’autres méthodes pour manipuler les couleurs"
        , p: `Apprenez à utiliser les fonctions avec un cas précis : en générant une couleur en fonction d’une autre.`
        , sol: ""
        , tasks: {
            p: `Nous avons un élément titre, .form__heading, à qui nous avons assigné manuellement la couleur #fff. Générons une couleur de titre basée sur la couleur primaire de la page $color-primary.

            Parmi les fonctions disponibles dans Sass, il existe la fonction adjust-hue(), qui accepte deux arguments. Le premier argument est la couleur que vous souhaitez ajuster et le second est de quels degrés vous souhaitez l'ajuster. Il y a 360° sur la roue colorimétrique, donc un changement de 360° donnerait la même couleur, un changement de 180 degrés donnerait une couleur complémentaire... Pour en savoir plus sur ce sujet : http://sass-lang.com/documentation/Sass/Script/Functions.html#adjust_hue-instance_method
            
            Utilisons adjust-hue() pour définir la couleur de .form__heading en utilisant $color-primary comme point de départ.`
            , ol: [
                `Remplacez la valeur #fff de la propriété color de .form__heading par la fonction adjust-hue()`,
                `Passez adjust-hue() comme premier argument de $color-primary `,
                `Ajoutez un second argument avec le degré que vous souhaitez appliquer.`,
                `Regardez le rendu de la page et les couleurs résultant de notre adjust-hue()`,
                `Regardez le CSS. La valeur compilée de la propriété .form__heading est le résultat de adjust-hue()`,
                `Ajustez la valeur assignée à$color-primary avec la couleur de votre choix`,
                `Regardez le rendu de la page HTML. La couleur de fond du titre devrait avoir changé pour la nouvelle valeur $color-primary et la couleur du titre devrait également avoir changé.`,
            ]
        }
    }
    , 
    P2C6E1: {
        h: "Découvrez les conditions"
        , p: `Dans cet exercice, ajustez la couleur d’un bouton en utilisant les conditions.`
        , sol: ""
        , tasks: {
            p: `Quand nous survolons nos boutons, nous pouvons dire que nous les survolons parce que le curseur change de forme lorsque nous sommes sur le bouton. Donner une indication visuelle claire à l'utilisateur lorsqu'il survole un bouton va augmenter l'expérience utilisateur.

            Donnons à notre utilisateur une feedback visuel en modifiant la teinte de fond de notre bouton au survol de la souris. Mais, plutôt que de toujours utiliser la même teinte, avec le même nombre de degrés, rendons cette couleur indépendante.
            
            Si la teinte du bouton est inférieure à 180 degrés, alors nous augmenterons la couleur de 30 degrés au survol. Mais si elle est supérieure ou égale à 180 degrés, alors nous baisserons la couleur de 60 degrés.
            
            Pour avoir la bonne teinte, nous allons utiliser la fonction hue() dans Sass, qui accepte une couleur unique en tant qu'argument et retourne la bonne teinte.
            
            Pour en savoir plus sur la fonctionhue(), consultez sa documentation : http://sass-lang.com/documentation/Sass/Script/Functions.html#hue-instance_method`
            , ol: [
                `Créez une mixin appelée hover avec un argument appelé $color`,
                `Créez un statut @if/@else avec un statut conditionnel qui dit "si la teinte $color est inférieure à 180"`,
                `Ajustez la teinte de $color de 30 si la condition est vraie en utilisant la fonction adjust-hue()`,
                `Ajustez la teinte de $color de -60 si la condition est fausse`,
                `Utilisez le nesting, l'esperluette et le pseudo-sélecteur :hover et créez un sélecteur hover pour .btn`,
                `Incluez la mixin hover dans le sélecteur .btn:hover, avec la valeur de couleur utilisée dans la propriété background .btn comme argument`,
                `Regardez le rendu de votre page. Survolez le bouton pour voir le changement de couleur.`,
                `Regardez le CSS compilé. Le sélecteur .btn:hover devrait contenir la propriété background avec la valeur de teinte changée.`,
            ]
        }
    }
    , 
    P2C6E2: {
        h: "Dans quelle condition se trouve ma condition ?"
        , p: `Reprenez le code de l’exercice précédent et allez plus loin avec les conditions et les arguments.`
        , sol: ""
        , tasks: {
            p: `Prenons la mixin hover que nous avons créée et affinons-la. Actuellement, la teinte augmente de 30 degrés si la teinte est inférieure à 180 degrés et diminue de 60 degrés si elle est supérieure ou égale à 180 degrés. C'est l'un ou l'autre. Mais nous pouvons utiliser plus qu'une condition pour créer une série de valeurs à affecter grâce au statut @if, entouré des valeurs qui retourne false.

            Au lieu d'avoir une seule condition qui dit que la teinte est inférieure à 180 degrés, créons une série de valeurs qui vont être vraies si la teinte est supérieure ou égale à 135 degrés et inférieure à 180 degrés. Et pour ces valeurs, ajustons la teinte de façon plus radicale, de 180 degrés.
            
            Nous pouvons le faire grâce à la fonction adjust-hue() ou plus simplement avec la fonction complement(), qui retourne automatiquement la couleur complémentaire de la couleur passée en argument.
            
            Vous pouvez regarder la documentation ici : http://sass-lang.com/documentation/Sass/Script/Functions.html#complement-instance_method`
            , ol: [
                `Altérez la condition contenue dans la mixin hover pour obtenir la condition "la teinte est supérieure ou égale à 135" : avec le signe>=`,
                `Ajoutez une seconde condition en utilisant le mot-clé and, suivi de la condition "la teinte est inférieure à 180" ou "hue is less than ( < ) 180" en anglais.`,
                `Mettez à jour l'opération @if en utilisant la fonction complement(), avec la propriété background-color du bouton passée en argument $color-primary`,
                `Regardez le rendu sur la page. La valeur assignée à $color-primary, #15DEA5, a une teinte de 163 degrés, donc la couleur du bouton au survol devrait être son complément, c'est-à-dire rose`,
                `Regardez le CSS compilé. Le sélecteur .btn:hover devrait avoir une background-color de #DE154E qui est le complément de #15DEA5`,
                `Ajustez la couleur de $color-primary (par exemple avec #19647E) et regardez comment la couleur du bouton change lorsque vous passez au dessus.`,
            ]
        }
    }
    , 
    P2C7E1: {
        h: "Créez des fonctions"
        , p: `Dans cet exercice, entraînez-vous aux fonctions en créant une fonction qui change une couleur en une couleur pastel, avec le code fourni dans l’exercice.`
        , sol: ""
        , tasks: {
            p: `Nous avons utilisé un bon nombre de fonctions Sass pour créer des couleurs. Maintenant, essayons de créer notre propre fonction. Plutôt que de faire varier la teinte de notre bouton quand on passe dessus, changeons la couleur de fond pour obtenir une version pastel de la couleur originale.

            Les couleurs pastel ont tendance à avoir une saturation de 100 % et une luminosité d'environ 90 %. Nous avons donc les valeurs "s" et "l" de la fonction hsl(). Ce qui nous manque est la teinte, que nous pouvons extraire en utilisant la fonction Sass hue()`
            , ol: [
                `Déclarez une nouvelle fonction en utilisant le mot-clé @function et donnez-lui le nom pastel`,
                `Ajoutez un argument à notre nouvelle fonction pastel() appelé $clr, qui correspond à la couleur que nous voulons transformer en couleur pastel`,
                `Ajoutez des accolades après les parenthèses`,
                `À l'intérieur des accolades, déclarez la variable $hue et assignez-lui la valeur de teinte $clr`,
                `Créez une variable pour la saturation de notre couleur pastel appelée $sat et donnez lui une valeur de 100%`,
                `Créez une variable pour la luminosité de notre couleur pastel appelée $light et donnez lui une valeur de90%`,
                `Créez une variable pour notre nouvelle couleur pastel appelée $pastel, et utilisez la fonction hsl() pour créer sa valeur, en passant $hue, $sat et $light en tant que valeurs`,
                `Il est maintenant temps de retourner notre couleur pastel en utilisant le mot-clé @return, suivi de la valeur que nous voulons retourner, $pastel`,
                `Utilisons notre nouvelle fonction pastel() pour configurer la background-color de .btn:hover, en passant la background-color .btn de $color-primary en argument`,
                `Pour rendre la police plus lisible quand on passe dessus, configurons la couleur de la police de .btn:hover avec la valeur originale de $color-primary`,
                `Regardez le rendu sur le site. Lorsqu'il est survolé, le bouton doit devenir d'un vert menthe pastel, avec le vert menthe original et lumineux de $color-primary comme couleur de police`,
                `Regardez le CSS compilé, .btn:hover devrait avoir une background-color #CCFFEF, qui est une version pastel de la $color-primary #15DEA5`,
            ]
        }
    }
    , 
    P3C1E1: {
        h: ""
        , p: ``
        , sol: ""
        , tasks: {
            p: ``
            , ol: [

            ]
        }
    }
    , 
    P3C1E2: {
        h: ""
        , p: ``
        , sol: ""
        , tasks: {
            p: ``
            , ol: [

            ]
        }
    }
    , 
    P3C2E1: {
        h: ""
        , p: ``
        , sol: ""
        , tasks: {
            p: ``
            , ol: [

            ]
        }
    }
    , 
    P3C3E1: {
        h: ""
        , p: ``
        , sol: ""
        , tasks: {
            p: ``
            , ol: [

            ]
        }
    }
    , 
    P3C4E1: {
        h: ""
        , p: ``
        , sol: ""
        , tasks: {
            p: ``
            , ol: [

            ]
        }
    }
    , 
    P3C5E1: {
        h: ""
        , p: ``
        , sol: ""
        , tasks: {
            p: ``
            , ol: [

            ]
        }
    }
    , 
    P3C5E2: {
        h: ""
        , p: ``
        , sol: ""
        , tasks: {
            p: ``
            , ol: [

            ]
        }
    }
    , 
}