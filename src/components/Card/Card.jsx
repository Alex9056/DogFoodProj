import { ReactComponent as Like } from "./like.svg";
import "./Card.css";

export const Card = ({picture, name, price, wight, discount }) => {
  return (
    <div className="card">
      <div className="card__sticky card__sticky_type_top-left">
        <span className="card__discount">{discount}%</span>
        </div>
      <div className="card__sticky card__sticky_type_top-right ">
        <button className="card__favorite">
          <Like className="card__liked"/>
        </button>
      </div>
      <a href="/" className="card__link">
        <img src={picture} alt="card__image" className="card__image"/>
        <div className="card__description">
          <span className='card__price'>{price}р</span>
          <span className='card_wight'>{wight}</span>
          <p className="card__name">{name}</p>
        </div>
      </a>
      <a href="/" className="card__card btn btn_type_primary">В корзину</a>
    </div>
  );
};
