import * as React from "react";
import AdminPage from "./AdminPage";
import ProductsPage from "./ProductsPage";
import Header from "./Header";
import ProductPage from "./ProductPage";
import {
  BrowserRouter as Router,
  Route,
  Routes as RouterRoutes,
} from "react-router-dom";

const ProductPageWrapper: React.FC = () => {
  return <ProductPage />;
};

const Routes: React.FC = () => {
  return (
    <Router>
      <Header />
      <RouterRoutes>
        <Route path="/products" element={<ProductsPage />} />
        {/* Use the wrapper component */}
        <Route path="/products/:id" element={<ProductPageWrapper />} />
        <Route path="/admin" element={<AdminPage />} />
      </RouterRoutes>
    </Router>
  );
};

export default Routes;
