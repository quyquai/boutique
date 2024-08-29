import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS để sử dụng các lớp CSS của Bootstrap
import { useNavigate } from 'react-router-dom'; // Import hook useNavigate từ react-router-dom để điều hướng đến các route
import classes from './Banner.module.css'; // Import file CSS module cho các lớp CSS tùy chỉnh của banner

export default function Banner() {
  const navigate = useNavigate(); // Sử dụng hook useNavigate để lấy hàm navigate từ react-router-dom

  // Hàm xử lý sự kiện khi nhấn vào nút "Browse collections"
  const navigateHandler = () => {
    navigate('/shop'); // Điều hướng đến trang "/shop" khi nút được nhấn
  };

  return (
    <div className="container mb-5">
      <div className={classes.banner}>
        <div className="position-absolute top-50 start-0 translate-middle-y ms-4">
          <div className={`${classes.banner_content} text-uppercase ms-5`}>
            <p className="text-muted fst-italic text-body-tertiary">
              new inspiration 2020
            </p>
            <h2 className="fw-normal fst-italic text-body mb-3">
              20% off on new season
            </h2>
            <button className="button" onClick={navigateHandler}>
              Browse collections
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
