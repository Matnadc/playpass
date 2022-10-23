import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { createUserProfile, updateUserProfile as updateUserProfileDatabase } from "./user_profiles.js";

const auth = getAuth();

export const AUTH_ERROR_MESSAGES = {
    "auth/invalid-email": "El email ingresado no existe en nuestros registros.",
    "auth/internal-error": "Los datos ingresados no son correctos. Revisá el email y el password.",
    "auth/wrong-password": "La contraseña no es correcta.",
}

let userData = {
    id: null,
    email: null,
    displayName: null,
}

if (localStorage.getItem("user") !== null) {
    userData = JSON.parse(localStorage.getItem("user"));
}

onAuthStateChanged(auth, user => {
    if (user) {
        userData = {
            id: user.uid,
            email: user.email,
            displayName: user.displayName,
        }
    } else {
        userData = {
            id: null,
            email: null,
            displayName: null,
        }
    }

    localStorage.setItem("user", JSON.stringify(userData));
    notifyAll();
});

export function login({ email, password }) {
    return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
    return signOut(auth);
}

export async function updateUserProfile({ displayName }) {
    const authPromise = updateProfile(auth.currentUser, { displayName });
    const profilePromise = updateUserProfileDatabase(userData.id, {displayName});

    await Promise.all([authPromise, profilePromise]);

    userData = {
        ...userData,
        displayName,
    }
    
    notifyAll();
}

export async function register({ email, password }) {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    return createUserProfile(user.uid, { email });
}

let observers = [];
export function subscribeToAuthChanges(callback) {
    observers.push(callback);
    notify(callback);
    return () => {
        observers = observers.filter(observerCallback => observerCallback !== callback);
    }
}

function notify(callback) {
    callback({ ...userData });
}

function notifyAll() {
    observers.forEach(callback => notify(callback));
}