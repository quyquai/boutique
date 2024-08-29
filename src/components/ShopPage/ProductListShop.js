import React from 'react'; // Import React
import { useNavigate } from 'react-router-dom'; // Import hook useNavigate từ thư viện react-router-dom

import { formatPrice } from '../../util/formatPrice'; // Import hàm formatPrice
import classes from './ProductListShop.module.css'; // Import CSS module cho component

export default function ProductListShop({ products }) {
  const navigate = useNavigate(); // Sử dụng hook useNavigate để chuyển hướng đến trang chi tiết sản phẩm

  // Hàm xử lý khi người dùng click vào sản phẩm
  const handleProductClick = (productId) => {
    navigate(`/detail/${productId}`); // Chuyển hướng đến trang chi tiết sản phẩm với productId
  };

  return (
    <>
      <div className="row align-items-center mt-3">
        <div className="col">
          <input
            className={`${classes.input} border p-2`}
            placeholder="Enter Search Here!"
          />
        </div>
        <div className="col text-end">
          <select>
            <option value="Default sorting">Default sorting</option>
          </select>
        </div>
      </div>
      <div className="row mt-3">
        {products.map((product) => (
          <div className="col-4 mb-4" key={product._id.$oid}>
            <div
              className={classes.card}
              onClick={() => handleProductClick(product._id.$oid)}
            >
              <img
                src={product.img1}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body text-center">
                <h6 className="card-title fst-italic mb-2">{product.name}</h6>

                <p className="card-text fst-italic text-body-tertiary">
                  {formatPrice(product.price)} VND
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
