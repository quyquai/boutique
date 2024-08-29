import { useDispatch } from 'react-redux';
import { useState } from 'react';
import classes from './Quantity.module.css'; // Import các lớp CSS từ file module.css
import { addCart } from '../../store/cartSlice'; // Import hành động addCart từ slice giỏ hàng

export default function Quantity({ product }) {
  const dispatch = useDispatch(); // Hook useDispatch để gửi hành động đến Redux store
  const [quantity, setQuantity] = useState(1); // Hook useState để theo dõi số lượng sản phẩm và cập nhật nó
  const [purchaseMessage, setPurchaseMessage] = useState(''); // Hook useState để theo dõi thông báo mua hàng

  // Hàm xử lý khi người dùng nhấn nút "Add to cart"
  const handleAddToCart = () => {
    const productWithQuantity = { ...product, quantity }; // Tạo đối tượng sản phẩm với số lượng
    dispatch(addCart(productWithQuantity)); // Gửi hành động addCart với sản phẩm và số lượng đến Redux store
    setPurchaseMessage('Product added to cart successfully!'); // Thiết lập thông báo mua hàng thành công
  };

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => Math.min(prevQuantity + 1, 5)); // Tăng số lượng lên 1, giới hạn tối đa là 5
  };

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1)); // Giảm số lượng đi 1, giới hạn tối thiểu là 1
  };

  return (
    <>
      {/* Form nhập số lượng sản phẩm */}
      <form className={classes.form} onSubmit={(e) => e.preventDefault()}>
        <label className="fst-italic text-body-tertiary">QUANTITY</label>
        <button
          className={classes.btn_icon}
          type="button"
          onClick={decreaseQuantity}
        >
          <i className="bi bi-caret-left-fill"></i>
        </button>
        <input id="amount" min="1" max="5" step="1" value={quantity} readOnly />
        <button
          className={classes.btn_icon}
          type="button"
          onClick={increaseQuantity}
        >
          <i className="bi bi-caret-right-fill"></i>
        </button>
        <button className="button" type="button" onClick={handleAddToCart}>
          Add to cart
        </button>
      </form>
      {/* Hiển thị thông báo mua hàng */}
      {purchaseMessage && (
        <p className="mt-3 text-primary">{purchaseMessage}</p>
      )}
    </>
  );
}
