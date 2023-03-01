// import LogoSrc from "./Logo.svg";
import LogoSrc from "./bakery-logo.png";
import "./Logo.css";


export const Logo = () => {
  return (
    <a href="/">
      <img src={LogoSrc} alt="Лого компании" className="logo-pic"/>
    </a>
  );
};
