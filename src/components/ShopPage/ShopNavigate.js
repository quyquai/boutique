import React from 'react';

export default function ShopNavigate({ onCategorySelect }) {
  return (
    <>
      <h5 className="text-uppercase fst-italic px-3 py-2">categories</h5>
      <h6 className="text-uppercase fst-italic bg-dark text-white-50 px-3 py-2">
        apple
      </h6>
      <nav>
        <ul className="list-unstyled">
          <li>
            <button
              className="border-0 bg-white text-body-tertiary fst-italic px-3 py-1"
              onClick={() => onCategorySelect('All')}
            >
              All
            </button>
          </li>
          <li>
            <h6 className="text-uppercase bg-body-tertiary fst-italic px-3 py-1">
              iphone & mac
            </h6>
          </li>
          <li>
            <button
              className="border-0 bg-white text-body-tertiary fst-italic px-3 py-1"
              onClick={() => onCategorySelect('Iphone')}
            >
              Iphone
            </button>
          </li>
          <li>
            <button
              className="border-0 bg-white text-body-tertiary fst-italic px-3 py-1"
              onClick={() => onCategorySelect('Ipad')}
            >
              Ipad
            </button>
          </li>
          <li>
            <button
              className="border-0 bg-white text-body-tertiary fst-italic px-3 py-1"
              onClick={() => onCategorySelect('Macbook')}
            >
              Macbook
            </button>
          </li>
          <li>
            <h6 className="text-uppercase bg-body-tertiary fst-italic px-3 py-1">
              wireless
            </h6>
          </li>
          <li>
            <button
              className="border-0 bg-white text-body-tertiary fst-italic px-3 py-1"
              onClick={() => onCategorySelect('Airpod')}
            >
              Airpod
            </button>
          </li>
          <li>
            <button
              className="border-0 bg-white text-body-tertiary fst-italic px-3 py-1"
              onClick={() => onCategorySelect('Watch')}
            >
              Watch
            </button>
          </li>
          <li>
            <h6 className="text-uppercase bg-body-tertiary fst-italic px-3 py-1">
              other
            </h6>
          </li>
          <li>
            <button
              className="border-0 bg-white text-body-tertiary fst-italic px-3 py-1"
              onClick={() => onCategorySelect('Mouse')}
            >
              Mouse
            </button>
          </li>
          <li>
            <button
              className="border-0 bg-white text-body-tertiary fst-italic px-3 py-1"
              onClick={() => onCategorySelect('Keyboard')}
            >
              Keyboard
            </button>
          </li>
          <li>
            <button
              className="border-0 bg-white text-body-tertiary fst-italic px-3 py-1"
              onClick={() => onCategorySelect('Other')}
            >
              Other
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
