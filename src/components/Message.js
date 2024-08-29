import '@fortawesome/fontawesome-free/css/all.min.css';
import classes from './Message.module.css';
import imgMessage from '../assets/David-big.jpg';

export default function Message() {
  return (
    <div className={classes.message}>
      <div className="row border-bottom py-3 mx-0">
        <div className="col-6">
          <h5 className=" mb-0 mx-3">Customer Sopport</h5>
        </div>
        <div className="col-6 text-end">
          <span className=" mb-0 bg-body-tertiary fst-italic text-body-tertiary px-3 py-1">
            Let's Chat App
          </span>
        </div>
      </div>
      <div className={classes.content}>
        <div className="text-end mt-2 me-3">
          <p className="p-2  bg-primary bg-gradient bg-opacity-75 fst-italic text-white rounded-1">
            Xin chào
          </p>
        </div>
        <div className="text-end  me-3">
          <p className="p-2  bg-primary bg-gradient bg-opacity-75 fst-italic text-white rounded-1">
            Làm thế nào để xem sản phẩm
          </p>
        </div>

        <div className="mx-3">
          <img src={imgMessage} alt="avatar" className={classes.img} />

          <p className="fst-italic text-body-tertiary bg-body-tertiary rounded-1 p-2">
            ADMIN: Chào bạn
          </p>
        </div>
        <div className="mx-3">
          <img src={imgMessage} alt="avatar" className={classes.img} />
          <p className="fst-italic text-body-tertiary bg-body-tertiary rounded-1 p-2">
            ADMIN: Bạn có thể vào mục shop để xem các sản phẩm
          </p>
        </div>
      </div>
      <div className="w-100 p-3 bg-body-tertiary position-absolute bottom-0 rounded-bottom-3">
        <img src={imgMessage} alt="avatar" className={classes.img} />
        <input
          className={`${classes.input} px-3 my-2 border-0 me-3`}
          type="text"
          placeholder="Enter Message!"
        />
        <i className="fa fa-paperclip text-body-tertiary me-3"></i>
        <i className="fa-solid fa-face-smile text-body-tertiary me-3"></i>
        <i className="bi bi-send-fill text-primary"></i>
      </div>
    </div>
  );
}
