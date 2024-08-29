import 'bootstrap/dist/css/bootstrap.css';

export default function Information() {
  return (
    <div className="container">
      <div className="row py-5 bg-body-tertiary">
        <div className="col text-center">
          <h5 className="text-uppercase fw-normal fst-italic">free shipping</h5>
          <p className="fst-italic text-body-tertiary">
            Free shipping worlwide
          </p>
        </div>
        <div className="col text-center">
          <h5 className="text-uppercase fw-normal fst-italic">
            24 X 7 Service
          </h5>
          <p className="fst-italic text-body-tertiary">
            Free shipping worlwide
          </p>
        </div>
        <div className="col text-center">
          <h5 className="text-uppercase fw-normal fst-italic">
            festival offer
          </h5>
          <p className="fst-italic text-body-tertiary">
            Free shipping worlwide
          </p>
        </div>
      </div>
      <div className="row py-4">
        <div className="col px-0">
          <h4 className="text-uppercase fw-normal fst-italic">
            let's be friends!
          </h4>
          <p className="fst-italic text-body-tertiary">
            Nisi nisi tempor consequat laboris nisi
          </p>
        </div>
        <div className="col px-0 mt-2">
          <div className="row mx-0">
            <input
              className="col-10 input-fluid p-3 border"
              type="email"
              placeholder="Enter your email address"
            />
            <button className="col-2 button p-3">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}
