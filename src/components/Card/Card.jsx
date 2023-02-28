import { ReactComponent as Like } from "./like.svg";
import "./Card.css";

export const Card = ({product, pictures, name, price, wight, discount, onProductLike, currentUser,handleDeleteProduct }) => {
  const isLiked = product.likes.some((id) => id === currentUser._id);
  const handleLikeClick = ()=>{onProductLike(product)};
  const deleteOnClick = ()=>{handleDeleteProduct(product)};
  return (
    <div className="card">
      <div className="card__sticky card__sticky_type_top-left">
        <span className="card__discount">{discount}%</span>
        </div>
      <div className="card__sticky card__sticky_type_top-right ">
        <button className={`card__favorite ${isLiked ? 'card__favorite_active' : ''}`} onClick={handleLikeClick}>
          <Like className="card__liked"/>
          <span>{product.likes.length}</span>
        </button>
      </div>
      <a href="/" className="card__link">
        <img src={pictures} alt="card__image" className="card__image"/>
        <div className="card__description">
          <span className='card__price'>{price}р</span>
          <span className='card_wight'>{wight}</span> 
          <p className="card__name">{name}</p>
        </div>
      </a>
      <a href="/" className="card__card btn btn_type_primary">В корзину</a>
      <button href="/" className="card__card btn btn_type_primary" onClick={deleteOnClick}>Удалить продукт</button>
    </div>
  );
};
