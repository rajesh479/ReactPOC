import React from 'react';

export interface ModalHeaderProps {
  children: React.ReactNode;
  onHide?: () => void;
  closeButton?: boolean;
  className?: string;
  id?: string;
}

const ModalHeader: React.FC<ModalHeaderProps> = ({
  children,
  onHide,
  closeButton = true,
  className = '',
  id,
}) => {
  return (
    <div className={`modal-header ${className}`} id={id}>
      <h5 className="modal-title">{children}</h5>
      {closeButton && onHide && (
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={onHide}
        ></button>
      )}
    </div>
  );
};

export default ModalHeader; 