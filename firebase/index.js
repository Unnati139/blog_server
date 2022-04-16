

var admin = require("firebase-admin");

var serviceAccount = require("../config/serverAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = admin