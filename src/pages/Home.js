import Banner from '../components/Home/Banner'; // Import banner component để hiển thị banner trang chủ
import Categories from '../components/Home/Categories'; // Import categories component để hiển thị danh mục sản phẩm
import Information from '../components/Home/Information'; // Import information component để hiển thị thông tin bổ sung
import ProductListHome from '../components/Home/ProductListHome'; // Import productListHome component để hiển thị danh sách sản phẩm trang chủ

export default function HomePage() {
  return (
    <>
      {/* Hiển thị banner trang chủ */}
      <Banner />
      {/* Hiển thị danh mục sản phẩm */}
      <Categories />
      {/* Hiển thị danh sách sản phẩm trang chủ */}
      <ProductListHome />
      {/* Hiển thị thông tin bổ sung */}
      <Information />
    </>
  );
}
