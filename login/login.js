import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

document.addEventListener("DOMContentLoaded", function () {
    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyAFEFTk3oaq6jIx4HaLtbG5wHHib1TkK8I",
        authDomain: "signup-and-login-bd657.firebaseapp.com",
        databaseURL: "https://signup-and-login-bd657-default-rtdb.firebaseio.com",
        projectId: "signup-and-login-bd657",
        storageBucket: "signup-and-login-bd657.appspot.com",
        messagingSenderId: "157132825370",
        appId: "1:157132825370:web:a6fe93e773bc8f75ba82a3"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    // Submit button
    const submitButton = document.getElementById('submit');
    if (submitButton) {
        submitButton.addEventListener("click", function (event) {
            event.preventDefault();

            // Inputs
            const emailInput = document.getElementById('floatingInput');
            const passwordInput = document.getElementById('floatingPassword');
            const email = emailInput.value;
            const password = passwordInput.value;

            const auth = getAuth();

            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    alert("Sign in successful!");
                    console.log(user);
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    alert("Sign in failed: " + errorMessage);
                    console.error(error);
                });
        });
    } else {
        console.error("Submit button not found.");
    }
});
