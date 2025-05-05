# NicolasHerissard.github.io

Bienvenue sur le dépôt de mon portfolio personnel, conçu pour présenter mes projets, compétences et expériences professionnelles. Ce site est développé avec [Astro](https://astro.build/) et stylisé à l'aide de [Tailwind CSS](https://tailwindcss.com/).

🔗 **Site en ligne** : [nicolasherissard.github.io](https://nicolasherissard.github.io)

## 🛠️ Technologies utilisées

- **[Astro](https://astro.build/)** : Framework moderne pour la création de sites statiques rapides et optimisés.
- **[Tailwind CSS](https://tailwindcss.com/)** : Framework CSS utilitaire pour un design rapide et réactif.
- **[TypeScript](https://www.typescriptlang.org/)** : Superset de JavaScript pour un typage statique.
- **[Docker](https://www.docker.com/)** : Conteneurisation pour un environnement de développement cohérent.
- **[GitHub Pages](https://pages.github.com/)** : Hébergement gratuit de sites statiques directement depuis GitHub.

## 📁 Structure du projet

/
├── public/ # Fichiers statiques (images, favicon, etc.)
├── src/ # Code source du site
│ ├── components/ # Composants réutilisables
│ ├── layouts/ # Gabarits de mise en page
│ └── pages/ # Pages du site
├── .github/workflows/ # Fichiers de configuration pour GitHub Actions
├── .vscode/ # Paramètres spécifiques à Visual Studio Code
├── Dockerfile # Fichier de configuration pour Docker
├── compose.yaml # Configuration pour Docker Compose
├── package.json # Dépendances et scripts du projet
├── tailwind.config.mjs # Configuration de Tailwind CSS
├── tsconfig.json # Configuration de TypeScript
└── astro.config.mjs # Configuration d'Astro


## 🚀 Démarrage rapide

### Prérequis

- [Node.js](https://nodejs.org/) (version 18 ou supérieure)
- [Docker](https://www.docker.com/) (optionnel, pour l'utilisation de conteneurs)

### Installation

1. **Cloner le dépôt :**

   ```bash
   git clone https://github.com/NicolasHerissard/NicolasHerissard.github.io.git
   cd NicolasHerissard.github.io

2. **Installer les dépendances :**

   ```bash
   npm install
   ```

3. **Démarrer le serveur de développement :**

   ```bash
   npm run dev
   ```
   Le site sera accessible à l'adresse http://localhost:4321.

### Utilisation avec Docker
    ```bash
    docker compose up
    ```

## 🧪 Scripts disponibles

- `npm run dev` : Lance le serveur de développement.
- `npm run build` : Compile le site pour la production.
- `npm run preview` : Prévisualise le site compilé.
- `npm run format` : Formate le code avec Prettier.

## 🧩 Déploiement

Le site est automatiquement déployé sur **GitHub Pages** via **GitHub Actions**.  
Chaque push sur la branche `main` déclenche un workflow qui construit et déploie automatiquement le site.
