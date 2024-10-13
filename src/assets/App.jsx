import React, { useState } from "react";
import NavBar from "../components/NavBar";
import ProductList from "../components/ProductList";


const App = () => {
  const categories = ["Sillas", "Mesas", "Estanterías", "Sofás"];
  
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const products = [
    {
      id: 1,
      name: 'Banquito de Madera',
      category: 'Sillas',
      description: 'Banquito elegante para interiores.',
      price: 50,
      image: 'https://http2.mlstatic.com/D_NQ_NP_825203-MLA76972251589_062024-O.webp'
    },
    {
      id: 2,
      name: 'Silla de Oficina',
      category: 'Sillas',
      description: 'Silla ergonómica para largas horas de trabajo.',
      price: 120,
      image: 'https://www.oficinasmontiel.com/blog/wp-content/uploads/2023/04/silla-rodillas-ergonomica-ortopedica-interior-habitacion-ninos-oficina-casa-cuidando-salud--2048x1365.jpg'
    },
    {
      id: 3,
      name: 'Mesa de Centro',
      category: 'Mesas',
      description: 'Mesa moderna de centro para sala.',
      price: 200,
      image: 'https://tiendaliving.com.ar/cdn/shop/products/DUOESPEJO_800x.jpg?v=1624897805'
    },
    {
      id: 4,
      name: 'Estantería de Madera',
      category: 'Estanterías',
      description: 'Estantería para libros y decoración.',
      price: 180,
      image: 'https://acdn.mitiendanube.com/stores/403/991/products/dsc040251-5d332283bca727951d16856353403922-1024-1024.jpg'
    },
    {
      id: 5,
      name: 'Sofá de 3 plazas',
      category: 'Sofás',
      description: 'Cómodo sofá para la sala de estar.',
      price: 350,
      image: 'https://mueblesparamicasa.es/8029-large_default/sofa-relax-3-plazas-madrid.jpg'
    },
    {
      id: 6,
      name: 'Mesa de Comedor',
      category: 'Mesas',
      description: 'Mesa de comedor para 6 personas.',
      price: 450,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW5fWVyZw9U6f3KkOJcwZo_piJ9IzvOg95Eg&s'
    }
  ];

  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;

  return (
    <div>
      <NavBar categories={categories} onCategoryClick={handleCategoryClick} />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default App;
