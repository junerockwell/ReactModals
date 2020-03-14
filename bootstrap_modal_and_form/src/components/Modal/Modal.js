import React from 'react';
import './Modal.css';

export default function Modal({ show, close, children}) {
    const showHideClassName = show ? "d-block" : "d-none";

    return (
        <div className={`modal modal-mask ${showHideClassName}`}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                { children }
                </div>
            </div>
        </div>
    );
}