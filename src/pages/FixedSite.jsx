import "../style/TipoServices.css";
import Logo from "../assets/LOGOSTARLINKPERÚ.svg";
import Rectangle from "../assets/rectangle.svg";
import { Button } from "primereact/button";

export default function FixedSite() {
  return (
    <>
      <div className="container_fixed_sitio">
        <div className="banner">
          <div className="rectangle">
            <img src={Rectangle} alt="" />
          </div>
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <div className="tit_sub">
            <h1>STARLINK PARA SITIOS FIJOS</h1>
            <a
              href="https://wa.me/51999046598"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>Pedir Ahora</Button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
