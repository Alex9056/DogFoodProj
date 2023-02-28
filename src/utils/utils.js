import { useEffect, useState } from "react";

  
  export const setWordEnding = (numb) => {
    const tmp = numb % 10;
    if (tmp === 0) return "товаров";
    if (tmp === 1) return "товар";
    if (tmp > 1 && tmp < 5) return "товара";
    if (tmp >= 5 || !numb) return "товаров";
    if (numb > 10 && numb < 20) return "товаров";
  };

  export const setFindEnding = (numb) => {
    const tmp = numb % 10;
    if (tmp === 0) return "найдено";
    if (tmp === 1) return "найден";
    if (tmp > 1 && tmp < 5) return "найдены";
    if (tmp >= 5 || !numb) return "найдено";
    if (numb > 10 && numb < 20) return "найдено";
  };
  // пользовательский хук
  export const useDebounce = (value, delay=500) => {
    const [debounceValue, setDebounceValue] = useState(value);
    // console.log({value});
    useEffect(()=>{
      const timeout = setTimeout(()=> {setDebounceValue(value)}, delay);
  // console.log({timeout});
      // очищает предыдущ timeout при срабатыв-и нового useDebounce
      return ()=>clearTimeout(timeout);
    }, [value]);
    //возвращ накопленый debounceValue
    return debounceValue;
  }
  