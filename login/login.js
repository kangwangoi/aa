    
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
// import { getAuth ,createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

      
// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDeI417Sjd7nfX1YBIto7hOMLZM94cUnhY",
//   authDomain: "myfirstproject-80ab1.firebaseapp.com",
//   projectId: "myfirstproject-80ab1",
//   storageBucket: "myfirstproject-80ab1.appspot.com",
//   messagingSenderId: "869696757764",
//   appId: "1:869696757764:web:db26f1eef36d14584d1551",
//   measurementId: "G-GK0F7V1ZYN"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const onclickk = document.getElementById('button');
//         console.log('onclickk : ', onclickk );
//         onclickk.addEventListener('click', (i) => {
//             i.preventDefault()
//             const emaile = document.getElementById('email').value;
//             const passwordp = document.getElementById('password').value;
//             console.log(emaile)
//             console.log(passwordp)
//             createUserWithEmailAndPassword(auth, emaile, passwordp)
//                 .then((userCredential) => {
//                     // Signed up 
//                     console.log(userCredential);
//                     const user = userCredential.user;
//                     // ...
//                 })
//                 .catch((error) => {
//                     console.log("error: ", error);
//                     const errorCode = error.code;
//                     const errorMessage = error.message;
//                     // ..
//                 });

//         })


//

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
//import { getFirestore } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";
import { getAuth,signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeI417Sjd7nfX1YBIto7hOMLZM94cUnhY",
  authDomain: "myfirstproject-80ab1.firebaseapp.com",
  projectId: "myfirstproject-80ab1",
  storageBucket: "myfirstproject-80ab1.appspot.com",
  messagingSenderId: "869696757764",
  appId: "1:869696757764:web:db26f1eef36d14584d1551",
  measurementId: "G-GK0F7V1ZYN"
};

// const db = getFirestore(app);
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const onclickk = document.getElementById('button');
        console.log('onclickk : ', onclickk );
        onclickk.addEventListener('click', (i) => {
            i.preventDefault();
            const email_value = document.getElementById('email').value;
            const password_value = document.getElementById('password').value;
            console.log(email_value)
            console.log(password_value) 
            signInWithEmailAndPassword(auth, email_value, password_value  )
            .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              alert("Login sucessfully");
              console.log("success");
      
              location.href = '../index2.html'
              // ...
            })
            .catch((error) => {
              console.log(error);
              alert(error)
              console.error("Error sending email verification:", error);
              
})})




      