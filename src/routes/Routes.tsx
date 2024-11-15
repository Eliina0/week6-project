import { Routes as AppRoutes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ProductListPage from '../pages/ProductListPage';
import CartPage from '../pages/CartPage';
import ReceiptsPage from '../pages/ReceiptsPage';

const routeConfig = [
  { path: '/', element: <HomePage /> },
  { path: '/add-product', element: <ProductListPage /> },
  { path: '/cart', element: <CartPage /> },
  { path: '/receipts', element: <ReceiptsPage /> },
];

const Routes = () => {
  return (
    <AppRoutes>
      {routeConfig.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </AppRoutes>
  );
};

export default Routes;
