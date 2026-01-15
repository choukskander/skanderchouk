# 🚀 Portfolio Backend Server

## Configuration et démarrage

### 1. Installation des dépendances
```bash
cd server
npm install
```

### 2. Variables d'environnement
Le fichier `.env` est déjà configuré avec la connexion MongoDB.

### 3. Démarrer le serveur
```bash
# Mode développement (avec nodemon pour auto-reload)
npm run dev

# Mode production
npm start
```

Le serveur démarre sur `http://localhost:5000`

---

## 📝 API Endpoints

### POST `/api/contact`
Envoie un message de contact à MongoDB.

**Request:**
```json
{
  "name": "Votre Nom",
  "email": "votre@email.com",
  "message": "Votre message"
}
```

**Response Success (201):**
```json
{
  "success": true,
  "message": "Message reçu avec succès",
  "data": {
    "_id": "...",
    "name": "Votre Nom",
    "email": "votre@email.com",
    "message": "Votre message",
    "createdAt": "2025-01-15T..."
  }
}
```

### GET `/api/contacts`
Récupère tous les messages de contact (triés du plus récent au plus ancien).

**Response:**
```json
{
  "success": true,
  "count": 5,
  "data": [...]
}
```

### GET `/api/health`
Vérifie que le serveur fonctionne.

---

## 🔧 Configuration MongoDB

**Connection String:**
```
mongodb+srv://skanderchouk_db_user:QBKIDINsoUXIRF9d@cluster0.fbvyczw.mongodb.net/?appName=Cluster0
```

**Database:** `test` (par défaut avec MongoDB Atlas)
**Collection:** `contacts`

---

## ⚙️ Technologies utilisées

- **Express.js** - Framework backend
- **Mongoose** - ODM pour MongoDB
- **CORS** - Gestion des requêtes cross-origin
- **Nodemon** - Auto-reload en développement

---

## 🎯 Prochaines étapes

1. ✅ Le serveur est prêt à recevoir les données du formulaire
2. ✅ Les données sont sauvegardées dans MongoDB
3. ✅ Le frontend envoie automatiquement les données au serveur

**Assurez-vous que le serveur est en cours d'exécution avant d'utiliser le formulaire de contact!**
