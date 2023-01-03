import PongalIntro from "../../Components/events/thaipongal/PongalIntro";
import PongalGallery from "../../Components/events/thaipongal/pongalGallery/PongalGallery";
import Sponsors from "../../Components/events/thaipongal/sponsors/Sponsors";


const Thaipongal = () => {
    return (
        <>
            <PongalIntro />
            <Sponsors />
            <PongalGallery />
        </>
    );
}

export default Thaipongal;