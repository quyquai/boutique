import { useSelector } from 'react-redux'; // Import hook useSelector để lấy thông tin giỏ hàng từ Redux store
import { formatPrice } from '../../util/formatPrice'; // Import hàm để định dạng giá
import { calculateTotal, calculateItemTotal } from '../../util/total'; // Import hàm để tính tổng tiền của giỏ hàng

export default function YourOder() {
  const cartItems = useSelector((state) => state.cart.listCart); // Lấy danh sách sản phẩm trong giỏ hàng từ Redux store

  return (
    <div className="bg-body-tertiary fst-italic p-4">
      <h5 className="text-uppercase m-3">your oder</h5>
      {/* Hiển thị các mục trong đơn hàng */}
      {cartItems.map((item) => (
        <div key={item._id.$oid} className="row border-bottom mx-3">
          <p className="col-6 px-0 mb-2 fw-medium">{item.name}</p>
          <p className="col-6 text-end px-0">
            {formatPrice(calculateItemTotal(item))} VND x {item.quantity}
          </p>
        </div>
      ))}
      <div className="row mx-0 px-3 mt-3">
        <p className="col-4 text-uppercase fw-medium px-0">total</p>
        <p className="col-8 text-end fs-5 px-0">
          {formatPrice(calculateTotal(cartItems))}VND
        </p>
      </div>
    </div>
  );
}
