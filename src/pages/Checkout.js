import FormCheckout from '../components/Checkout/FormCheckout'; // Import FormCheckout component
import YourOder from '../components/Checkout/YourOder'; // Import YourOder component
import InfoRow from './InfoRow'; // Import InfoRow component

export default function CheckoutPage() {
  return (
    <div className="container px-0">
      <InfoRow title="checkout" content="Home / Cart / checkout" />

      <h5 className="text-uppercase mt-5 mb-4">billing details</h5>
      <div className="row">
        <div className="col-8">
          <FormCheckout />
        </div>
        <div className="col-4 ps-3 pe-0">
          <YourOder />
        </div>
      </div>
    </div>
  );
}
