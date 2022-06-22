import React from 'react';
import Modal from './Modal';

class ModalSaveHero extends React.Component {
  render() {
    return (
      <Modal modalIsOpen={this.props.modalIsOpen}>
        <div className="modal-child">
          <h3>📢 Mensaje</h3>
          <p>Guardado correctamente! 😃</p>
          <div>
            <button
              className="btn btn-primary"
              onClick={this.props.onPostSaveHero}
            >
              Aceptar
            </button>
          </div>
        </div>
      </Modal>
    );
  }
}

export default ModalSaveHero;
