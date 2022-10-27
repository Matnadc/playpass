import { getFirestore, updateDoc, setDoc, doc, getDoc } from "firebase/firestore";

const db = getFirestore();

function getUserProfileRef(uid){
    return doc(db, 'users', uid);
}

export function createUserProfile(uid, { email, displayName = null, photoURL = null}) {
    return setDoc(getUserProfileRef(uid), { email, displayName, photoURL});
}

export function updateUserProfile(uid, { displayName = null, photoURL = null}) {
    return updateDoc(getUserProfileRef(uid), { displayName, photoURL});
}
export async function getUserProfile(uid){
    const userSnap = await getDoc(getUserProfileRef(uid));
    console.log(userSnap)
    return {
        id: uid,
        ...userSnap.data(),
    } 
}