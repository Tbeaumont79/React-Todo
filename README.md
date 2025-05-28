# Application de Gestion de Tâches

![Statut](https://img.shields.io/badge/status-done-brightgreen)

## 📝 Description du projet

Cette application est une gestionnaire de tâches (To-Do List) fullstack développée en TypeScript. Elle permet d’ajouter, consulter, supprimer et éditer le statut de tâches. Les données sont stockées en mémoire côté backend (aucune base de données). L’objectif est de démontrer la maîtrise d’une architecture claire, typée et moderne, avec une séparation nette des responsabilités entre le frontend (React) et le backend (Express).

## 📂 Structure du Projet

Le projet est structuré en deux parties :

├── backend/
│ ├── src/
│ │ ├── routes/ -> Définition des routes API.
│ │ ├── models/ -> Stockage en mémoire et logique métier.
│ │ ├── schema/ -> Schémas Zod pour validation.
│ │ ├── controller/ -> Controleur de données.
│ │ ├── types/ -> Types TypeScript.
│ │ ├── utils/ -> Fonctions utilitaires.
│ │ ├── services/ -> Services de données et logique métier.
│ │ ├── app.ts
│ │ └── index.ts
│ └── package.json
│
├── frontend/
├── src/
│ ├── api/ -> fetch the API
│ ├── component/ -> Composants UI réutilisables.
│ │ ├── taskForm.tsx
│ │ ├── taskList.tsx
│ │ └── taskApp.tsx
│ ├── hooks/
│ │ └── useTasks.ts -> Hooks personnalisés pour l’API.
│ ├── schema/
│ │ └── todoSchema.ts -> Schéma Zod pour validation.
│ ├── types/
│ │ └── Task.ts -> Types TypeScript.
│ ├── App.css
│ └── App.jsx / App.tsx
└── package.json

## 🚀 Fonctionnalités

- **Gestion des Tâches :**
  - Affichage de la liste des tâches.
  - Ajout de nouvelles tâches (titre, description).
  - Suppression de tâches existantes.
  - (Bonus) Mise à jour du statut d'une tâche (ex : pending, in progress, done).
- **Backend (API REST) :**
  - `GET /tasks` : Récupérer toutes les tâches.
  - `POST /tasks` : Créer une tâche.
  - `DELETE /tasks/:id` : Supprimer une tâche par ID.
  - (Bonus) `PATCH /tasks/:id` : Mettre à jour le statut d'une tâche par ID.

## 🛠️ Stack Technique

- **Backend :**

  - Express.js
  - TypeScript
  - Zod (validation des données)

- **Frontend :**
  - React.js (avec Vite)
  - TypeScript
  - TanStack Query (React Query) — gestion du cache et des requêtes API
  - React Hook Form — gestion performante et typée des formulaires
  - Zod — validation côté client

## 📦 Installation et Lancement

### Prérequis

- Node.js (v18+ recommandé)
- npm ou Yarn

### 1. Cloner le dépôt

```bash
git clone [URL de votre dépôt GitHub]
cd react-practice
```

## 2. Lancement du Back

```bash
cd backend
npm install
npm run dev
```

Le backend sera accessible sur http://localhost:3000.

## 📞 Endpoints de l'API (Backend)

| Méthode | Endpoint   | Description                              |
| ------- | ---------- | ---------------------------------------- |
| GET     | /tasks     | Récupère toutes les tâches               |
| POST    | /tasks     | Crée une nouvelle tâche                  |
| DELETE  | /tasks/:id | Supprime une tâche par ID                |
| PATCH   | /tasks/:id | (Bonus) Met à jour le statut d'une tâche |

## 3. Lancement du Front

Ouvrez un nouveau terminal :

```bash
cd frontend
npm install
npm run dev
```

Le frontend sera accessible sur http://localhost:5173.

## 💡 Choix Techniques et Justifications

TypeScript : Garantit la robustesse, la lisibilité et la maintenabilité du code sur tout le projet.

Express : Framework minimaliste et éprouvé pour la création d’API REST.

Zod : Validation déclarative et typée des données, côté backend et frontend, pour éviter les erreurs de saisie et garantir la cohérence des données.

React : Pour une UI moderne, réactive et modulaire.

TanStack Query : Gestion efficace du cache, des requêtes et de la synchronisation des données côté client.

React Hook Form : Gestion performante, typée et réactive des formulaires.
Architecture : Séparation stricte des responsabilités (API, logique métier, validation, UI, hooks, types).

Gestion d’erreurs : Validation des entrées, gestion des statuts HTTP, retours d’erreur clairs côté API.

## ✨ Améliorations Possibles

Persistance des données via une vraie base de données (SQLite, PostgreSQL…).

Utilisation de Zustand.

Authentification et gestion des utilisateurs.

Ajout de tests unitaires et d’intégration (Jest, Testing Library).
Meilleure gestion des erreurs globales (middleware d’erreur Express, notifications frontend).

Amélioration de l’UI/UX (animations, feedback utilisateur, accessibilité).

Déploiement (Docker, CI/CD).
