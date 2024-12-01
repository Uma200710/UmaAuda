import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import db from "../db/db";

const createOrder = async (order) => {
  const ordersCollection = collection(db, "orders");
  try {
    const docRef = await addDoc(ordersCollection, {
      ...order,
      date: serverTimestamp(),
    });
    console.log("Orden creada con ID:", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error al crear la orden:", error);
    throw error;
  }
};

export default createOrder;
