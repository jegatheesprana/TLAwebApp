import TA from "../../Components/events/thamilaruvi/Thamilaruvi";
import { Helmet } from "react-helmet";

const Thamilaruvi = () => {
    return (
        <>
            <Helmet>
                <title>தமிழருவி | தமிழ் இலக்கிய மன்றம்</title>
                <meta name="description" content="தமிழ் சமூகத்தின் மிகப்பெரிய பேறுகளான கலை கல்வி மற்றும் கலாச்சாரம் ஆகியவற்றின் இன்றைய விருத்திக்கும் நாளைய இருப்பிற்கும் தூணாய் நிற்க முனையும் எம் மொறட்டுவை பல்கலைகழக தமிழ் மன்றம் வருடந்தோறும் தலைநகரில் இலட்சக்கணக்கானோர் முன்னிலையில் பிரம்மாண்டத்தின் உச்சமாக நடைபெறும் கலை நிகழ்வு தமிழருவி ஆகும்" />
                <meta name="keywords" content="TLA, Tamil Literary Association, Thamilaruvi" />
            </Helmet>
            <TA />
        </>
    );
}

export default Thamilaruvi;