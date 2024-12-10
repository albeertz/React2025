import { useState, useEffect } from "react";

const WindowResizeListener = () => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        // Subscripción al evento de cambio de tamaño
        window.addEventListener("resize", handleResize);

        // Limpieza: eliminar la subscripción cuando el componente se desmonte
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []); // El array vacío asegura que este efecto solo se ejecute una vez al montar

    return (
        <div>
            <h1>Tamaño de la ventana</h1>
            <p>Ancho: {windowSize.width}px</p>
            <p>Alto: {windowSize.height}px</p>
        </div>
    );
};

export default WindowResizeListener;