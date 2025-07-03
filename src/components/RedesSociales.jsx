import "../style/RedesSociales.css";
import Whatsapp from "../assets/Icons/whatsapp.svg";
import Gmail from "../assets/Icons/gmail.svg";
import Phone from "../assets/Icons/phone.svg";

export default function RedesSociales() {
  return (
    <div className="container_redes_sociales">
      <div className="redes">
        <div className="social_icon">
          <img src={Whatsapp} alt="WhatsApp" />
          <span className="tooltip">+51 999 046 598</span>
        </div>
        <div className="social_icon mt-4">
          <img src={Gmail} alt="Gmail" />
          <span className="tooltip">cmorales@mikrotikperu.com.pe</span>
        </div>
        <div className="social_icon mt-4">
          <img src={Phone} alt="Teléfono" />
          <span className="tooltip">(01) 640 8018</span>
        </div>
      </div>
    </div>
  );
}
