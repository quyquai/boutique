import { useDispatch, useSelector } from 'react-redux';
import {
  decreaseQuantity,
  deleteCart,
  increaseQuantity,
} from '../../store/cartSlice'; // Import các action để thao tác trên giỏ hàng từ Redux slice
import { formatPrice } from '../../util/formatPrice'; // Import hàm để định dạng giá
import { Link } from 'react-router-dom'; // Import Link từ react-router-dom để tạo liên kết
import { calculateItemTotal } from '../../util/total'; // Import hàm để tính tổng tiền cho từng sản phẩm trong giỏ hàng

export default function TableCart() {
  const cartItems = useSelector((state) => state.cart.listCart); // Lấy danh sách sản phẩm trong giỏ hàng từ Redux store
  const dispatch = useDispatch(); // Sử dụng hook useDispatch để gửi các action đến Redux store

  // Hàm xử lý tăng số lượng sản phẩm
  const handleIncreaseQuantity = (itemId) => {
    dispatch(increaseQuantity(itemId));
  };

  // Hàm xử lý giảm số lượng sản phẩm
  const handleDecreaseQuantity = (itemId) => {
    dispatch(decreaseQuantity(itemId));
  };

  // Hàm xử lý xóa sản phẩm khỏi giỏ hàng
  const handleDeleteItem = (itemId) => {
    dispatch(deleteCart(itemId));
  };

  return (
    <>
      <div className="row text-uppercase text-center bg-body-tertiary py-2 fst-italic fw-medium rounded-1">
        <div className="col-1">image</div>
        <div className="col-3">product</div>
        <div className="col-2">price</div>
        <div className="col-2">quantity</div>
        <div className="col-2">total</div>
        <div className="col-2">remove</div>
      </div>
      <div className="mb-5 fst-italic">
        {cartItems.map((item) => (
          <div key={item._id.$oid} className="row text-center py-2">
            <div className="col-1">
              <img className="img-fluid" src={item.img1} alt={item.name} />
            </div>
            <div className="col-3 fw-medium">{item.name}</div>
            <div className="col-2 text-body-tertiary">
              {formatPrice(item.price)} VND
            </div>
            <div className="col-2">
              <button
                className="border-0 bg-white"
                type="button"
                onClick={() => {
                  handleDecreaseQuantity(item._id.$oid);
                }}
              >
                <i className="bi bi-caret-left-fill"></i>
              </button>
              {item.quantity}
              <button
                className="border-0 bg-white"
                type="button"
                onClick={() => handleIncreaseQuantity(item._id.$oid)}
              >
                <i className="bi bi-caret-right-fill"></i>
              </button>
            </div>
            <div className="col-2 text-body-tertiary">
              {formatPrice(calculateItemTotal(item))} VND
            </div>
            <div className="col-2">
              <button
                className="border-0 bg-white"
                onClick={() => handleDeleteItem(item._id.$oid)}
              >
                <i className="bi bi-trash"></i>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="row bg-body-tertiary rounded-1">
        <div className="col p-4">
          <Link to="/shop" className="text-decoration-none text-secondary">
            <i className="bi bi-arrow-left text-secondary me-2"></i>
            Continue shopping
          </Link>
        </div>
        <div className="col text-end p-4">
          <Link
            to="/checkout"
            className="text-decoration-none text-secondary px-4 py-2 border"
          >
            Proceed to checkout
            <i className="bi bi-arrow-right text-secondary ms-2"></i>
          </Link>
        </div>
      </div>
    </>
  );
}
