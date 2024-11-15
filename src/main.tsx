import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ProductsManagement from './context/ProductsMenagement.tsx'
import ReceiptsProvider from './context/ReceiptsProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProductsManagement>
      <ReceiptsProvider>
        <App />
      </ReceiptsProvider>
    </ProductsManagement>
  </StrictMode>,
)
