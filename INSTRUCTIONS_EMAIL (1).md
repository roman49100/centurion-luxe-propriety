# 📧 Configuration de l'envoi d'emails - Centurion Luxe Property

## ✅ Ce qui est déjà en place :

Votre système de réponse par email est **100% fonctionnel** et prêt à l'emploi ! Il vous manque juste une dernière étape : ajouter votre **clé API Resend**.

---

## 🚀 Comment activer l'envoi d'emails :

### **Étape 1 : Créer un compte Resend (GRATUIT)**

1. Allez sur **https://resend.com**
2. Cliquez sur **"Sign Up"** (Inscription gratuite)
3. Créez votre compte avec votre email professionnel
4. Vérifiez votre email et connectez-vous

---

### **Étape 2 : Obtenir votre clé API**

1. Une fois connecté, allez dans **"API Keys"** dans le menu
2. Cliquez sur **"Create API Key"**
3. Donnez-lui un nom : `Centurion Luxe Property - Admin`
4. Sélectionnez les permissions : **"Sending access"**
5. Cliquez sur **"Create"**
6. **COPIEZ** la clé qui commence par `re_...` 
   ⚠️ **IMPORTANT** : Vous ne pourrez plus la voir après avoir fermé la fenêtre !

---

### **Étape 3 : Ajouter la clé dans Figma Make**

1. Dans Figma Make, cliquez sur **"Settings"** ou **"Secrets"**
2. Ajoutez une nouvelle variable d'environnement :
   - **Nom** : `RESEND_API_KEY`
   - **Valeur** : Collez votre clé API (ex: `re_xxxxxxxxxxxxx`)
3. Cliquez sur **"Save"**
4. **Redémarrez** le serveur backend (si nécessaire)

---

## 🎯 Comment ça fonctionne :

### **Pour répondre à un contact :**

1. Connectez-vous à l'administration (`/login`)
2. Entrez le mot de passe : `Ro7941Pa!`
3. Consultez la liste des demandes de contact
4. Cliquez sur **"Répondre"** pour un contact
5. Un formulaire s'ouvre avec :
   - ✅ Les informations du contact
   - ✅ Son message original
   - ✅ Un éditeur de texte pré-rempli
6. Modifiez votre message et cliquez sur **"Envoyer"**
7. ✅ L'email est envoyé instantanément !

---

## 📨 Ce que le client recevra :

Un **email professionnel** avec :
- ✅ Votre message personnalisé
- ✅ Son message original pour rappel
- ✅ Le logo et les couleurs de Centurion Luxe Property
- ✅ Vos coordonnées (email et téléphone)
- ✅ Design responsive (mobile-friendly)

**Exemple :**
```
De : Centurion Luxe Property <onboarding@resend.dev>
À : client@example.com
Sujet : Réponse à votre demande - Centurion Luxe Property

[Email HTML professionnel avec votre message]
```

---

## ⚙️ Personnaliser l'adresse d'envoi (Optionnel)

Par défaut, les emails sont envoyés depuis : `onboarding@resend.dev`

### **Pour utiliser VOTRE domaine** (ex: `contact@centurionluxeproperty.com`) :

1. Dans Resend, allez dans **"Domains"**
2. Cliquez sur **"Add Domain"**
3. Entrez votre domaine : `centurionluxeproperty.com`
4. Suivez les instructions pour configurer les DNS (records SPF, DKIM, DMARC)
5. Une fois vérifié, modifiez le fichier `/supabase/functions/server/index.tsx` :
   ```typescript
   from: "Centurion Luxe Property <contact@centurionluxeproperty.com>",
   ```

---

## 🔒 Sécurité :

- ✅ La clé API est **stockée côté serveur** (jamais visible dans le frontend)
- ✅ Seuls les administrateurs connectés peuvent envoyer des emails
- ✅ Logs complets pour tracer tous les envois
- ✅ Protection contre les abus (limite de 100 emails/jour en version gratuite)

---

## 🆓 Limites du plan gratuit Resend :

- ✅ **100 emails/jour**
- ✅ **3 000 emails/mois**
- ✅ Parfait pour débuter !

Si vous dépassez cette limite, Resend propose des plans payants très abordables.

---

## 🛠️ Dépannage :

### **Erreur : "Service d'envoi d'emails non configuré"**
➡️ Vous n'avez pas encore ajouté votre `RESEND_API_KEY` dans les secrets

### **Erreur : "Resend API error"**
➡️ Vérifiez que votre clé API est valide et active dans Resend

### **Erreur : "Invalid API key"**
➡️ Régénérez une nouvelle clé API dans Resend et remplacez l'ancienne

### **Les emails n'arrivent pas**
➡️ Vérifiez les spams du destinataire
➡️ Vérifiez les logs dans Resend Dashboard > "Emails"

---

## 📞 Support :

Besoin d'aide ? Consultez la documentation Resend : https://resend.com/docs

---

**🎉 Votre système est prêt ! Il ne vous reste plus qu'à ajouter la clé API Resend et vous pourrez répondre directement depuis votre interface admin !**
