import { Icons } from "../Icons/Icon";
import LogoSrc from "../Logo/Logo.svg";
import { Ref } from "../References/Ref";
import './Footer.css'

export const Footer = () => {
  return (
    <>
    <div className="footer">
    <div className="container">
      <div className="footer_wrapper">
      <a href="/">
        <img src={LogoSrc} alt="Лого компании" className="footer__logo logo-pic"/>
      </a>
      <Ref/>
      <div className="footer__contacts">
        <span className="footer__phonenumber">Мы на связи</span>
        <span className="footer__phonenumber">8(999)00-00-00</span>
        <span className="footer__email">dogfood.ru@gmail.ru</span>
        <Icons />
        </div>
      
      </div>
    </div>
    </div>
    </>
  );
};
