# React Bootstrap Modal MFE

A lightweight, reusable React modal component built with Bootstrap for micro frontend architecture. This component provides a clean, accessible modal implementation that can be easily integrated into any React application.

## Features

- 🎯 **Micro Frontend Ready**: Designed for micro frontend architecture
- 🎨 **Bootstrap Styling**: Built with Bootstrap 5 for consistent design
- ♿ **Accessible**: Full ARIA support and keyboard navigation
- 📱 **Responsive**: Works seamlessly across all device sizes
- 🔧 **TypeScript**: Full TypeScript support with type definitions
- 🎛️ **Customizable**: Flexible props for various use cases
- 🚀 **Lightweight**: Minimal bundle size with tree-shaking support

## Installation

```bash
npm install react-bootstrap-modal-mfe
```

## Peer Dependencies

This package requires the following peer dependencies:

```json
{
  "react": "^16.8.0 || ^17.0.0 || ^18.0.0",
  "react-dom": "^16.8.0 || ^17.0.0 || ^18.0.0",
  "bootstrap": "^5.0.0"
}
```

## Quick Start

```jsx
import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'react-bootstrap-modal-mfe';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button 
        className="btn btn-primary" 
        onClick={() => setShowModal(true)}
      >
        Open Modal
      </button>

      <Modal 
        show={showModal} 
        onHide={() => setShowModal(false)}
        size="lg"
        centered
      >
        <ModalHeader onHide={() => setShowModal(false)}>
          Modal Title
        </ModalHeader>
        <ModalBody>
          <p>This is the modal content.</p>
        </ModalBody>
        <ModalFooter>
          <button 
            className="btn btn-secondary" 
            onClick={() => setShowModal(false)}
          >
            Close
          </button>
          <button className="btn btn-primary">
            Save Changes
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
```

## API Reference

### Modal

The main modal container component.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `show` | `boolean` | - | Controls modal visibility |
| `onHide` | `() => void` | - | Callback when modal should close |
| `size` | `'sm' \| 'lg' \| 'xl'` | - | Modal size |
| `centered` | `boolean` | `false` | Center modal vertically |
| `backdrop` | `boolean \| 'static'` | `true` | Backdrop behavior |
| `keyboard` | `boolean` | `true` | Enable escape key to close |
| `className` | `string` | `''` | Additional CSS classes |
| `children` | `React.ReactNode` | - | Modal content |
| `id` | `string` | - | Modal ID for accessibility |
| `aria-labelledby` | `string` | - | ARIA label reference |
| `aria-describedby` | `string` | - | ARIA description reference |

### ModalHeader

The modal header component with title and close button.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | - | Header content (usually title) |
| `onHide` | `() => void` | - | Close button callback |
| `closeButton` | `boolean` | `true` | Show close button |
| `className` | `string` | `''` | Additional CSS classes |
| `id` | `string` | - | Header ID |

### ModalBody

The modal body component for main content.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | - | Body content |
| `className` | `string` | `''` | Additional CSS classes |
| `id` | `string` | - | Body ID |

### ModalFooter

The modal footer component for action buttons.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | - | Footer content (usually buttons) |
| `className` | `string` | `''` | Additional CSS classes |
| `id` | `string` | - | Footer ID |

## Examples

### Basic Modal

```jsx
<Modal show={showModal} onHide={() => setShowModal(false)}>
  <ModalHeader onHide={() => setShowModal(false)}>
    Basic Modal
  </ModalHeader>
  <ModalBody>
    <p>This is a basic modal example.</p>
  </ModalBody>
  <ModalFooter>
    <button className="btn btn-primary">OK</button>
  </ModalFooter>
</Modal>
```

### Large Centered Modal

```jsx
<Modal 
  show={showModal} 
  onHide={() => setShowModal(false)}
  size="lg"
  centered
>
  <ModalHeader onHide={() => setShowModal(false)}>
    Large Centered Modal
  </ModalHeader>
  <ModalBody>
    <p>This modal is large and centered on the screen.</p>
  </ModalBody>
  <ModalFooter>
    <button className="btn btn-secondary">Cancel</button>
    <button className="btn btn-primary">Save</button>
  </ModalFooter>
</Modal>
```

### Static Backdrop Modal

```jsx
<Modal 
  show={showModal} 
  onHide={() => setShowModal(false)}
  backdrop="static"
  keyboard={false}
>
  <ModalHeader>
    Static Backdrop Modal
  </ModalHeader>
  <ModalBody>
    <p>This modal cannot be closed by clicking outside or pressing escape.</p>
  </ModalBody>
  <ModalFooter>
    <button className="btn btn-primary" onClick={() => setShowModal(false)}>
      I Understand
    </button>
  </ModalFooter>
</Modal>
```

### Form Modal

```jsx
<Modal show={showModal} onHide={() => setShowModal(false)}>
  <ModalHeader onHide={() => setShowModal(false)}>
    User Information
  </ModalHeader>
  <ModalBody>
    <form>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" className="form-control" id="name" />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" className="form-control" id="email" />
      </div>
    </form>
  </ModalBody>
  <ModalFooter>
    <button className="btn btn-secondary" onClick={() => setShowModal(false)}>
      Cancel
    </button>
    <button className="btn btn-primary">Submit</button>
  </ModalFooter>
</Modal>
```

## Micro Frontend Integration

This component is designed to work seamlessly in micro frontend architectures. Here's how to integrate it:

### Module Federation (Webpack 5)

```javascript
// webpack.config.js
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: 'modalMfe',
      filename: 'remoteEntry.js',
      exposes: {
        './Modal': './src/components/Modal',
        './ModalHeader': './src/components/ModalHeader',
        './ModalBody': './src/components/ModalBody',
        './ModalFooter': './src/components/ModalFooter',
      },
      shared: {
        react: { singleton: true },
        'react-dom': { singleton: true },
        bootstrap: { singleton: true }
      }
    })
  ]
};
```

### Single-SPA

```javascript
// root-config.js
import { registerApplication } from 'single-spa';

registerApplication({
  name: 'modal-mfe',
  app: () => import('react-bootstrap-modal-mfe'),
  activeWhen: '/modal'
});
```

## Development

### Building

```bash
npm run build
```

### Development Mode

```bash
npm run dev
```

### Testing

```bash
npm test
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Author

**Dj-krishna-3** - [GitHub Profile](https://github.com/Dj-krishna-3)

Full-stack developer passionate about creating reusable components and micro frontend architecture.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you encounter any issues or have questions, please [open an issue](https://github.com/Dj-krishna-3/react-bootstrap-modal-mfe/issues) on GitHub. 