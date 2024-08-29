import React, { Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Layout from './pages/Layout';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/Home';
import ShopPage, { shopLoader } from './pages/Shop';
import DetailPage, { productLoader } from './pages/Detail';
import CartPage from './pages/Cart';
import CheckoutPage from './pages/Checkout';
import LoginPage from './pages/Login';
import { tokenLoader } from './util/auth';

// Import  actions
import { action as logoutAction } from './pages/Logout';
import { actions as authAction } from './pages/Login';
import { loader } from './components/Home/ProductListHome';

// Cấu hình router
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Thành phần layout chung
    errorElement: <ErrorPage />, // Thành phần hiển thị khi có lỗi
    loader: tokenLoader, // Loader để kiểm tra token
    children: [
      {
        index: true,
        element: <HomePage />, // Trang chủ
        loader: loader,
      },
      {
        path: 'shop',
        element: <ShopPage />, // Trang cửa hàng
        loader: shopLoader,
      },
      {
        path: 'detail/:productId',
        element: <DetailPage />, // Trang chi tiết sản phẩm
        loader: productLoader,
      },
      { path: 'cart', element: <CartPage /> }, // Trang giỏ hàng
      { path: 'checkout', element: <CheckoutPage /> }, // Trang thanh toán
      { path: 'login', element: <LoginPage />, action: authAction }, // Trang đăng nhập với action xử lý form
      { path: 'logout', action: logoutAction }, // Route xử lý đăng xuất
    ],
  },
]);

function App() {
  return (
    //  Kết nối ứng dụng với Redux store
    <Provider store={store}>
      {/* Hiển thị thông báo khi các trang đang tải */}
      <Suspense fallback={<p className="text-center">Loading...</p>}>
        {/* Cung cấp router cho ứng dụng */}
        <RouterProvider router={router} />
      </Suspense>
    </Provider>
  );
}

export default App;
