import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from '../src';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  const [showBasicModal, setShowBasicModal] = useState(false);
  const [showLargeModal, setShowLargeModal] = useState(false);
  const [showStaticModal, setShowStaticModal] = useState(false);
  const [showFormModal, setShowFormModal] = useState(false);

  return (
    <div className="container mt-5">
      <h1 className="mb-4">React Bootstrap Modal MFE Examples</h1>
      
      <div className="row">
        <div className="col-md-6 mb-3">
          <button 
            className="btn btn-primary w-100" 
            onClick={() => setShowBasicModal(true)}
          >
            Basic Modal
          </button>
        </div>
        
        <div className="col-md-6 mb-3">
          <button 
            className="btn btn-success w-100" 
            onClick={() => setShowLargeModal(true)}
          >
            Large Centered Modal
          </button>
        </div>
        
        <div className="col-md-6 mb-3">
          <button 
            className="btn btn-warning w-100" 
            onClick={() => setShowStaticModal(true)}
          >
            Static Backdrop Modal
          </button>
        </div>
        
        <div className="col-md-6 mb-3">
          <button 
            className="btn btn-info w-100" 
            onClick={() => setShowFormModal(true)}
          >
            Form Modal
          </button>
        </div>
      </div>

      {/* Basic Modal */}
      <Modal show={showBasicModal} onHide={() => setShowBasicModal(false)}>
        <ModalHeader onHide={() => setShowBasicModal(false)}>
          Basic Modal
        </ModalHeader>
        <ModalBody>
          <p>This is a basic modal example with default settings.</p>
          <p>You can close it by clicking the X button, clicking outside, or pressing Escape.</p>
        </ModalBody>
        <ModalFooter>
          <button 
            className="btn btn-primary" 
            onClick={() => setShowBasicModal(false)}
          >
            OK
          </button>
        </ModalFooter>
      </Modal>

      {/* Large Centered Modal */}
      <Modal 
        show={showLargeModal} 
        onHide={() => setShowLargeModal(false)}
        size="lg"
        centered
      >
        <ModalHeader onHide={() => setShowLargeModal(false)}>
          Large Centered Modal
        </ModalHeader>
        <ModalBody>
          <p>This modal is large and centered on the screen.</p>
          <p>It demonstrates the <code>size="lg"</code> and <code>centered</code> props.</p>
          <div className="alert alert-info">
            <strong>Note:</strong> This modal is larger than the default size and is vertically centered.
          </div>
        </ModalBody>
        <ModalFooter>
          <button 
            className="btn btn-secondary" 
            onClick={() => setShowLargeModal(false)}
          >
            Cancel
          </button>
          <button 
            className="btn btn-success" 
            onClick={() => setShowLargeModal(false)}
          >
            Save Changes
          </button>
        </ModalFooter>
      </Modal>

      {/* Static Backdrop Modal */}
      <Modal 
        show={showStaticModal} 
        onHide={() => setShowStaticModal(false)}
        backdrop="static"
        keyboard={false}
      >
        <ModalHeader>
          Static Backdrop Modal
        </ModalHeader>
        <ModalBody>
          <p>This modal cannot be closed by clicking outside or pressing escape.</p>
          <p>You must use the button below to close it.</p>
          <div className="alert alert-warning">
            <strong>Warning:</strong> This modal has a static backdrop and disabled keyboard escape.
          </div>
        </ModalBody>
        <ModalFooter>
          <button 
            className="btn btn-primary" 
            onClick={() => setShowStaticModal(false)}
          >
            I Understand
          </button>
        </ModalFooter>
      </Modal>

      {/* Form Modal */}
      <Modal show={showFormModal} onHide={() => setShowFormModal(false)}>
        <ModalHeader onHide={() => setShowFormModal(false)}>
          User Information
        </ModalHeader>
        <ModalBody>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input 
                type="text" 
                className="form-control" 
                id="name" 
                placeholder="Enter your full name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input 
                type="email" 
                className="form-control" 
                id="email" 
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea 
                className="form-control" 
                id="message" 
                rows={3}
                placeholder="Enter your message"
              ></textarea>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <button 
            className="btn btn-secondary" 
            onClick={() => setShowFormModal(false)}
          >
            Cancel
          </button>
          <button 
            className="btn btn-primary" 
            onClick={() => setShowFormModal(false)}
          >
            Submit
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default App; 