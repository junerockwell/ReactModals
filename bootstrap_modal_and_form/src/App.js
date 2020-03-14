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
              Some Entry
          </h4>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={hideModal}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        
        <form className="container">
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <label for="exampleFormControlSelect1">Example select</label>
                <select className="form-control" id="exampleFormControlSelect1">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <label for="exampleFormControlSelect1">Example select 2</label>
                <select className="form-control" id="exampleFormControlSelect1">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-9">
              <div className="form-group">
                <label for="exampleFormControlTextarea1">Example textarea</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
              </div>
            </div>
            <div className="col-3">
              <div className="form-group">
                <label for="exampleFormControlTextarea1">Time</label>
                <input type="number" className="form-control form-control-lg" />
              </div>
            </div>
          </div>
        </form>
        
        <div className="modal-footer justify-content-start">
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
