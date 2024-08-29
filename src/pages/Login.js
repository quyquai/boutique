// Import các hàm và component cần thiết từ thư viện react-router-dom
import { json, redirect } from 'react-router-dom';

import classes from './Login.module.css';
import {
  hasMinLength,
  isEmail,
  isNotEmpty,
  isPassword,
} from '../util/validation'; // Import các hàm validation từ file util/validation
import Auth from '../components/Login/Auth'; // Import component Auth từ file components/Login/Auth
// Import store và action creator từ file store/store và store/userSlice
import store from '../store/store';
import { onLogin } from '../store/userSlice';

export default function LoginPage() {
  return (
    <div className={`container ${classes.img_login}`}>
      <Auth />
    </div>
  );
}

// Hàm xử lý các hành động khi yêu cầu đến trang đăng nhập
export async function actions({ request }) {
  const searchParams = new URL(request.url).searchParams; // Lấy tham số từ URL query
  const mode = searchParams.get('mode') || 'login'; // Xác định chế độ đăng nhập (login) hoặc đăng ký (signup)

  // Kiểm tra xem chế độ có phù hợp không
  if (mode !== 'login' && mode !== 'signup') {
    // Nếu không phù hợp, trả về thông báo lỗi
    throw json({ message: 'Unsupported mode.' }, { status: 422 });
  }

  const users = JSON.parse(localStorage.getItem('userArr')) || []; // Lấy danh sách người dùng từ localStorage hoặc mảng rỗng nếu không có
  const formData = await request.formData(); // Lấy dữ liệu từ biểu mẫu đăng nhập hoặc đăng ký

  if (mode === 'login') {
    // Nếu chế độ là đăng nhập
    const data = {
      email: formData.get('email'),
      password: formData.get('password'),
    };

    // Kiểm tra tính hợp lệ của dữ liệu đăng nhập
    if (!isNotEmpty(data.email)) {
      return json({ message: 'Please enter is valid email' });
    }

    if (!isEmail(data.email)) {
      return json({ message: 'email must have @' });
    }

    if (!isPassword(data.password)) {
      return json({
        message:
          'Password should contain atleast one number and one special character (>=8, <=16)',
      });
    }
    // Tìm kiếm người dùng trong danh sách người dùng
    const user = users.find(
      (u) => u.email === data.email && u.password === data.password,
    );
    if (user) {
      // Nếu tìm thấy thì lưu ,store , token  và chuyển hướng
      store.dispatch(onLogin(user));
      localStorage.setItem('token', JSON.stringify(user));
      alert('Đăng nhập thành công!');
      return redirect('/');
    } else {
      // Nếu không tìm thấy, có thể trả về một thông báo lỗi
      return json({ message: 'Email or password incorrect.' }, { status: 401 });
    }
  } else {
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
      phone: formData.get('phone'),
    };

    // Kiểm tra tính hợp lệ của dữ liệu đăng ký
    if (!isNotEmpty(data.name)) {
      return json({ message: 'Please enter is valid name' });
    }

    if (!isNotEmpty(data.email)) {
      return json({ message: 'Please enter is valid email' });
    }

    if (!isEmail(data.email)) {
      return json({ message: 'email must have @' });
    }

    if (!isPassword(data.password)) {
      return json({
        message:
          'Password should contain atleast one number and one special character (>=8, <=16)',
      });
    }

    if (!isNotEmpty(data.phone)) {
      return json({ message: 'Please enter is valid phone' });
    }

    if (!hasMinLength(data.phone, 10)) {
      return json({ message: 'Phone number must be at least 10 characters' });
    }

    // Tìm kiếm trong localStorage xem có trùng địa chỉ email hay không
    const user = users.find((u) => u.email === data.email);

    if (user) {
      // Nếu có thì thông báo lỗi đã tồn tại
      return json({ message: 'Email already exists' });
    }

    // Trả về thông báo hoặc chuyển hướng tùy thuộc vào kết quả xử lý
    users.push(data);
    localStorage.setItem('userArr', JSON.stringify(users));
    return redirect('/login?mode=login');
  }
}
