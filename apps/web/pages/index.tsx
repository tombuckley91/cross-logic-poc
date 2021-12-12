import { useContext } from "react";
import { Button } from "ui";

import { sdkContext } from "./_app";

export default function Homepage() {
  const { useCart } = useContext(sdkContext);
  const { addToCart, cart, removeFromCart } = useCart;

  return (
    <div>
      <h1>Web</h1>
      <ul>
        {Object.keys(cart).map((sku) => (
          <li key={sku}>
            <span>
              Sku: {sku} Quantity: {cart[sku]}
            </span>
          </li>
        ))}
      </ul>
      <Button onClick={() => addToCart("12336")} />
      <Button onClick={() => removeFromCart("12336")} />
    </div>
  );
}
