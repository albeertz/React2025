import { useState, useEffect } from "react";

const Timer = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((prev) => prev + 1);
        }, 1000);

        return () => {
            clearInterval(interval); // Limpieza para evitar intervalos innecesarios
        };
    }, []); // Solo al montar y desmontar

    return <h1>Segundos: {seconds}</h1>;
};

export default Timer;