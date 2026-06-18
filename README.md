# TP1 — Premier pipeline CI/CD

Application Node.js minimaliste servant de support au TP1 CI/CD.

## Structure du projet

```
tp1-cicd/
├── src/
│   └── app.js                        # Code source (fonctions add, multiply, divide)
├── test/
│   └── app.test.js                   # Tests automatisés (assert natif Node)
├── .github/
│   └── workflows/
│       └── pipeline.yml              # Définition du pipeline GitHub Actions
└── package.json
```

## Pipeline CI/CD

Le pipeline se compose de 3 stages exécutés en séquence :

| Stage   | Rôle                                          |
|---------|-----------------------------------------------|
| Build   | Installe les dépendances, vérifie la syntaxe  |
| Test    | Exécute les tests automatisés                 |
| Package | Produit une archive zip (artefact livrable)   |

Le comportement **fail fast** est assuré par les dépendances `needs:` entre les jobs.
Si le stage Test échoue, le stage Package ne démarre jamais.

---

## Étapes du TP

### 1. Créer le repo et pousser le code

```bash
git init
git add .
git commit -m "chore: initialisation du projet TP1 CI/CD"
git remote add origin https://github.com/<ton-user>/<ton-repo>.git
git push -u origin main
```

Le pipeline se déclenche automatiquement au push.

---

### 2. Observer le pipeline au vert

Dans GitHub → onglet **Actions** → tu dois voir les 3 stages passés au vert.

---

### 3. Provoquer un échec (fail fast)

Modifie une assertion dans `test/app.test.js` pour qu'elle soit fausse :

```js
// AVANT (correct)
assert.strictEqual(add(2, 3), 5, "add(2,3) doit retourner 5");

// APRÈS (volontairement faux)
assert.strictEqual(add(2, 3), 99, "add(2,3) doit retourner 5");
```

Puis :

```bash
git add test/app.test.js
git commit -m "test: introduction d'un test volontairement en échec"
git push
```

Résultat attendu : le stage **Test** passe en rouge, le stage **Package** ne s'exécute pas.

---

### 4. Corriger et repasser au vert

Remet l'assertion correcte, push à nouveau, vérifie que les 3 stages repassent au vert.

---

## Livrable attendu

- Le fichier `.github/workflows/pipeline.yml`
- Une capture du pipeline réussi (3 stages au vert)
- Une capture du pipeline en échec + analyse de la cause
