import { useState } from "react";
import "../style/Home.css";
import Logo from "../assets/LOGOSTARLINKPERÚ.svg";
import Rectangle from "../assets/rectangle.svg";
import { Button } from "primereact/button";
import GaleriaImages from "../components/SITIOFIJOGALERIA/GaleriaImages";
import GaleriaImages2 from "../components/MARITIMOGALERIA/GaleriaImages";
import SitioFijo from "../assets/SITIOFIJO.jpg";
import Maritimo from "../assets/MARITIMO.jpg";
import ImagenServices1 from "../assets/imagen_dos.jpg";
import ImagenServices2 from "../assets/imagen_uno.jpg";

export default function Home() {
  const [showGallery, setShowGallery] = useState(false);
  const [showGallery2, setShowGallery2] = useState(false);

  const handleShowGallery = () => {
    setShowGallery(true);
  };

  // Función para cerrar la galería
  const handleCloseGallery = () => {
    setShowGallery(false);
  };

  const handleShowGallery2 = () => {
    setShowGallery2(true);
  };

  // Función para cerrar la galería
  const handleCloseGallery2 = () => {
    setShowGallery2(false);
  };

  return (
    <>
      <div className="container_principal_starlink">
        <div className="banner">
          <div className="rectangle">
            <img src={Rectangle} alt="" />
          </div>
          <div className="logo">
            {/* <img src={Logo} alt="" /> */}
          </div>
          <div className="tit_sub">
            <h1>STARLINK EMPRESAS</h1>
            <p>Conectando al mundo</p>
          </div>
        </div>
        <section className="prioridad_tipo">
          <div className="prioridad_local">
            <h5>PRIORIDAD LOCAL</h5>
            <p>Conectividad en todo el país</p>
            <a
              href="https://wa.me/51999046598"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>Pedir Ahora</Button>
            </a>
          </div>
          <div className="prioridad_movil">
            <h5>PRIORIDAD MÓVIL</h5>
            <p>Conectividad en todo su camino</p>
            <a
              href="https://wa.me/51999046598"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>Pedir Ahora</Button>
            </a>
          </div>
          <div className="prioridad_mar">
            <h5>PRIORIDAD MARÍTIMO</h5>
            <p>Conectividad en el altamar</p>
            <a
              href="https://wa.me/51999046598"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>Pedir Ahora</Button>
            </a>
          </div>
        </section>
        <section className="casos_uso">
          <h3>Casos de Uso</h3>
          <div className="casos_usos_tipo">
            <div className="sitio_fijo">
              <div className="caso_uso_sitio_fijo">
                <Button onClick={handleShowGallery}>
                  <img src={SitioFijo} alt="" />
                  <div className="text_casos_uso">
                    <h4>SITIO FIJO</h4>
                    <p>Conectividad para empresas</p>
                  </div>
                </Button>
              </div>
            </div>
            <div className="maritimo">
              <div className="caso_uso_maritimo">
                <Button onClick={handleShowGallery2}>
                  <img src={Maritimo} alt="" />
                  <div className="text_casos_uso">
                    <h4>MARÍTIMO</h4>
                    <p>Conectividad en el agua</p>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="servicios_starlink">
          <h3>Conectividad sin límites con Starlink</h3>
          <p>
            Internet satelital de alta velocidad, en cualquier lugar del país
          </p>
          <div className="services">
            <div className="conexion_internet">
              <div className="text_servicios">
                <h5>CONEXIÓN A INTERNET</h5>
                <p>
                  El kit Starlink viene con todo lo que necesita para conectarse
                  en cuestión de minutos. Lo único que necesita es un cielo
                  despejado.
                </p>
              </div>
              <div className="img_servicio_1">
                <img src={ImagenServices1} alt="" />
              </div>
            </div>
            <div className="conectividad_satelital">
              <div className="img_servicio_2">
                <img src={ImagenServices2} alt="" />
              </div>
              <div className="text_servicios">
                <h5>
                  CONECTIVIDAD SATELITAL PARA OPERACIONES MARÍTIMAS SIN
                  INTERRUPCIONES
                </h5>
                <p>
                  Internet de alta velocidad y baja latencia en altamar con
                  Starlink para empresas.
                </p>
              </div>
            </div>
          </div>
        </section>
        <footer>
          <p>© Copyright 2025 Mikrotik Perú | All Rights Reserved</p>
        </footer>

        {showGallery && <GaleriaImages onClose={handleCloseGallery} />}
        {showGallery2 && <GaleriaImages2 onClose={handleCloseGallery2} />}
      </div>
    </>
  );
}
