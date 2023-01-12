import Agenda from "./agenda/Agenda";
import PongalIntro from "./intro/PongalIntro";
import PongalGallery from "./pongalGallery/PongalGallery";
import Sponsors from "./sponsors/Sponsors";

import './thaipongal.css'

const Pongal = () => {
    return (
        <>
            <div className="thaipongal-container">
                <PongalIntro />
                <Agenda />
            </div>
            <div className="thaipongal-container2">
                <Sponsors />
                <PongalGallery />
            </div>
        </>
    );
}

export default Pongal;