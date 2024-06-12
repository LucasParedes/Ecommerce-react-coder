import "./cartWidget.css";

export const CartWidget = () => {
  const itemCount = 2;

  return (
    <div className="logoCart">
      <img src="/cart.svg" alt="Logo Cart" />
      <span className="badge">{itemCount}</span>
    </div>
  );
};
