import React, { useEffect, useState } from "react";
import { Card } from "../Card/Card";
import { CardList } from "../CardList/CardList";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import data from "../../data/data.json";
import "./App.css";
import { api } from "../../utils/api";
import { setWordEnding, setFindEnding, useDebounce } from "../../utils/utils";

function App() {
  const [cards, setCards] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentUser, setCurrentUser] = useState({});


  const handleSearch = (search) => {
    api.searchProducts(search).then((data)=>setCards(data));
  }
  const debounceValueInApp = useDebounce(searchQuery, 500);
  
  // по клику на кнопку лайка н.выз-ть эту ф-цию =Ю будем прокидывать ее в дочерний компонент Card. Для начала прокинем ее в CardList, также сразу прокинем туда инфо о текущ польз-ле currentUser, чтобы при первоначальном рендере мы видели только свои лайки.
  function handleProductLike (product) {
    const isLiked = product.likes.includes(currentUser._id);
    api.changeLikeProductStatus(product._id, !isLiked).then((newCard)=> {
      const newCards = cards.map((card) => {return card._id===newCard._id ? newCard : card});
      setCards([...newCards]);
    })
  }
  const handleAddProduct = async ()=> {
    await api.createProduct()
  }
  function handleDeleteProduct (product) {
    // не забыть Card.jsx передать product в ф-цию handleDeleteProduct
      // console.log(product)
    api.deleteProduct(product._id)
  }

  useEffect(() => {
  handleSearch(debounceValueInApp)
  // console.log({debounceValueInApp})
  }, [debounceValueInApp]);

  useEffect(() => {
    //метод экз-ра класса возвращает промис(т.к. .json())=>обраб-ем ч-з .then
    //api.метод() -это асинхронная функция!
                // api.getProductList().then((data)=> setCards(data.products))
                // //метод экз-ра класса возвращает промис(т.к. .json())=>обраб-ем ч-з .then
                // // api.getUserInfo().then((data)=> console.log(data))
                // api.getUserInfo().then((data)=> setCurrentUser(data))
    // Promise.all-чтобы действия с данными из запросов производить одновременно и не было "гонки промисов"
    Promise.all([api.getProductList(),api.getUserInfo()]).then ( ([productData, userData]) => {
      setCards(productData.products);
      setCurrentUser(userData);
    })  
  }, []);

  return (
    <>
      {/* header */}
      <Header
        user={currentUser}
        setSearchQuery={setSearchQuery}
        searchQuery={searchQuery}
      ></Header>
      {/* content */}
      <main className="content container">
        <button className="btn" onClick={()=>handleAddProduct()}>Добавить продукт</button>
        {searchQuery && (
          <p>
            По запросу "{searchQuery}" {setFindEnding(cards.length)} {cards.length}{" "}
            {setWordEnding(cards.length)}
          </p>
        )}
        {/* пробрасываем ф-цию handleProductLike*/}
        <CardList onProductLike={handleProductLike} handleDeleteProduct={handleDeleteProduct} currentUser={currentUser} cards={cards} />
        {/* <button className="btn" onClick={handleClick}>click</button> */}
      </main>
      {/* footer */}
      <Footer></Footer>
    </>
  );
}

export default App;
