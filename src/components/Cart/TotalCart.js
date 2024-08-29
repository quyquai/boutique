import { useSelector } from 'react-redux'; // Import hook useSelector để lấy thông tin giỏ hàng từ Redux store

import { formatPrice } from '../../util/formatPrice'; // Import hàm để định dạng
import { calculateTotal } from '../../util/total'; // Import hàm để tính tổng tiền của giỏ hàng

export default function TotalCart() {
  const cartItems = useSelector((state) => state.cart.listCart); // Lấy danh sách sản phẩm trong giỏ hàng từ Redux store

  return (
    <div className="bg-body-tertiary fst-italic p-4 rounded-1">
      <h5 className="text-uppercase">cart total</h5>
      {/* Phần hiển thị tổng giỏ hàng */}
      <div className="row border-bottom mx-0">
        <p className="col-4 text-uppercase px-0 mb-2">subtotal</p>
        <p className="col-8 text-end text-body-tertiary px-0">
          {/* Hiển thị tổng tiền của giỏ hàng */}
          {formatPrice(calculateTotal(cartItems))} VND
        </p>
      </div>
      <div className="row mx-0 mt-3">
        <p className="col-4 text-uppercase px-0">subtotal</p>
        <p className="col-8 text-end fs-5 text-body-tertiary px-0">
          {/* Hiển thị tổng tiền của giỏ hàng */}
          {formatPrice(calculateTotal(cartItems))} VND
        </p>
      </div>
      <input className="w-100 p-1 border" placeholder="Enter your coupon" />
      <button className="w-100 mb-4 button">
        <i className="bi bi-gift-fill me-2"></i>Apply coupon
      </button>
    </div>
  );
}
