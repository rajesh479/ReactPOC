import React from 'react';

export interface ModalBodyProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const ModalBody: React.FC<ModalBodyProps> = ({
  children,
  className = '',
  id,
}) => {
  return (
    <div className={`modal-body ${className}`} id={id}>
      {children}
    </div>
  );
};

export default ModalBody; 