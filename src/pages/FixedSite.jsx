import "../style/TipoServices.css";
import "../style/Responsive/TipoServicesResponsive.css";
import Logo from "../assets/LOGOSTARLINKPERÚ.svg";
import Rectangle from "../assets/rectangle.svg";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";
import Fondo from "../assets/Fondo/fondoPuntos.svg";

export default function FixedSite() {
  return (
    <>
      <div className="container_fixed_sitio">
        <img src={Fondo} alt="" />
        <div className="container_infor_services_plans">
          <div className="header_buton">
            <Link to="/">
              <Button icon="pi pi-chevron-left"></Button>
            </Link>
          </div>
          <div className="cuerpo_planes_servicios">
            <h1>CARÁCTERISTICAS DE SERVICIO</h1>
            <div className="text_services_planes">
              <h3>PRIORIDAD LOCAL</h3>
              <p>
                Ideal para empresas con ubicaciones fijas y móviles en tierra
              </p>
              <div className="list_services">
                <h4>CARACTERÍSTICAS PRINCIPALES</h4>
                <ul>
                  <li>Uso en tierra en un solo país y viajes regionales</li>
                  <li>Prioridad de red</li>
                  <li>Conexión estable en movimiento y fija</li>
                  <li>IP pública y panel</li>
                </ul>
              </div>
            </div>
            <div className="pedir_ahora">
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
      </div>
    </>
  );
}
