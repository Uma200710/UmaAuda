import db from "../db/db.js"
import { addDoc, collection } from "firebase/firestore"

const products = [
        {
            id: '1',
            name: 'Modern Sofa',
            price: 500,
            category: 'sofas',
            image: 'https://m.media-amazon.com/images/I/41Q0nb3eorL._SS400_.jpg',
            description: 'A stylish modern sofa perfect for any living room.',
            stock: 5
        },
        {
            id: '2',
            name: 'Dining Table',
            price: 300,
            category: 'tables',
            image: 'https://img.zcdn.com.au/lf/50/hash/38080/19699028/4/.jpg',
            description: 'A spacious dining table for family gatherings.',
            stock: 3
        },
        {
            id: '3',
            name: 'Office Chair',
            price: 150,
            category: 'chairs',
            image: 'https://www.nilkamalfurniture.com/cdn/shop/files/LALMBMWASYCHRBLK_large.jpg?v=1720087025',
            description: 'Comfortable office chair with ergonomic design.',
            stock: 7
        },
        {
            id: '4',
            name: 'Classic Sofa',
            price: 700,
            category: 'sofas',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAbuin7J8BuG-89A84N98XVEIzt9YCeNDTqA&s',
            description: 'A classic sofa with a timeless design.',
            stock: 2
        }
    ];
    
    export default products;

const seedProducts = () => {
  const productsRef = collection(db, "products")
  products.map(( { id, ...dataProduct } )=> {
    addDoc(productsRef, dataProduct)
  })

  console.log("productos subidos")
  return
}

seedProducts()