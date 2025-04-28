import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getProducts, getProductById, getProductsByCategory } from "../data/products";

function ItemDetailContainer() {
  const [producto, setProducto] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    getProductById(itemId).then(res => setProducto(res));
  }, [itemId]);

  return (
    <div>
      {producto ? <ItemDetail {...producto} /> : <p>Cargando detalle...</p>}
    </div>
  );
}

export default ItemDetailContainer;
