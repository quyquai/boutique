import { Form, Link, useActionData, useSearchParams } from 'react-router-dom'; // Import các thành phần và hook từ thư viện react-router-dom.

import Card from '../UI/Card'; // Import component Card từ thư mục UI.
import classes from './Signup.module.css'; // Import các class CSS được module hóa từ file Signup.module.css.

export default function Auth() {
  const error = useActionData(); // Sử dụng hook useActionData để lấy thông tin lỗi từ action.

  const [searchParams] = useSearchParams(); // Sử dụng hook useSearchParams để lấy thông tin từ query parameters trong URL.
  const isLogin = searchParams.get('mode') === 'signup'; // Kiểm tra xem người dùng đang ở chế độ đăng nhập hay đăng ký dựa trên giá trị của tham số "mode" trong URL.

  return (
    <Form method="post" className="py-5">
      {/* Form sẽ được submit bằng phương thức POST. */}
      <Card>
        <h3 className="text-center my-5 fst-italic fw-light">
          {/* Hiển thị tiêu đề dựa trên giá trị của biến isLogin. */}
          {isLogin ? 'Sign Up' : 'Sign In'}
        </h3>
        {/* Hiển thị thông báo lỗi nếu có. */}
        {error && <p className="error">{error.message}</p>}
        <div className="input">
          {isLogin && ( // Hiển thị trường nhập tên đầy đủ nếu đang trong quá trình đăng ký.
            <input
              className="border-bottom"
              name="name"
              type="text"
              placeholder="Full name"
            />
          )}
          <input
            className="border-bottom"
            name="email"
            // type="email"
            placeholder="Email"
          />
          <input
            className="border-bottom"
            name="password"
            type="password"
            placeholder="Password"
          />
          {/* Hiển thị trường nhập số điện thoại nếu đang trong quá trình đăng ký. */}
          {isLogin && <input name="phone" type="text" placeholder="Phone" />}
        </div>
        <button className={classes.button}>
          {/* Hiển thị văn bản trên nút dựa trên giá trị của biến isLogin. */}
          {isLogin ? 'sign up' : 'sign in'}
        </button>
        <p className="text-center my-5">
          {/* Hiển thị văn bản dẫn đến trang đăng ký hoặc đăng nhập tùy thuộc vào giá trị của biến isLogin. */}
          {isLogin ? 'Create an account? ' : 'Login? '}
          <Link
            className="text-decoration-none"
            to={`?mode=${isLogin ? 'login' : 'signup'}`} // Tạo đường dẫn đến trang đăng ký hoặc đăng nhập tùy thuộc vào giá trị của biến isLogin.
          >
            Click
          </Link>
        </p>
      </Card>
    </Form>
  );
}
