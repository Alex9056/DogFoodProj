import { Logo } from "../Logo/Logo";
import { Search } from "../Search/Search";
import "./Header.css";

export const Header = ({ setSearchQuery }) => {

  return (
    <div className="header" id="head">
      <div className="container">
        <div className="header__wrapper">
            <Logo />
            <Search setSearchQuery={setSearchQuery}/>
            <div className="header__profile">Войти</div>
        </div>
      </div>
    </div>
  );
};
