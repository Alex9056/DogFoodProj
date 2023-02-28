import { Card } from "../Card/Card";
import "./CardList.css";

export const CardList = ({ cards, onProductLike, currentUser,handleDeleteProduct }) => {
  // console.log({ data })
  return (
    <div className="cards">
      {cards.map((item) => (
        <Card product={item} onProductLike={onProductLike} handleDeleteProduct={handleDeleteProduct} currentUser={currentUser} {...item} key={item._id} />//rest operator
      ))}
    </div>
  );
};
