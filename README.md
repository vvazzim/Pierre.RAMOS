# Pierre Ramos – Portfolio

Un portfolio minimaliste en React pour le mannequin **Pierre RAMOS**, inspiré de l’esthétique du site suhkapapi (fond noir, typographie serif, grandes images et défilement vertical continu).

## ✨ Aperçu

- 🌑 Design full black, ultra minimal
- 🧍‍♂️ Page **Home** : hero plein écran avec photo et tagline
- 🖼️ Page **Work** : galerie d’images avec *scroll infini*
- ✉️ Page **Contact** : fond photo + formulaire simple
- 📱 Design responsive (desktop / mobile)

---

## 🛠 Stack technique

- [React](https://react.dev/)
- Webpack + Babel
- CSS classique (pas de framework)
- Gestion des assets via `src/assets/images`

---

## 📂 Structure du projet

```text
PR/
├─ public/
│  ├─ index.html
├─ src/
│  ├─ App.js
│  ├─ App.css
│  ├─ index.js
│  ├─ components/
│  │  ├─ Header.js
│  │  ├─ Footer.js
│  ├─ pages/
│  │  ├─ Home.js
│  │  ├─ Work.js
│  │  ├─ Contact.js
│  ├─ assets/
│  │  └─ images/
│  │     ├─ 1.JPG ... 8.JPG
├─ package.json
├─ webpack.config.js
└─ .gitignore
```

> Les fichiers et chemins exacts peuvent varier légèrement selon l’évolution du projet, mais l’idée générale reste la même.

---

## 🚀 Installation & lancement

1. **Cloner le repo**

```bash
git clone https://github.com/vvazzim/Pierre.RAMOS.git
cd Pierre.RAMOS
```

2. **Installer les dépendances**

```bash
npm install
```

3. **Lancer le serveur de dev**

```bash
npm start
```

Le site sera accessible sur :

```text
http://localhost:3000
```

4. **Build pour la production**

```bash
npm run build
```

---

## 🖼 Ajouter / modifier les images

Les images utilisées pour le portfolio sont stockées dans :

```text
src/assets/images/
```

Tu peux :

- remplacer `1.JPG` … `8.JPG` par tes propres photos (en gardant les mêmes noms), ou  
- ajouter de nouveaux fichiers et les importer dans `Work.js` / `Home.js` / `Contact.js`.

> Astuce : privilégie des images déjà compressées pour éviter un bundle trop lourd.

---

## 🧩 Pages

### Home

- Hero plein écran
- Fond : `1.JPG`
- Texte : nom, localisation, tagline
- Icônes pour liens externes (Instagram, email…)

### Work

- Grille d’images responsive
- Scroll infini basé sur un tableau d’images importées
- Idéal pour montrer différentes séries / shootings

### Contact

- Fond photo (`2.JPG`)
- Formulaire simple : nom, email, message
- Pour l’instant : `alert()` côté front (à connecter plus tard à EmailJS, Formspree ou un backend).

---

## 🔧 Personnalisation rapide

- **Nom / tagline** : dans `Home.js`
- **Mesures / infos** : dans `Work.js`
- **Email ou liens sociaux** : dans `Home.js` et `Contact.js`
- **Couleurs / typo** : dans `App.css` (fond, tailles de police, espacement…)

---

## ✅ Roadmap possible

- Intégrer un vrai envoi de mail (EmailJS, Formspree, backend perso)
- Ajouter des catégories de shootings (editorial, runway, commercial…)
- Ajouter une version EN/FR via i18n
- Optimiser les images (lazy-loading avancé, WebP, etc.)

---

## 👤 Auteur

- Modèle : **Pierre RAMOS**
- Dev / intégration : **Wassim (vvazzim)**

