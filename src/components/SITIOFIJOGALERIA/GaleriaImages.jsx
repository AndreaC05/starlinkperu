import { useState, useEffect, useRef } from "react";
import { Galleria } from "primereact/galleria";
import "../../style/Galeria.css";
import "../../style/Responsive/GaleriaResponsive.css";

export default function GaleriaImages({ onClose }) {
  const [images, setImages] = useState([]);
  const galleria = useRef(null);

  // Aquí defines tus URLs de imágenes
  const imageUrls = [
    "https://res.cloudinary.com/dnao6nouz/image/upload/v1751571182/Mesa_de_trabajo_3_1_dp7xbz.jpg",
    "https://res.cloudinary.com/dnao6nouz/image/upload/v1751571155/Mesa_de_trabajo_2_1_lyziko.jpg",
    "https://res.cloudinary.com/dnao6nouz/image/upload/v1751571123/Mesa_de_trabajo_1_mjlwmi.jpg",
    "https://res.cloudinary.com/dnao6nouz/image/upload/v1751571030/Mesa_de_trabajo_4_1_xkpdes.jpg",
  ];

  const responsiveOptions = [
    {
      breakpoint: "1500px",
      numVisible: 8,
    },
    {
      breakpoint: "1024px",
      numVisible: 6,
    },
    {
      breakpoint: "768px",
      numVisible: 5,
    },
    {
      breakpoint: "560px",
      numVisible: 3,
    },
    {
      breakpoint: "425px",
      numVisible: 2,
    },
  ];

  useEffect(() => {
    // Convertir URLs a formato compatible con Galleria
    const galleryImages = imageUrls.map((url, index) => ({
      itemImageSrc: url,
      thumbnailImageSrc: url,
      alt: `Imagen ${index + 1}`,
      title: `Imagen ${index + 1}`,
    }));
    setImages(galleryImages);

    // Abrir automáticamente la galería cuando se monta el componente
    setTimeout(() => {
      if (galleria.current) {
        galleria.current.show();
      }
    }, 100);
  }, []);

  const itemTemplate = (item) => {
    return (
      <img
        src={item.itemImageSrc}
        alt={item.alt}
        style={{ width: "100%", display: "block" }}
      />
    );
  };

  const thumbnailTemplate = (item) => {
    return (
      <div
        style={{
          width: "105px",
          height: "90px",
          overflow: "hidden",
          borderRadius: "4px",
          border: "2px solid transparent",
          cursor: "pointer",
        }}
      >
        <img
          src={item.thumbnailImageSrc}
          alt={item.alt}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>
    );
  };

  // Función para manejar el cierre de la galería
  const handleHide = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <>
      <div className="card flex justify-content-center">
        <Galleria
          ref={galleria}
          value={images}
          responsiveOptions={responsiveOptions}
          numVisible={9}
          style={{ maxWidth: "100%" }}
          circular
          fullScreen
          showItemNavigators
          item={itemTemplate}
          thumbnail={thumbnailTemplate}
          onHide={handleHide}
        />
      </div>
    </>
  );
}
