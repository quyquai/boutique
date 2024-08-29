import classes from './ProductDescript.module.css'; // Import CSS modules để sử dụng class tùy chỉnh

export default function ProductDescript({ product }) {
  return (
    <div className="mb-5">
      <button className="text-uppercase mt-3 button">description</button>
      <h5 className="text-uppercase fst-italic my-4">product description</h5>
      <p className={`${classes.desc} fst-italic text-body-tertiary `}>
        {product.long_desc}
      </p>
    </div>
  );
}
