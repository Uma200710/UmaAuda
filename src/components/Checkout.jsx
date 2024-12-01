import { useState } from "react";
import createOrder from "../utils/createOrder";

const Checkout = ({ cart }) => {
  const [orderId, setOrderId] = useState(null);

  const handleCheckout = async () => {
    const order = {
      items: cart.map((item) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
      total: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
      buyer: {
        name: "John Doe", // Podrías pedir al usuario que ingrese estos datos.
        email: "john.doe@example.com",
      },
    };

    try {
      const id = await createOrder(order);
      setOrderId(id);
    } catch (error) {
      console.error("Error al finalizar la compra:", error);
    }
  };

  return (
    <div>
      {orderId ? (
        <p>Gracias por tu compra. Tu ID de orden es: {orderId}</p>
      ) : (
        <button onClick={handleCheckout}>Finalizar Compra</button>
      )}
    </div>
  );
};

export default Checkout;