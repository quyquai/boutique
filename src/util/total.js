export function getTotalQuantity(quantity) {
  let totalQuantity = 0;
  quantity.forEach((item) => {
    totalQuantity += item.quantity;
  });
  return totalQuantity;
}

export function calculateItemTotal(item) {
  return item.price * item.quantity;
}

// Hàm tính tổng giá trị đơn hàng
export function calculateTotal(cartItems) {
  let total = 0;
  cartItems.forEach((item) => {
    total += item.price * item.quantity;
  });
  return total;
}
