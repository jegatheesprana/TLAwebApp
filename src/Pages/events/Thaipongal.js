import PongalIntro from "../../Components/events/thaipongal/PongalIntro";
import PongalGallery from "../../Components/events/thaipongal/pongalGallery/PongalGallery";
import Sponsors from "../../Components/events/thaipongal/sponsors/Sponsors";
import Agenda from "../../Components/events/thaipongal/agenda/Agenda";
import './thaipongal.css'

const Thaipongal = () => {
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

export default Thaipongal;