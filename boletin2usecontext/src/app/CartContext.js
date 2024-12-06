import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addItem = (product) => {
    setItems((prevItems) => [...prevItems, product]);
  };

  const removeItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ items, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
}


export function ProductList() {
  const { addItem } = useContext(CartContext);

  const products = [
    { id: 1, name: "Producto 1"},
    { id: 2, name: "Producto 2"},
    { id: 3, name: "Producto 3"},
  ];

  return (
    <div>
      <h2>Lista de Productos</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name}
            <button onClick={() => addItem(product)}
            >
            Agregar al carrito
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Cart() {
  const { items, removeItem } = useContext(CartContext);

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {items.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.name}
              <button onClick={() => removeItem(item.id)}>
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CartContext;
