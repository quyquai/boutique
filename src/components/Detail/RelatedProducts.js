import { useEffect, useState } from 'react';
import { formatPrice } from '../../util/formatPrice'; // Import hàm formatPrice từ util/formatPrice.js

import classes from './RelatedProducts.module.css'; // Import các class CSS từ file RelatedProducts.module.css

export default function RelatedProducts({ product }) {
  const [relatedProducts, setRelatedProducts] = useState([]); // Khởi tạo state relatedProducts để lưu trữ danh sách sản phẩm liên quan

  useEffect(() => {
    async function fetchRelatedProducts() {
      const response = await fetch(
        // Fetch dữ liệu từ API
        'https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74',
      );
      const products = await response.json(); // Chuyển đổi dữ liệu nhận được thành định dạng JSON
      const related = products.filter(
        // Lọc ra các sản phẩm có cùng danh mục với sản phẩm hiện tại nhưng khác với sản phẩm hiện tại
        (item) =>
          item.category === product.category &&
          item._id.$oid !== product._id.$oid,
      );
      setRelatedProducts(related); // Cập nhật state relatedProducts với danh sách sản phẩm liên quan
    }

    fetchRelatedProducts(); // Gọi hàm fetchRelatedProducts khi component được mount hoặc sản phẩm được thay đổi
  }, [product]);

  return (
    <div className={`${classes.related} mb-5`}>
      <h5 className="text-uppercase fst-italic mb-4">Related Products</h5>
      <div className="related-products">
        {relatedProducts.map((item) => (
          <div key={item._id.$oid} className="related-product-item">
            <img className="img-fluid" src={item.img1} alt={item.name} />
            <h6 className="text-center fst-italic mt-4 lh-base">{item.name}</h6>
            <p className="text-center card-text fst-italic text-body-tertiary">
              {formatPrice(product.price)} VND
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
