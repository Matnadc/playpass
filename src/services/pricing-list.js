import { collection, getFirestore, query, onSnapshot, orderBy } from "firebase/firestore";

const db = getFirestore();

export async function getAllPricing(callback) {
  const q = query(collection(db, "pricing"), orderBy("price"));

  return onSnapshot(q, snapshot => {
      const docs = snapshot.docs.map(item => {
          return {
              ...item.data(),
          }
      });
      callback(docs);
  });
}