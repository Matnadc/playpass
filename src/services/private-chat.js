
import { getFirestore, doc, getDocs, addDoc, collection, serverTimestamp, query, where, limit, orderBy, onSnapshot, } from "firebase/firestore";
const db = getFirestore();
async function getPrivateChatRef({ from, to }) {
    let privateChatRef;
    const queryChat = query(collection(db, 'private-chats'), where('users', '==', {
        [from]: true,
        [to]: true,
    }), limit(1));

    const docsSnap = await getDocs(queryChat);

    if (docsSnap.empty) {
        privateChatRef = await addDoc(collection(db, 'private-chats'), {
            users: {
                [from]: true,
                [to]: true,
            }
        });
    } else {
        privateChatRef = docsSnap.docs[0];
    }

    return privateChatRef;
}

export async function sendPrivateMessage({ from, to, text }) {
    const privateChatRef = await getPrivateChatRef({ from, to });

    return addDoc(collection(db, 'private-chats', privateChatRef.id, 'messages'), {
        from,
        text,
        created_at: serverTimestamp(),
    });
}

export async function subscribeToPrivateChat({ from, to }, callback) {
    const privateChatRef = await getPrivateChatRef({ from, to });

    const queryChat = query(
        collection(db, 'private-chats', privateChatRef.id, 'messages'),
        orderBy('created_at'),
    );

    return onSnapshot(queryChat, snapshot => {
        const messages = snapshot.docs.map(item => {
            return {
                text: item.data().text,
                from: item.data().from,
                created_at: item.data().created_at?.toDate(),
            };
        });

        callback(messages);
    });
}
