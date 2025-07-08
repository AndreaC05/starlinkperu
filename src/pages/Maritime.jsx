import "../style/TipoServices.css";
import "../style/Responsive/TipoServicesResponsive.css";
import Logo from "../assets/LOGOSTARLINKPERÚ.svg";
import Rectangle from "../assets/rectangle.svg";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";
import Fondo from "../assets/Fondo/fondoPuntos.svg";

export default function Maritime() {
  return (
    <>
      <div className="container_maritime">
        <img src={Fondo} alt="" />
        <div className="container_infor_services_plans">
          <div className="header_buton">
            <Link to="/">
              <Button icon="pi pi-chevron-left"></Button>
            </Link>
          </div>
          <div className="cuerpo_planes_servicios">
            <h1>PLANES DE SERVICIO</h1>
            <div className="text_services_planes">
              <h3>PRIORIDAD GLOBAL</h3>
              <p>
                Ideal para operaciones marítimas internacionales: flotas, yates
                y plataformas en alta mar.
              </p>
              <div className="list_services">
                <h4>CARACTERÍSTICAS PRINCIPALES</h4>
                <ul>
                  <li>
                    Cobertura global en alta mar y rutas marítimas
                    internacionales
                  </li>
                  <li>
                    Conectividad estable en movimiento, incluso en condiciones
                    oceánicas extremas
                  </li>
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
