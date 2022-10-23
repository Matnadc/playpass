import { collection, addDoc, onSnapshot, serverTimestamp, query, orderBy } from 'firebase/firestore';
import { db } from '../services/firestore.js';

/**
 * 
 * Graba un mensaje del chat
 * 
 * @param {string} name
 * @param {string} text
 * 
 */

export function saveChatMessage({ name, text }) {
    const chatRef = collection(db, "chat");
    return addDoc(chatRef, {
        name,
        text,
        created_at: serverTimestamp(),
    });
}

/**
 * Suscribe a los mensajes de chat
 * Recibe un callback por parámetro con la función a ejecutar cada vez que cambien los msj.
 * El callback recibe un array como argumento con los msjs.
 * 
 * @param {(docs: {name: string, text: string, created_at: FieldValue}[]) => void } callback
 * @returns {Unsusbscribe}
 */
export function subscribeToChatMessages(callback) {
    const chatRef = collection(db, "chat");

    const q = query(chatRef, orderBy("created_at"));

    return onSnapshot(q, snapshot => {
        const docs = snapshot.docs.map(item => {
            return {
                ...item.data(),
                created_at: item.data().created_at?.toDate(),
            }
        });
        callback(docs);
    });
}