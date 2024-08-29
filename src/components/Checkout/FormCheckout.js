import { Form } from 'react-router-dom';

export default function FormCheckout() {
  return (
    <Form className="fst-italic">
      <label className="text-uppercase w-100 mb-1">full name:</label>
      <input
        className="w-100 px-3 py-1 mb-2 border"
        placeholder="Enter Your Full Name Here!"
      />
      <label className="text-uppercase w-100 mb-1">email:</label>
      <input
        className="w-100 px-3 py-1 mb-2 border"
        placeholder="Enter Your Email Here!"
      />
      <label className="text-uppercase w-100 mb-1">phone number:</label>
      <input
        className="w-100 px-3 py-1 mb-2 border"
        placeholder="Enter Your Phone Number Here!"
      />
      <label className="text-uppercase w-100 mb-1">address</label>
      <input
        className="w-100 px-3 py-1 mb-3 border"
        placeholder="Enter Your Address Here!"
      />
      <button className="button mb-3">Place oder</button>
    </Form>
  );
}
