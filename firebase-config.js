// ==================== WAVE - Firebase Configuration ====================
const firebaseConfig = {
    apiKey: "AIzaSyD436FkIwy_e9tK5aW1DVPfUpeGZHeedUk",
    authDomain: "zorak-e0a51.firebaseapp.com",
    databaseURL: "https://zorak-e0a51-default-rtdb.firebaseio.com",
    projectId: "zorak-e0a51",
    storageBucket: "zorak-e0a51.firebasestorage.app",
    messagingSenderId: "34407692791",
    appId: "1:34407692791:web:bdd5d72c9c840afb6416f2",
    measurementId: "G-NQVTB8RBKW"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Services
const auth = firebase.auth();
const db = firebase.database();
const storage = firebase.storage();

// Cloudinary
const CLOUD_NAME = 'dnmpmysk6';
const UPLOAD_PRESET = 'do_2gg';
const AGORA_APP_ID_CALL = '4017f66ea15f4ce088e8d8993a072a5b';

// Admin Account
const ADMIN_EMAIL = 'jasim33v@gmail.com';
const ADMIN_PASSWORD = 'xx2314xx';

// Site Name
const SITE_NAME = 'WAVE';

console.log('🌊 WAVE - Firebase, Cloudinary & Agora Ready');
