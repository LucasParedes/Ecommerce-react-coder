export const ItemListContainer = ({ greeting }) => {
  return (
    <div>
      <h1
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
        }}
      >
        {greeting}
      </h1>
    </div>
  );
};
