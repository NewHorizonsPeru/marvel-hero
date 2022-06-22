import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/Modal.css';

class Modal extends React.Component {
  render() {
    const modalContainer = document.getElementById('modal');
    if (!this.props.modalIsOpen) {
      return null;
    }
    return ReactDOM.createPortal(
      <div className="modal">
        <div className="modal-container">{this.props.children}</div>
      </div>,
      modalContainer
    );
  }
}

export default Modal;
