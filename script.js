 // Deine Firebase-Konfiguration (aus der Projektkonsole kopieren)
const firebaseConfig = {
  apiKey: "DEINE_API_KEY",
  authDomain: "dein-projekt.firebaseapp.com",
  projectId: "dein-projekt-id",
  appId: "deine-app-id"
};

  // Initialisieren
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

function register(email, password) {
  auth.createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
      console.log("Registrierung erfolgreich:", userCredential.user);
    })
    .catch(error => {
      console.error("Fehler bei Registrierung:", error.message);
    });
}


function login(email, password) {
  auth.signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      console.log("Login erfolgreich:", userCredential.user);
    })
    .catch(error => {
      console.error("Fehler beim Login:", error.message);
    });
}


// Aktuell eingeloggter Nutzer
auth.onAuthStateChanged(user => {
  if (user) {
    console.log("Eingeloggt als:", user.email);
  } else {
    console.log("Nicht eingeloggt");
  }
});

// Ausloggen
function logout() {
  auth.signOut().then(() => {
    console.log("Erfolgreich ausgeloggt");
  });
}
