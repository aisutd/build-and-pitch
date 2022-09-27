import BuildandPitch from "./buildandpitch";
import back from "../../images/background.svg";

export default function Head() {
    return (
        <div style={{backgroundImage: `url(${back})`, width: "100vw", height: "6000px",  }}> 
            <BuildandPitch/>
        </div>
    );
}