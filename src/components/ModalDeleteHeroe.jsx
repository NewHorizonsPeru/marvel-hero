import React from 'react';

import Modal from './Modal';

function ModalDeleteHeroe(props) {
  return (
    <Modal modalIsOpen={props.modalIsOpen} onCloseModal={props.onCloseModal}>
      <div className="ModalDeleteHeroe">
        <h3>¿Estás seguro?</h3>
        <p>Estas apunto de eliminar un héroe.</p>

        <div>
          <button onClick={props.onDeleteHeroe} className="btn btn-danger mr-4">
            Eliminar
          </button>
          <button onClick={props.onCloseModal} className="btn btn-default">
            Cancelar
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default ModalDeleteHeroe;
