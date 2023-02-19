import { Card } from "../Card/Card";
import "./CardList.css";

export const CardList = ({ cards }) => {
  // console.log({ data })
  return (
    <div className="cards">
      {cards.map((item) => (
        <Card {...item} key={item.name} />
      ))}
    </div>
  );
};
