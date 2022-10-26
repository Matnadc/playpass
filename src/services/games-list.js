import { collection, getDocs, getFirestore, query, onSnapshot } from "firebase/firestore";

const db = getFirestore();

export async function getAllGames(callback) {
  const q = query(collection(db, "games"));

  return onSnapshot(q, snapshot => {
      const docs = snapshot.docs.map(item => {
          return {
              ...item.data(),
          }
      });
      callback(docs);
  });
}