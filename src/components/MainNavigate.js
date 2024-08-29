import { Form, NavLink } from 'react-router-dom'; // Import các component từ react-router-dom
import 'bootstrap/dist/css/bootstrap.css'; // Import CSS của Bootstrap
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import CSS của Bootstrap Icons
import { useSelector } from 'react-redux'; // Import hook để lấy state từ Redux store
import { createSelector } from '@reduxjs/toolkit'; // Import createSelector từ Redux Toolkit để tạo selector

import classes from './MainNavigate.module.css'; // Import CSS cục bộ cho component

// Tạo selector để lấy dữ liệu login từ state
const onLoginData = createSelector(
  (state) => state.user.isLoggedIn,
  (state) => state.user.user,
  (isLoggedIn, user) => ({ isLoggedIn, user }),
);

export default function MainNavigate() {
  const { isLoggedIn, user } = useSelector(onLoginData); // Sử dụng hook useSelector để lấy dữ liệu từ Redux store

  return (
    <nav className={`${classes.nav} container px-3`}>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Shop
          </NavLink>
        </li>
        <li>
          <h2>boutique</h2>
        </li>
        <li>
          <NavLink to="/cart" className={classes.navlink}>
            <i className="bi bi-cart-check-fill me-1 text-body-tertiary"></i>
            Cart
          </NavLink>
        </li>
        {/* Hiển thị nút Login nếu chưa đăng nhập */}
        {!isLoggedIn && (
          <li>
            <NavLink to="/login" className={classes.navlink}>
              Login
            </NavLink>
          </li>
        )}
        {/* Hiển thị thông tin người dùng và nút Logout nếu đã đăng nhập */}
        {isLoggedIn && (
          <li>
            <Form method="post" action="/logout">
              <button className={classes.btn_user}>
                <i className="bi bi-person-fill me-1 text-body-tertiary"></i>
                <span>{user.name}</span>
                <i
                  className={`${classes.icon_down} bi bi-caret-down-fill text-body-tertiary`}
                ></i>
                (Logout)
              </button>
            </Form>
          </li>
        )}
      </ul>
    </nav>
  );
}
