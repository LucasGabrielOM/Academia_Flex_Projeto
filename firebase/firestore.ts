import { collection, getDocs } from "firebase/firestore";
import { db } from "./config";


export async function getAllExercises() {
  console.log("📡 Buscando exercícios no Firestore...");

  const colRef = collection(db, "exercises");
  const snapshot = await getDocs(colRef);

  const list: any[] = [];

  snapshot.forEach((doc) => {
    const data = doc.data();
    console.log("✔️ Carregado:", doc.id, data);

    list.push({
      id: doc.id,
      name: data.nome,

    });
  });

  return list;
}
