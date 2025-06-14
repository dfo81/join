 const passwordInput = document.getElementById("password");
  const toggleIcon = document.getElementById("togglePassword");

  let isVisible = false;

  function updateIcon() {
    const value = passwordInput.value;
    if (!value) {
      toggleIcon.src = "./assets/icons/lock.svg"; // Zustand 1: leer
      toggleIcon.classList.remove("cursor-pointer");
    } else if (isVisible) {
      toggleIcon.src = "./assets/icons/visibility.svg"; // Zustand 3: sichtbar
      toggleIcon.classList.add("cursor-pointer");
    } else {
      toggleIcon.src = "./assets/icons/visibilityOff.svg"; // Zustand 2: verborgen
      toggleIcon.classList.add("cursor-pointer");
    }
  }

  // Bei Klick auf das Icon Passwort anzeigen/verstecken
  toggleIcon.addEventListener("click", function () {
    if (!passwordInput.value) return; // nichts tun wenn leer
    isVisible = !isVisible;
    passwordInput.type = isVisible ? "text" : "password";
    updateIcon();
  })

  // Bei Eingabe ins Feld Icons aktualisieren
  passwordInput.addEventListener("input", function () {
    // Falls man löscht, immer auf verborgen zurücksetzen
    if (!passwordInput.value) {
      isVisible = false;
      passwordInput.type = "password";
    }
    updateIcon();
  })

  // Initialer Zustand
  updateIcon()













/*
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
*/