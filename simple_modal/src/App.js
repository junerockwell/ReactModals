import React, { useState } from 'react';
import './App.css';
import Modal from './components/Modal/Modal';

function App() {
  const [modal, setModal] = useState(false);

  const showModal = () => {
    setModal(true);
    console.log(modal)
  }

  const hideModal = () => {
    setModal(false);
  }
  return (
    <div className="App">
      <h1>React Modal</h1>
      <Modal show={modal} handleClose={hideModal}>
        <p>Modal</p>
        <p>Data</p>
      </Modal>
      <button type="button" onClick={showModal}>
        Open
      </button>
    </div>
  );
}

export default App;
