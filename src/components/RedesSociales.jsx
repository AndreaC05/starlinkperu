import "../style/RedesSociales.css";
import "../style/Responsive/RedesSocialesResponsive.css";
import Whatsapp from "../assets/Icons/whatsapp.svg";
import Gmail from "../assets/Icons/email.svg";
import Phone from "../assets/Icons/phone.svg";
import TikTok from "../assets/Icons/tiktok.svg";

export default function RedesSociales() {
  return (
    <div className="container_redes_sociales">
      <div className="redes">
        <div className="social_icon">
          <a
            href="https://wa.me/51955517400"
            target="_blank"
            rel="noopener noreferrer"
            className="link_wrapper"
          >
            <img src={Whatsapp} alt="WhatsApp" />
            <span className="tooltip">+51 955 517 400</span>
          </a>
        </div>
        <div className="social_icon mt-4">
          <a
            href="https://www.tiktok.com/@mikrotikperu?is_from_webapp=1&sender_device=pc"
            className="link_wrapper"
            target="_blank"
          >
            <img src={TikTok} alt="Tiktok" />
            <span className="tooltip">@mikrotikperu</span>
          </a>
        </div>
        <div className="social_icon mt-4">
          <a
            href="mailto:starlink.corporativo@starlink.com.pe"
            className="link_wrapper"
          >
            <img src={Gmail} alt="Gmail" />
            <span className="tooltip">starlink.corporativo@starlink.com.pe</span>
          </a>
        </div>
        <div className="social_icon mt-4">
          <a href="tel:016408018" className="link_wrapper">
            <img src={Phone} alt="Teléfono" />
            <span className="tooltip">(01) 640 8018</span>
          </a>
        </div>
      </div>
    </div>
  );
}
