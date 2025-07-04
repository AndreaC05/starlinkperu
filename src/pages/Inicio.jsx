import "../style/Inicio.css";
import Home from "./Home";
import RedesSociales from "../components/RedesSociales";
import FondoPuntos from "../assets/Fondo/fondoPuntos.svg";

export default function Inicio() {
  return (
    <>
      <div className="container_inicio">
        <div className="circulos_svg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="500"
            height="728"
            viewBox="0 0 1021 828"
            fill="none"
          >
            <g>
              <path
                d="M363.5 0.5C564.041 0.5 726.5 143.603 726.5 320C726.5 496.397 564.041 639.5 363.5 639.5C162.959 639.5 0.5 496.397 0.5 320C0.5 143.603 162.959 0.5 363.5 0.5Z"
                stroke="white"
                strokeWidth="5"
              >
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="translate"
                  values="0 0; 0 50; 0 0"
                  dur="4s"
                  repeatCount="indefinite"
                />

                <animate
                  attributeName="opacity"
                  values="1; 0.6; 1"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </path>
            </g>

            <g>
              <path
                d="M657.5 188.5C858.041 188.5 1020.5 331.603 1020.5 508C1020.5 684.397 858.041 827.5 657.5 827.5C456.959 827.5 294.5 684.397 294.5 508C294.5 331.603 456.959 188.5 657.5 188.5Z"
                stroke="white"
                strokeWidth="5"
              >
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="translate"
                  values="0 0; 0 -50; 0 0"
                  dur="4s"
                  repeatCount="indefinite"
                />

                <animate
                  attributeName="opacity"
                  values="1; 0.6; 1"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </path>
            </g>
          </svg>
        </div>
        <div className="circulos_svg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="500"
            height="728"
            viewBox="0 0 1021 828"
            fill="none"
          >
            <g>
              <path
                d="M363.5 0.5C564.041 0.5 726.5 143.603 726.5 320C726.5 496.397 564.041 639.5 363.5 639.5C162.959 639.5 0.5 496.397 0.5 320C0.5 143.603 162.959 0.5 363.5 0.5Z"
                stroke="white"
                strokeWidth="5"
              >
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="translate"
                  values="0 0; 0 50; 0 0"
                  dur="4s"
                  repeatCount="indefinite"
                />

                <animate
                  attributeName="opacity"
                  values="1; 0.6; 1"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </path>
            </g>

            <g>
              <path
                d="M657.5 188.5C858.041 188.5 1020.5 331.603 1020.5 508C1020.5 684.397 858.041 827.5 657.5 827.5C456.959 827.5 294.5 684.397 294.5 508C294.5 331.603 456.959 188.5 657.5 188.5Z"
                stroke="white"
                strokeWidth="5"
              >
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="translate"
                  values="0 0; 0 -50; 0 0"
                  dur="4s"
                  repeatCount="indefinite"
                />

                <animate
                  attributeName="opacity"
                  values="1; 0.6; 1"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </path>
            </g>
          </svg>
        </div>
        <div className="redes_sociales">
            <RedesSociales />
        </div>
        <div className="home">
            <Home />
        </div>
        

      </div>
    </>
  );
}
