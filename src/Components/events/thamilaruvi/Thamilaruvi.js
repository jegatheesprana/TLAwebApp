import Agenda from "./agenda/Agenda";
import ThamilaruviIntro from "./intro/ThamilaruviIntro";
import ThamilaruviGallery from "./thamilaruviGallery/ThamilaruviGallery";
// import Sponsors from "./sponsors/Sponsors";

import './thamilaruvi.css'

const Thamilaruvi = () => {
    return (
        <>
            <div className="thaipongal-container">
                <ThamilaruviIntro />
                <Agenda />
            </div>
            <div className="thaipongal-container2">
                {/* <Sponsors /> */}
                <ThamilaruviGallery />
            </div>
        </>
    );
}

export default Thamilaruvi;