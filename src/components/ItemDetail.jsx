function ItemDetail({ name, price, description, imagen }) {
    return (
      <div>
        <h2>{name}</h2>
        <img src={imagen} alt={name} />
        <p>{description}</p>
        <p>Precio: ${price}</p>
      </div>
    );
  }
  
  export default ItemDetail;