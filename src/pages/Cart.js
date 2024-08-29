import TableCart from '../components/Cart/TableCart'; // Importing the TableCart component
import TotalCart from '../components/Cart/TotalCart'; // Importing the TotalCart component
import InfoRow from './InfoRow'; // Importing the InfoRow component

export default function CartPage() {
  return (
    <div className="container px-0">
      <InfoRow title="cart" content="cart" />
      <h5 className="text-uppercase my-4">shoping cart</h5>
      <div className="row mx-0">
        <div className="col-8">
          <TableCart />
        </div>
        <div className="col-4 ps-3 pe-0">
          <TotalCart />
        </div>
      </div>
    </div>
  );
}
