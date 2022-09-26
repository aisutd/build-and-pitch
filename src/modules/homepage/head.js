import BuildandPitch from "./buildandpitch";
import back from "../../images/background.svg";
import { useEffect, useState } from "react";

export default function Head() {
    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
        window.removeEventListener('resize', handleWindowResize);
        };
    }, []);
    return (
        <div style={{backgroundImage: `url(${back})`, width: windowSize.innerWidth, height: windowSize.innerHeight }}> 
            <BuildandPitch/>
        </div>
    );
}

function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
}