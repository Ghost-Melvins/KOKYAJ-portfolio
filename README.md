# Portfolio KOKYAJ

Portfolio personnel construit en HTML, CSS et JavaScript natifs, à partir d’une maquette desktop, tablette et mobile.

## Ouvrir le site

Ouvre `index.html` dans ton navigateur, ou utilise Live Server dans VS Code pour voir les changements pendant que tu travailles.

## Organisation des fichiers

- `index.html` contient les sections et leur contenu : accueil, présentation, compétences, projets, parcours, domaines d’intérêt et contact.
- `css/styles.css` définit les couleurs inspirées de la maquette, les cartes et les règles responsive.
- `js/main.js` gère le menu mobile, met en évidence la section active dans la navigation, prépare un brouillon d’e-mail et actualise l’année du pied de page.
- `assets/images/02.png` est le portrait de la présentation.
- `assets/images/Yann_PFO.png` illustre l’expérience chez PFO Construction.
- `assets/documents/CV_KOKYAJ.pdf` est le CV téléchargeable.

### Modifier les couleurs des sections

Dans `css/styles.css`, les teintes principales sont `--paper` et `--paper-deep`. Les fonds de chaque section (`--bg-accueil`, `--bg-apropos`, `--bg-projets`, etc.) utilisent ces teintes. Change les deux couleurs principales pour recolorer les sections par paires, ou modifie une variable `--bg-...` pour ajuster seulement une section.

### Formulaire de contact

Le formulaire n’a pas de backend ni de base de données et le site n’enregistre pas les champs saisis. Au clic, JavaScript prépare un brouillon dans l’application e-mail du visiteur. Le message part uniquement si le visiteur choisit de l’envoyer ; il est alors conservé par son service de messagerie, pas par le portfolio.

## Projets

Le portfolio est le premier projet présenté. L’application de gestion et l’exercice d’analyse de données restent des idées à réaliser ; la page les identifie comme telles.
