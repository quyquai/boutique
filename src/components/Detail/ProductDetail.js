import Quantity from './Quantity'; // Import component Quantity để hiển thị số lượng sản phẩm
import { formatPrice } from '../../util/formatPrice';

export default function ProductDetail({ product }) {
  return (
    <div className="row py-3 mb-5">
      <div className="col-1">
        <img className="img-fluid my-2" src={product.img2} alt={product.name} />
        <img className="img-fluid my-2" src={product.img3} alt={product.name} />
        <img className="img-fluid my-2" src={product.img4} alt={product.name} />
        <img className="img-fluid my-2" src={product.img1} alt={product.name} />
      </div>
      <div className="col-4 pe-5">
        <img className="img-fluid" src={product.img1} alt={product.name} />
      </div>
      <div className="col-7 px-5">
        <h2 className="fs-1 fw-medium fst-italic mb-4">{product.name}</h2>
        <p className="fst-italic text-body-tertiary fs-5">
          {formatPrice(product.price)} VND
        </p>
        <p className="fst-italic text-body-tertiary">{product.short_desc}</p>
        <p className="fst-italic text-body-tertiary">
          <strong>CATEGORY:</strong> {product.category}
        </p>
        <Quantity product={product} />
      </div>
    </div>
  );
}
