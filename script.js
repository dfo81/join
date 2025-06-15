const passwordInput = document.getElementById('password');
const toggleIcon = document.getElementById('togglePassword');
const emailImput = document.getElementById('email');
const error = document.getElementById('errorMessage');

let isVisible = false;

function updateIcon() {
  const value = passwordInput.value;
  if (!value) {
    toggleIcon.src = "./assets/icons/lock.svg";
    toggleIcon.classList.remove('cursor-pointer');
  } else if (isVisible) {
    toggleIcon.src = "./assets/icons/visibility.svg";
    toggleIcon.classList.add('cursor-pointer');
  } else {
    toggleIcon.src = "./assets/icons/visibilityOff.svg";
    toggleIcon.classList.add('cursor-pointer');
  }
}

// onclick eye will show / hide password
toggleIcon.addEventListener("click", function () {
  if (!passwordInput.value) return;
  isVisible = !isVisible;
  passwordInput.type = isVisible ? "text" : "password";
  updateIcon();
});

// change icon on input
passwordInput.addEventListener("input", function () {
  error.innerHTML = "";
  if (!passwordInput.value) {
    isVisible = false;
    passwordInput.type = "password";
    error.innerHTML = "";
  }
  updateIcon();
});

// clear error by change on input
emailImput.addEventListener("input", function () {
  error.innerHTML = "";
});

// log in 
function logIn() {
  if (!emailImput.value || !passwordInput.value)
  error.innerHTML = "Check your email and password. Please try again.";
  else {
    //todo check login
  }
}


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
