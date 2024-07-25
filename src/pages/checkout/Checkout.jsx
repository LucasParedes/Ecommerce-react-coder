import { Form } from "../../components/form/Form";

export const Checkout = ({ orderId, sendForm, handleChange }) => {
  return (
    <div>
      {orderId ? (
        <h2> Gracias por tu compra, tu ticket es : {orderId}</h2>
      ) : (
        <Form sendForm={sendForm} handleChange={handleChange} />
      )}
    </div>
  );
};
