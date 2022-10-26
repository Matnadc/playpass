import { getFirestore, updateDoc, setDoc, doc, collection, getDoc } from "firebase/firestore";

const db = getFirestore();

export function createUserProfile(uid, { email, displayName = null, photoURL = null}) {
    return setDoc(doc(db, "users", uid), { email, displayName, photoURL});
}

export function updateUserProfile(uid, { displayName = null, photoURL = null}) {
    return updateDoc(doc(db, "users", uid), { displayName, photoURL});
}
export async function getUserProfile(uid){
    const userSnap = await getDoc(doc(db,'users', uid));
    return {
        id: uid,
        ...userSnap.data(),
    } 
}