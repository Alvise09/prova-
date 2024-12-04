
// Importa e configura Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

// Configurazione Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCSK6ACbpBq_O--x0vgYOYhKYGdE7ySMdI",
  authDomain: "hfarmai-8bdf5.firebaseapp.com",
  projectId: "hfarmai-8bdf5",
  storageBucket: "hfarmai-8bdf5.firebasestorage.app",
  messagingSenderId: "791164269090",
  appId: "1:791164269090:web:486de7149aa406ead2507b",
  measurementId: "G-3536PC715E"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Bottone di login
document.getElementById("googleSignIn").addEventListener("click", () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      alert(`Benvenuto, ${user.displayName}!`);
    })
    .catch((error) => {
      console.error("Errore durante il login:", error.message);
      alert("Errore durante il login. Riprova.");
    });
});