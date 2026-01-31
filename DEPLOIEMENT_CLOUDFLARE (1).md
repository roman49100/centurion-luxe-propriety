# 🚀 Guide de Déploiement - Centurion Luxe Property sur Cloudflare Pages

## 📋 Ce que vous avez déjà :
- ✅ Domaine OVH : `centurion-luxe-propriety.com`
- ✅ Code du site prêt
- ✅ Base de données Supabase configurée

---

## 🎯 ÉTAPE 1 : Créer un compte GitHub (si pas déjà fait)

1. Allez sur https://github.com
2. Cliquez sur **"Sign up"**
3. Créez un compte gratuit
4. Confirmez votre email

---

## 📦 ÉTAPE 2 : Uploader le code sur GitHub

### Option A : Via l'interface GitHub (le plus simple)

1. Connectez-vous sur https://github.com
2. Cliquez sur le **"+"** en haut à droite → **"New repository"**
3. Nommez-le : `centurion-luxe-property`
4. Cochez **"Public"** (ou Private si vous préférez)
5. Cliquez **"Create repository"**
6. Ensuite, cliquez sur **"uploading an existing file"**
7. **Glissez-déposez TOUS les fichiers du projet** (sauf `node_modules`)
8. Cliquez **"Commit changes"**

### Option B : Via Git (si vous êtes à l'aise avec la ligne de commande)

```bash
cd /chemin/vers/votre/projet
git init
git add .
git commit -m "Initial commit - Centurion Luxe Property"
git branch -M main
git remote add origin https://github.com/VOTRE_USERNAME/centurion-luxe-property.git
git push -u origin main
```

---

## ☁️ ÉTAPE 3 : Déployer sur Cloudflare Pages

### 3.1 Créer un compte Cloudflare

1. Allez sur https://dash.cloudflare.com/sign-up
2. Créez un compte gratuit
3. Confirmez votre email

### 3.2 Créer un projet Pages

1. Connectez-vous sur https://dash.cloudflare.com
2. Dans le menu de gauche, cliquez sur **"Workers & Pages"**
3. Cliquez sur **"Create application"**
4. Choisissez l'onglet **"Pages"**
5. Cliquez sur **"Connect to Git"**
6. Autorisez Cloudflare à accéder à GitHub
7. Sélectionnez le repository **"centurion-luxe-property"**
8. Cliquez sur **"Begin setup"**

### 3.3 Configurer le build

**Build command:**
```
npm run build
```

**Build output directory:**
```
dist
```

**Root directory:**
```
/
```

**Environment variables (IMPORTANT !):**

Ajoutez ces 3 variables d'environnement :

| Variable | Valeur |
|----------|--------|
| `VITE_SUPABASE_URL` | `https://mbpcpghxfuqsvbupegvy.supabase.co` |
| `VITE_SUPABASE_ANON_KEY` | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1icGNwZ2h4ZnVxc3ZidXBlZ3Z5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc5OTQyMDIsImV4cCI6MjA1MzU3MDIwMn0.mwR64gMlpgtzx8WLW4x0RSO1YkgGOKAV-M0Dy5yZnM0` |
| `VITE_SUPABASE_SERVICE_ROLE_KEY` | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1icGNwZ2h4ZnVxc3ZidXBlZ3Z5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczNzk5NDIwMiwiZXhwIjoyMDUzNTcwMjAyfQ.ikGjbvr_0SZlc0J4jQiNokVuDxPKlQ4I4lMpPFv6XBw` |

9. Cliquez sur **"Save and Deploy"**
10. ⏱️ Attendez 2-5 minutes (le site se déploie automatiquement)
11. 🎉 Votre site sera accessible sur `https://centurion-luxe-property.pages.dev`

---

## 🌐 ÉTAPE 4 : Connecter votre domaine OVH à Cloudflare

### 4.1 Ajouter le domaine sur Cloudflare

1. Sur le dashboard Cloudflare, allez dans **"Workers & Pages"**
2. Cliquez sur votre projet **"centurion-luxe-property"**
3. Allez dans l'onglet **"Custom domains"**
4. Cliquez sur **"Set up a custom domain"**
5. Entrez : `centurion-luxe-propriety.com`
6. Cliquez sur **"Continue"**

### 4.2 Cloudflare vous donnera 2 serveurs DNS (nameservers), exemple :
```
ada.ns.cloudflare.com
cam.ns.cloudflare.com
```
**Notez-les bien !**

### 4.3 Modifier les DNS sur OVH

1. Connectez-vous sur https://www.ovh.com/manager/
2. Allez dans **"Noms de domaine"**
3. Cliquez sur **"centurion-luxe-propriety.com"**
4. Allez dans l'onglet **"Serveurs DNS"**
5. Cliquez sur **"Modifier les serveurs DNS"**
6. **Remplacez** les serveurs DNS OVH par ceux de Cloudflare :
   - Serveur DNS 1 : `ada.ns.cloudflare.com` (exemple)
   - Serveur DNS 2 : `cam.ns.cloudflare.com` (exemple)
7. Cliquez sur **"Suivant"** puis **"Valider"**

⏱️ **Attendez 24-48h** pour la propagation DNS (souvent c'est plus rapide, 2-6h)

---

## 📧 ÉTAPE 5 : Configurer Resend (Emails)

### Une fois le domaine vérifié sur Cloudflare (après 24-48h) :

1. Allez sur https://resend.com/domains
2. Cliquez sur **"centurion-luxe-propriety.com"**
3. Vous verrez une liste d'enregistrements DNS à ajouter

### Ajouter les DNS Resend sur Cloudflare :

1. Sur Cloudflare, allez dans **"Websites"**
2. Cliquez sur **"centurion-luxe-propriety.com"**
3. Allez dans **"DNS"** → **"Records"**
4. Ajoutez chaque enregistrement que Resend vous donne :

**Exemple :**
- Type : `TXT`, Nom : `_resend`, Valeur : `resend-verify=...`
- Type : `MX`, Nom : `@`, Valeur : `feedback-smtp.resend.com`, Priorité : `10`
- Type : `TXT`, Nom : `@`, Valeur : `v=spf1 include:resend.com ~all`

5. Attendez quelques heures
6. Resend vérifiera automatiquement
7. ✅ Vous pourrez envoyer des emails à vos vrais clients !

---

## ✅ RÉSUMÉ

| Étape | Durée | Statut |
|-------|-------|--------|
| 1. Compte GitHub | 5 min | ⏳ |
| 2. Upload code | 10 min | ⏳ |
| 3. Déploiement Cloudflare | 5 min | ⏳ |
| 4. DNS OVH → Cloudflare | 24-48h | ⏳ |
| 5. Configuration Resend | 2-6h | ⏳ |

---

## 🆘 BESOIN D'AIDE ?

Si vous bloquez à une étape, dites-moi où et je vous aide ! 😊

---

## 📝 NOTES IMPORTANTES

- **Ne supprimez pas** le domaine sur OVH, on change juste les DNS
- **Gratuit** : GitHub Free, Cloudflare Free, Pages illimité
- **Automatique** : Chaque fois que vous modifiez le code sur GitHub, le site se met à jour automatiquement sur Cloudflare
- **Rapide** : CDN mondial Cloudflare = site ultra-rapide partout dans le monde

---

🎉 **Bonne chance !**
