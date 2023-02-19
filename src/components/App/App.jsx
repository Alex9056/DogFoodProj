import React, { useEffect, useState } from "react";
import { Card } from "../Card/Card";
import { CardList } from "../CardList/CardList";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import "./App.css";
import data from "../../data/data.json"

function App( ) {

const [cards, setFilterCards] = useState(data);
const [searchQuery, setSearchQuery] = useState('');

useEffect(()=>{
  const newState = data.filter((el)=>(el.name.toLowerCase()).includes(searchQuery));
  setFilterCards(()=>[...newState]);
}, [searchQuery]);

return (
  <>
        {/* header */}
        <Header setSearchQuery={setSearchQuery} searchQuery={searchQuery}></Header>
        {/* content */}
        <main className="content container">
                          {/* <div className="content__cards"></div> */}
                          {/* <Card /> */}
          {searchQuery && <p>По запросу "{searchQuery}" найдено товаров: {cards.length} </p>}
          <CardList cards={cards}/>
                  {/* <button className="btn" onClick={handleClick}>click</button> */}
        </main>
        {/* footer */}
        <Footer></Footer>
    </>
  );
}

export default App;
