import { redirect } from 'react-router-dom'; // Import hàm redirect từ react-router-dom để chuyển hướng
import { onLogout } from '../store/userSlice'; // Import action creator onLogout từ userSlice để đăng xuất người dùng
import store from '../store/store'; // Import store từ store để dispatch action

export function action() {
  localStorage.removeItem('token'); // Xóa token khỏi localStorage để người dùng không còn được xác thực nữa
  store.dispatch(onLogout()); // Dispatch action onLogout để đăng xuất người dùng khỏi Redux store
  return redirect('/login'); // Chuyển hướng người dùng về trang đăng nhập sau khi đăng xuất
}
