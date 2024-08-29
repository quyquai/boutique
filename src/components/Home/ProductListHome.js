import { useLoaderData } from 'react-router-dom'; // Import hook để lấy dữ liệu từ loader
import 'bootstrap/dist/css/bootstrap.css'; // Import CSS của Bootstrap
import { useDispatch } from 'react-redux'; // Import hook để gửi action đến Redux store

import classes from './ProductListHome.module.css'; // Import CSS cục bộ cho component
import { showPopup } from '../../store/popupSlice'; // Import action showPopup từ slice popupSlice
import Popup from '../Popup'; // Import component Popup
import { formatPrice } from '../../util/formatPrice'; // Import hàm formatPrice từ util/formatPrice

export default function ProductListHome() {
  const dispatch = useDispatch(); // Khởi tạo dispatch để gửi action
  const products = useLoaderData(); // Lấy dữ liệu sản phẩm từ loader

  return (
    <>
      <Popup />
      <div className="container">
        <div>
          <p className="text-uppercase text-body-tertiary fst-italic mb-1">
            made the hard way
          </p>
          <h4 className="text-uppercase text-body fst-italic fw-normal mb-4">
            top trending products
          </h4>
        </div>
        <div className={classes.row}>
          {products.map((product, index) => (
            <div key={index} className={classes.product}>
              <button onClick={() => dispatch(showPopup(product))}>
                <img src={product.img1} alt={product.name} />
              </button>
              <div>
                <h6 className="my-2 lh-base fst-italic">{product.name}</h6>
                <p className="fst-italic text-body-tertiary">
                  {formatPrice(product.price)} VND
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// Loader function để fetch dữ liệu từ API
export async function loader() {
  const response = await fetch(
    'https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74',
  );
  if (!response.ok) {
    throw new Error('Failed to fetch data'); // Nếu fetch không thành công, throw error
  }
  const data = await response.json(); // Chuyển đổi response thành JSON
  return data; // Trả về dữ liệu
}
