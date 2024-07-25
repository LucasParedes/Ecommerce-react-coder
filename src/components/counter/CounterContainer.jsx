import { useState } from "react";
import { Counter } from "./Counter";

export const CounterContainer = ({ onAdd, stock, initial = 1 }) => {
  const [contador, setContador] = useState(initial);

  const sumar = () => {
    contador < stock ? setContador(contador + 1) : {};
  };

  const restar = () => {
    contador > 1 ? setContador(contador - 1) : {};
  };

  return (
    <Counter contador={contador} sumar={sumar} restar={restar} onAdd={onAdd} />
  );
};
