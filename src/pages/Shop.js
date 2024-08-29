import React, { useState } from 'react'; // Import React và useState từ thư viện 'react'
import { useLoaderData } from 'react-router-dom'; // Import useLoaderData từ 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'; // Import CSS của Bootstrap
import ShopNavigate from '../components/ShopPage/ShopNavigate'; // Import component ShopNavigate từ đường dẫn tương ứng
import ProductListShop from '../components/ShopPage/ProductListShop'; // Import component ProductListShop từ đường dẫn tương ứng
import InfoRow from './InfoRow'; // Import component InfoRow từ đường dẫn tương ứng

export async function shopLoader() {
  const response = await fetch(
    'https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74',
  );
  const products = await response.json(); // Parse dữ liệu từ response
  return products; // Trả về dữ liệu sản phẩm
}

export default function ShopPage() {
  const [category, setCategory] = useState('All'); // Khởi tạo state category với giá trị mặc định là 'All'
  const products = useLoaderData(); // Lấy dữ liệu sản phẩm từ hook useLoaderData

  // Hàm xử lý sự kiện khi chọn category
  const handleCategorySelect = (selectedCategory) => {
    setCategory(selectedCategory); // Cập nhật category khi được chọn
  };

  // Lọc sản phẩm theo category được chọn
  const filteredProducts =
    category === 'All' // Nếu category là 'All'
      ? products // Trả về tất cả sản phẩm
      : products.filter((product) =>
          product.category.toLowerCase().includes(category.toLowerCase()),
        ); // Lọc sản phẩm theo category

  return (
    <div className="container">
      <InfoRow title="shop" content="shop" />
      <div className="row mt-4">
        <div className="col-3">
          <ShopNavigate onCategorySelect={handleCategorySelect} />
        </div>
        <div className="col-9">
          <ProductListShop products={filteredProducts} />
        </div>
      </div>
    </div>
  );
}
