import LogoSrc from "./Logo.svg";
import "./Logo.css";


export const Logo = () => {
  return (
    <a href="/">
      <img src={LogoSrc} alt="Лого компании" className="logo-pic"/>
    </a>
  );
};
