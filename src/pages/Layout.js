import { Outlet } from 'react-router-dom'; // Import Outlet để hiển thị các trang con của route
import { useDispatch, useSelector } from 'react-redux'; // Import các hooks từ react-redux để kết nối với Redux store

import MainNavigate from '../components/MainNavigate'; // Import thành phần điều hướng chính
import Footer from '../components/Footer'; // Import thành phần footer
import Message from '../components/Message'; // Import thành phần chat
import { toggleChatVisibility } from '../store/chatSlice'; // Import action để toggle hiển thị chat

export default function Layout() {
  const dispatch = useDispatch(); // Lấy dispatch từ Redux để dispatch các actions
  const isChatVisible = useSelector((state) => state.chat.isChatVisible); // Lấy trạng thái hiển thị chat từ Redux store

  return (
    <>
      <MainNavigate /> {/* Thành phần điều hướng chính */}
      <main className="position-relative">
        <Outlet /> {/* Outlet sẽ hiển thị các trang con */}
        {/* Hiển thị thành phần Message nếu isChatVisible là true */}
        {isChatVisible && <Message />}
        {/* Nút để toggle hiển thị chat */}
        <button
          className="messeger"
          onClick={() => dispatch(toggleChatVisibility())}
        >
          <i className="bi bi-messenger fs-5"></i>
        </button>
      </main>
      {/* Thành phần footer */}
      <Footer />
    </>
  );
}
