import { useNavigate } from 'react-router-dom'; // Import hook useNavigate từ react-router-dom để điều hướng trang
import 'bootstrap/dist/css/bootstrap.css'; // Import CSS của Bootstrap để sử dụng các lớp CSS của Bootstrap

import imgSmartphone from '../../assets/product_1.png'; // Import hình ảnh cho sản phẩm smartphone
import imgMac from '../../assets/product_2.png'; // Import hình ảnh cho sản phẩm Mac
import imgIpad from '../../assets/product_3.png'; // Import hình ảnh cho sản phẩm iPad
import imgWatch from '../../assets/product_4.png'; // Import hình ảnh cho sản phẩm Watch
import imgAirPord from '../../assets/product_5.png'; // Import hình ảnh cho sản phẩm AirPord
import classes from './Categories.module.css'; // Import CSS module cho Categories component

export default function Categories() {
  const navigate = useNavigate(); // Sử dụng hook useNavigate để tạo hàm điều hướng

  // Hàm xử lý sự kiện khi click vào nút
  const handlerClick = () => {
    navigate('/shop'); // Điều hướng đến trang "/shop" khi click vào nút
  };

  return (
    <>
      <div className="container mb-5">
        <div className="text-center">
          <p className="text-uppercase text-body-tertiary fst-italic mb-1">
            carefully created collections
          </p>
          <h4 className="text-uppercase text-body fst-italic fw-normal mb-4">
            browse our categories
          </h4>
        </div>
        <div className={classes.row_2}>
          <button onClick={handlerClick}>
            <img src={imgSmartphone} alt="smartphone" />
          </button>
          <button onClick={handlerClick}>
            <img src={imgMac} alt="mac" />
          </button>
        </div>
        <div className={classes.row_3}>
          <button onClick={handlerClick}>
            <img src={imgIpad} alt="ipad" />
          </button>
          <button onClick={handlerClick}>
            <img src={imgWatch} alt="watch" />
          </button>
          <button onClick={handlerClick}>
            <img src={imgAirPord} alt="airpord" />
          </button>
        </div>
      </div>
    </>
  );
}
