import React from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';

import { hidePopup } from '../store/popupSlice';
import 'bootstrap/dist/css/bootstrap.css';
import classes from './Popup.module.css';
import { FaShoppingCart } from 'react-icons/fa';
import { createSelector } from 'reselect';
import { formatPrice } from '../util/formatPrice';

// Selector sử dụng reselect
const selectPopupData = createSelector(
  (state) => state.popup.showPopup,
  (state) => state.popup.product,
  (showPopup, product) => ({ showPopup, product }),
);

const Popup = () => {
  const dispatch = useDispatch();

  // Sử dụng selector memoize từ reselect
  const { showPopup, product } = useSelector(selectPopupData);

  const closeModal = () => {
    dispatch(hidePopup());
  };

  if (!showPopup || !product) return null;

  return ReactDOM.createPortal(
    <div className={classes['modal-overlay']}>
      <div className={classes['modal-content']}>
        <button className={classes['close-btn']} onClick={closeModal}>
          x
        </button>
        <img src={product.img1} alt={product.name} />
        <div className={classes['modal-text']}>
          <h5>{product.name}</h5>
          <p>{formatPrice(product.price)} VND</p>
          <p className="text-body-tertiary">{product.short_desc}</p>
          <button className={classes.btn}>
            <FaShoppingCart className="me-3" />
            View Detail
          </button>
        </div>
      </div>
    </div>,
    document.getElementById('overlayModal'),
  );
};

export default Popup;
