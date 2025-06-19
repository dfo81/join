const passwordInput = document.getElementById('password');
const toggleIcon = document.getElementById('togglePassword');
const emailInput = document.getElementById('email');
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

// change password visibility icon on input
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
emailInput.addEventListener("input", function () {
  error.innerHTML = "";
});

emailInput.addEventListener("focus", function () {
  emailInput.parentElement.style.borderColor = '#4589FF';
  passwordInput.parentElement.style.borderColor = '#D1D1D1';
});

emailInput.addEventListener("blur", function () {
  emailInput.parentElement.style.borderColor = '#D1D1D1'; 
});

passwordInput.addEventListener("focus", function () {
  passwordInput.parentElement.style.borderColor = '#4589FF';
  emailInput.parentElement.style.borderColor = '#D1D1D1';
});

passwordInput.addEventListener("blur", function () {
  passwordInput.parentElement.style.borderColor = '#D1D1D1'; 
});

// log in 
function logIn() {
  if (!emailInput.value || !passwordInput.value) {
  error.innerHTML = "Check your email and password. Please try again.";
  emailInput.parentElement.style.borderColor = 'red';
  passwordInput.parentElement.style.borderColor = 'red';
  }
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
