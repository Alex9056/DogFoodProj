import { Logo } from "../Logo/Logo";
import { Search } from "../Search/Search";
import "./Header.css";

export const Header = ({ searchQuery, setSearchQuery, user }) => {

  return (
    <div className="header" id="head">
      <div className="container">
        <div className="header__wrapper">
            <Logo />
            <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
            {/* Basket */}
            {/* <div><IconBasket/></div> */}
            <div className="header__profile">
              <span>{user.name} {' '}</span>
              <span>{user.about}</span>
            </div>
        </div>
      </div>
    </div>
  );
};
