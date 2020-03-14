import React, { useState } from 'react';
import './App.css';
import Modal from './components/Modal/Modal';

function App() {
  const [showModal, setShowModal] = useState(false);

  const launchModal = () => {
    console.log("launchModal")
    setShowModal(true);
  }

  const hideModal = () => {
    setShowModal(false);
  }

  const submitAndClose = () => {
    setShowModal(false);
  }

  return (
    <div id="wrapper" className="container">
      <button type="button" className="btn btn-primary" onClick={launchModal}>
        Open Modal
      </button>
      <Modal show={showModal} close={hideModal}>
        <div className="modal-header">
          <h4 className="modal-title">
              Modal title
          </h4>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={hideModal}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        
        <div className="modal-body">
        </div>
        
        <div className="modal-footer">
          <button type="button" class="btn btn-outline-info" onClick={hideModal}>Close</button>
          <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={submitAndClose}>
            Submit
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default App;
