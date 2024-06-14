import "./productCard.css";

export const ProductCard = ({ marca, modelo, precio, img }) => {
  return (
    <div className="cardContainer">
      <h1 className="brand">{marca}</h1>
      <h2 className="model">{modelo}</h2>
      <img className="imgCard" src={img} alt={`${marca} ${modelo}`} />
      <h3 className="price">${precio}</h3>
      <div>
        <button autofocus> Comprar </button>
        <button> Consultar Mas </button>
      </div>
    </div>
  );
};
