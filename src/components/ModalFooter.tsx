import React from 'react';

export interface ModalFooterProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const ModalFooter: React.FC<ModalFooterProps> = ({
  children,
  className = '',
  id,
}) => {
  return (
    <div className={`modal-footer ${className}`} id={id}>
      {children}
    </div>
  );
};

export default ModalFooter; 