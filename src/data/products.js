// data/products.js

const products = [ // CAMBIADO a "products" para que coincida con los métodos
  { id: "1", name: "Camiseta1", price: 50, description: "Camisa de artista1", imagen: "", category: "merch" },
  { id: "2", name: "Camiseta2", price: 75, description: "Camisa de artista2", imagen: "ruta-imagen", category: "merch" },
  { id: "3", name: "Camiseta3", price: 55, description: "Camisa de artista3", imagen: "ruta-imagen", category: "album" },
  { id: "4", name: "Camiseta4", price: 50, description: "Camisa de artista4", imagen: "ruta-imagen", category: "album" },
  { id: "5", name: "Camiseta5", price: 75, description: "Camisa de artista5", imagen: "ruta-imagen", category: "merch" },
  { id: "6", name: "Camiseta6", price: 55, description: "Camisa de artista6", imagen: "ruta-imagen", category: "album" },
];

export const getProducts = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(products), 1000); // Simula una espera de 1 segundo
  });

/// Obtener un producto por su ID
export const getProductById = (id) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === id)); // Ya no necesitas Number(id)
    }, 1000); // Simula una espera de 1 segundo
  });

// Obtener productos por categoría
export const getProductsByCategory = (categoryId) =>
  new Promise((resolve) => {
    setTimeout(() => {
      // Filtra los productos por la categoría pasada
      resolve(products.filter((prod) => prod.category === categoryId));
    }, 1000); // Simula una espera de 1 segundo
  });

// Exportación por defecto (si quieres usar directamente el array de productos)
export default products;

