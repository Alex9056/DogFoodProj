const config = {
    // пишем config чтобы не дублировать url в api-запросах
    baseUrl: 'https://api.react-learning.ru',
    headers: {
      'content-type': 'application/json',
      // token
      Authorization:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZkZWU1MjRlZTQxOTk3NWZiZDI5ZTMiLCJncm91cCI6Imdyb3VwLTEwIiwiaWF0IjoxNjc3NTg2MTA0LCJleHAiOjE3MDkxMjIxMDR9.xvy6lHbwBCgu9ssSPmjoudePRNUZc5pXTeJGCj2Ryw0',
    },
  };
//ф-ция для обработки промиса из fetch-запроса 
const onResponse = (res)=>{
 return res.ok?res.json():Promise.reject(`Ошибка: ${res.status}`)
};
class Api {

// деструкт data на baseUrl, headers
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl; //без деструкт =data.baseUrl
    this._headers = headers; //без деструкт =data.headers
  }
//получение списка товаров с сервера
  getProductList(page =   2) {
    // ?page=${page} - query-параметр для пагинации
    return fetch(`${this._baseUrl}/products?page=${page}`, { headers: this._headers })
    .then(
      function (response) {
        return response.ok ? response.json() : Promise.reject(`Ошибка: ${response.status}`);
        //!!!!!.json()-асинхр ф-ция=>возвращ новый промис, кот мы обраб-ем ч-з .then в useEffect
      }
    );
  }
  
//получение информации о пользователе по токену в заголовках, добавляем в useEffect in App.jsx
  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, { headers: this._headers })
    .then((res)=>onResponse(res));
    //!!!!!.json()-асинхр ф-ция=>возвращ новый промис, кот мы обраб-ем ч-з .then в useEffect
  } 
//   поиск товаров
  searchProducts(query) {
    return fetch(`${this._baseUrl}/products/search?query=${query}`, {headers: this._headers})
    .then((res)=>onResponse(res));
  }
// поставить-убрать лайк с товара
  changeLikeProductStatus(productId, like) {
    // like-это проверка true\false на лайк(isLiked в ф-ции handleProductLike в App)
    return fetch(`${this._baseUrl}/products/likes/${productId}`, 
    {
      method: like?'PUT':'DELETE',
      headers: this._headers,
    }).then((res)=>onResponse(res));
  }
  //удалить товар
  deleteProduct(productId) {
    return fetch(`${this._baseUrl}/products/${productId}`, 
    {
      method: 'DELETE',
      headers: this._headers,
    }).then((res)=>onResponse(res));
  }
  
  //создать товар
  createProduct() {
    return fetch(`${this._baseUrl}/products`, 
    {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ 
        "name": "Свадебный",
        "price": 4250,
        "discount": 0,
        "wight": "1 шт",
        "description": "Описание demo",
        "available": true,
        "stock": 10,
        "pictures": "https://images.unsplash.com/photo-1614878257894-bcae7dd58054?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTB8Zm02U1pWZDlxX2d8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
    }),
    }).then((res)=>onResponse(res));
  }

}

export const api = new Api(config);


// //API-запрос через функцию, а не через класс Api и экземпляр api
// export const getProductList = ()=>{
//     return fetch(`${config.baseUrl}/products`, {config.headers })
//     .then(
//       function (response) {
//         return response.ok ? response.json() : Promise.reject(`Ошибка: ${response.status}`);
//       }
//     );    
// }
// //в App.jsx
// import { getProductList } from "../../utils/api";
// useEffect(() => {
//     getProductList().then((data)=> setCards(data.products))
//   }, []);
