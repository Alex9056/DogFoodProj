import TelegSrc from "./IconTeleg.svg";
import WhatsappSrc from "./IconWhatsapp.svg";
import ViberSrc from "./IconViber.svg";
import MailSrc from "./IconMail.svg";
import VkSrc from "./IconVK.svg";
import "./Icon.css";

export const Icons = () => {
  return (
    <div className="icons__wrapper">
      <a href="/">
        <img src={TelegSrc} alt="Telegramm" className="icon-pic" />
      </a>
      <a href="/">
        <img src={WhatsappSrc} alt="Whatsapp" className="icon-pic" />
      </a>
      <a href="/">
        <img src={ViberSrc} alt="Viber" className="icon-pic" />
      </a>
      <a href="/">
        <img src={MailSrc} alt="Mail" className="icon-pic" />
      </a>
      <a href="/">
        <img src={VkSrc} alt="VK" className="icon-pic" />
      </a>
    </div>
  );
};
