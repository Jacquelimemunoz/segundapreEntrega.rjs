import { useState, useEffect } from "react";
import products from "../data/products";
import { useParams } from "react-router-dom";
import { getProducts, getProductById, getProductsByCategory } from "../data/products";


const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const getProducts = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(products);
        }, 1000);
      });
    };

    getProducts().then((res) => {
      if (categoryId) {
        setItems(res.filter((prod) => prod.categoria === categoryId));
      } else {
        setItems(res);
      }
    });
  }, [categoryId]);

  return (
    <div>
      <h2>{greeting}</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {items.map((item) => (
          <div key={item.id} style={{ border: "1px solid gray", padding: "1rem" }}>
            <img src={item.imagen} alt={item.nombre} style={{ width: "100px" }} />
            <h3>{item.nombre}</h3>
            <p>${item.precio}</p>
            <a href={`/item/${item.id}`}>Ver más</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;