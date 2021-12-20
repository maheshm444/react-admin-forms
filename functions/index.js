// import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
const functions = require("firebase-functions");
const admin = require("firebase-admin");

// const getAuth = require("firebase/auth");
// const createUserWithEmailAndPassword = require("firebase/auth");
// const auth = getAuth();

admin.initializeApp();

const db = admin.firestore();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.onUserCreate = functions.firestore.document("new_employees/{id}")
    .onCreate(async (snap, context) => {
      const values = snap.data();
      const email = values.email;
      const password = values.password;
      admin.auth().createUser({email: email, password: password})
          .then((userCredential) => {
            db.collection("logging")
                .add({user: values.email, message: "User created"});
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            db.collection("logging")
                .add({user: values.email,
                  message: `Error Occurred: ${errorCode} - ${errorMessage} `});
          });
      await db.collection("users")
          .add({user: values.email, role: "employee"});
    });
