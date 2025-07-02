import "../style/Home.css";
import Logo from "../assets/LOGO STARLINK PERÚ.png";

export default function Home() {
    return(
        <>
         <div className="container_principal_starlink">
            <div className="banner">
                <div className="rectangle"></div>
                 <div className="logo">
                    {/* <img src={Logo} alt="" /> */}
                </div>
                <div className="tit_sub">
                    <h1>STARLINK</h1>
                <p>Conectando su empresa al mundo</p>
                </div>
            </div>
            <section className="prioridad_tipo">

            </section>
         </div>
        </>
    );
}