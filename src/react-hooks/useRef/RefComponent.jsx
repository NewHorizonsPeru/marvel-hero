import { useRef } from 'react';

const RefComponent = () => {
  const refMessage = useRef(null);
  const handleSubmit = () => {
    const messageValue = refMessage.current?.value;
    alert(messageValue);
  };
  return (
    <div className="container">
      <div className="row">
        <input
          type="text"
          name="message"
          className="form-control"
          placeholder="Ingrese el mensaje"
          ref={refMessage}
        />
        <button className="btn btn-primary" onClick={handleSubmit}>
          Enviar
        </button>
      </div>
    </div>
  );
};

export default RefComponent;
