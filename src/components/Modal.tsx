import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export interface ModalProps {
  show: boolean;
  onHide: () => void;
  size?: 'sm' | 'lg' | 'xl';
  centered?: boolean;
  backdrop?: boolean | 'static';
  keyboard?: boolean;
  className?: string;
  children: React.ReactNode;
  id?: string;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
}

const Modal: React.FC<ModalProps> = ({
  show,
  onHide,
  size,
  centered = false,
  backdrop = true,
  keyboard = true,
  className = '',
  children,
  id,
  'aria-labelledby': ariaLabelledby,
  'aria-describedby': ariaDescribedby,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (keyboard && event.key === 'Escape') {
        onHide();
      }
    };

    const handleBackdropClick = (event: MouseEvent) => {
      if (backdrop === true && event.target === modalRef.current) {
        onHide();
      }
    };

    if (show) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('click', handleBackdropClick);
      document.body.classList.add('modal-open');
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleBackdropClick);
      document.body.classList.remove('modal-open');
    };
  }, [show, onHide, keyboard, backdrop]);

  if (!show) return null;

  const sizeClass = size ? `modal-${size}` : '';
  const centeredClass = centered ? 'modal-dialog-centered' : '';

  return (
    <>
      <div
        className="modal fade show"
        style={{ display: 'block' }}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby={ariaLabelledby}
        aria-describedby={ariaDescribedby}
        id={id}
      >
        <div
          ref={modalRef}
          className={`modal-dialog ${sizeClass} ${centeredClass} ${className}`}
          role="document"
        >
          <div className="modal-content">
            {children}
          </div>
        </div>
      </div>
      {backdrop && (
        <div className="modal-backdrop fade show"></div>
      )}
    </>
  );
};

export default Modal; 