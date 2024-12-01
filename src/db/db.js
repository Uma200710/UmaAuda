import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc, doc, updateDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC66rFQPQiv-OspGwpp4v5JJPneEv5ViGg",
    authDomain: "react-e-commerce-46553.firebaseapp.com",
    projectId: "react-e-commerce-46553",
    storageBucket: "react-e-commerce-46553.firebasestorage.app",
    messagingSenderId: "1080526448682",
    appId: "1:1080526448682:web:e57547ce9162b98b99fb53"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const fetchProducts = async () => {
  const productsCollection = collection(db, 'products');
  const productSnapshot = await getDocs(productsCollection);
  return productSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

const createOrder = async (order) => {
  const ordersCollection = collection(db, 'orders');
  const orderDoc = await addDoc(ordersCollection, order);
  return orderDoc.id;
};

const updateProductStock = async (productId, newStock) => {
  const productRef = doc(db, 'products', productId);
  await updateDoc(productRef, {
    stock: newStock,
  });
};

export { fetchProducts, createOrder, updateProductStock };
