import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductDetail from '../components/Detail/ProductDetail'; // Import ProductDetail component
import ProductDescript from '../components/Detail/ProductDescript'; // Import ProductDescript component
import RelatedProducts from '../components/Detail/RelatedProducts'; // Import RelatedProducts component

// Loader function để tải dữ liệu sản phẩm từ API
export async function productLoader({ params }) {
  const response = await fetch(
    // Fetch API
    'https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74',
  );
  const products = await response.json();
  const product = products.find(
    (product) => product._id.$oid === params.productId,
  );
  return product || {};
}

export default function ProductDetailPage() {
  const product = useLoaderData(); // Sử dụng hook useLoaderData để truy cập dữ liệu sản phẩm được tải

  return (
    <div className="container">
      <ProductDetail product={product} />
      <ProductDescript product={product} />
      <RelatedProducts product={product} />
    </div>
  );
}
