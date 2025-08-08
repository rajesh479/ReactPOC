import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Modal from '../Modal';
import ModalHeader from '../ModalHeader';
import ModalBody from '../ModalBody';
import ModalFooter from '../ModalFooter';

describe('Modal Component', () => {
  const mockOnHide = jest.fn();

  beforeEach(() => {
    mockOnHide.mockClear();
  });

  it('renders modal when show is true', () => {
    render(
      <Modal show={true} onHide={mockOnHide}>
        <ModalHeader onHide={mockOnHide}>Test Modal</ModalHeader>
        <ModalBody>Test content</ModalBody>
        <ModalFooter>Test footer</ModalFooter>
      </Modal>
    );

    expect(screen.getByText('Test Modal')).toBeInTheDocument();
    expect(screen.getByText('Test content')).toBeInTheDocument();
    expect(screen.getByText('Test footer')).toBeInTheDocument();
  });

  it('does not render modal when show is false', () => {
    render(
      <Modal show={false} onHide={mockOnHide}>
        <ModalHeader onHide={mockOnHide}>Test Modal</ModalHeader>
        <ModalBody>Test content</ModalBody>
        <ModalFooter>Test footer</ModalFooter>
      </Modal>
    );

    expect(screen.queryByText('Test Modal')).not.toBeInTheDocument();
  });

  it('calls onHide when close button is clicked', () => {
    render(
      <Modal show={true} onHide={mockOnHide}>
        <ModalHeader onHide={mockOnHide}>Test Modal</ModalHeader>
        <ModalBody>Test content</ModalBody>
      </Modal>
    );

    const closeButton = screen.getByLabelText('Close');
    fireEvent.click(closeButton);

    expect(mockOnHide).toHaveBeenCalledTimes(1);
  });

  it('calls onHide when escape key is pressed', () => {
    render(
      <Modal show={true} onHide={mockOnHide}>
        <ModalHeader onHide={mockOnHide}>Test Modal</ModalHeader>
        <ModalBody>Test content</ModalBody>
      </Modal>
    );

    fireEvent.keyDown(document, { key: 'Escape' });

    expect(mockOnHide).toHaveBeenCalledTimes(1);
  });

  it('does not call onHide when escape key is pressed and keyboard is disabled', () => {
    render(
      <Modal show={true} onHide={mockOnHide} keyboard={false}>
        <ModalHeader onHide={mockOnHide}>Test Modal</ModalHeader>
        <ModalBody>Test content</ModalBody>
      </Modal>
    );

    fireEvent.keyDown(document, { key: 'Escape' });

    expect(mockOnHide).not.toHaveBeenCalled();
  });

  it('applies size class correctly', () => {
    render(
      <Modal show={true} onHide={mockOnHide} size="lg">
        <ModalHeader onHide={mockOnHide}>Test Modal</ModalHeader>
        <ModalBody>Test content</ModalBody>
      </Modal>
    );

    const modalDialog = document.querySelector('.modal-dialog');
    expect(modalDialog).toHaveClass('modal-lg');
  });

  it('applies centered class correctly', () => {
    render(
      <Modal show={true} onHide={mockOnHide} centered>
        <ModalHeader onHide={mockOnHide}>Test Modal</ModalHeader>
        <ModalBody>Test content</ModalBody>
      </Modal>
    );

    const modalDialog = document.querySelector('.modal-dialog');
    expect(modalDialog).toHaveClass('modal-dialog-centered');
  });
}); 