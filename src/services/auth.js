import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const auth = getAuth();

export const AUTH_ERROR_MESSAGES = {
    "auth/invalid-email": "El email ingresado no existe en nuestros registros.",
    "auth/internal-error": "Los datos ingresados no son correctos. Revisá el email y el password.",
    "auth/wrong-password": "La contraseña no es correcta.",
}

let userData = {
    id: null,
    email: null,
    name: null,
}

if(localStorage.getItem("user") !== null){
    userData = JSON.parse(localStorage.getItem("user"));
}

onAuthStateChanged(auth, user => {
    if(user) {
        userData = {
            id: user.uid,
            email: user.email,
            name: user.name,
        }
    } else {
        userData = {
            id: null,
            email: null,
            name: null,
        }
    }

    localStorage.setItem("user", JSON.stringify(userData));
    notifyAll();
});

export function login({ email, password }){
    return signInWithEmailAndPassword(auth, email, password);
}

export function logout(){
    return signOut(auth);
}

export function updateUserProfile({name}){
    return updateProfile(auth.currentUser, name).then(() => {
        userData = {
            ...userData,
            name,
        }
        notifyAll();
    });
}

export function register({email, password}){
    return createUserWithEmailAndPassword(auth, email, password);
}

let observers = [];
export function subscribeToAuthChanges(callback){
    observers.push(callback);
    notify(callback);
    return () => {
        observers = observers.filter(observerCallback => observerCallback !== callback);
    }
}

function notify(callback){
    callback({ ...userData });
}

function notifyAll(){
    observers.forEach(callback => notify(callback));
}