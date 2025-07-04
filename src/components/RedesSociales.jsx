import "../style/RedesSociales.css";
import "../style/Responsive/RedesSocialesResponsive.css";
import Whatsapp from "../assets/Icons/whatsapp.svg";
import Gmail from "../assets/Icons/email.svg";
import Phone from "../assets/Icons/phone.svg";

export default function RedesSociales() {
  return (
    <div className="container_redes_sociales">
      <div className="redes">
        <div className="social_icon">
          <a
            href="https://wa.me/51999046598"
            target="_blank"
            rel="noopener noreferrer"
            className="link_wrapper"
          >
            <img src={Whatsapp} alt="WhatsApp" />
            <span className="tooltip">+51 999 046 598</span>
          </a>
        </div>
        <div className="social_icon mt-4">
          <a
            href="mailto:cmorales@mikrotikperu.com.pe"
            className="link_wrapper"
          >
            <img src={Gmail} alt="Gmail" />
            <span className="tooltip">cmorales@mikrotikperu.com.pe</span>
          </a>
        </div>
        <div className="social_icon mt-4">
          <a href="tel:+5116408018" className="link_wrapper">
            <img src={Phone} alt="Teléfono" />
            <span className="tooltip">(01) 640 8018</span>
          </a>
        </div>
      </div>
    </div>
  );
}
