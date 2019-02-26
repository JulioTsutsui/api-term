const admin = require("firebase-admin");
const serviceAccount = require("../serviceAccountKey.json");
const db_url = require("../db-url.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: db_url
});

var db = admin.firestore();

module.exports = db;