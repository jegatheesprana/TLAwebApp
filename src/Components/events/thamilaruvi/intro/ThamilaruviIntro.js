import React from "react";
import {
    Grid, Container
} from '@mui/material'
import Heading from "../../../../shared/Heading";
import './thamilaruviintro.css'

function PongalIntro() {
    return (
        <>
            <div className="pongal-landing-heading1"><span className="pongal-landing-heading-letter">தமிழருவி</span></div>
            <div className="pongal-landing-container-div">
                <Container maxWidth='' className="pongal-landing-container">
                </Container>
            </div>
            {/* <div className="intro-container-div"> */}
            <Container maxWidth='xl' className="intro-container">
                <Heading>அறிமுகம்</Heading>
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item sm='1' >

                    </Grid>
                    <Grid item sm='12'>
                        <div style={{ height: '5vh' }}></div>
                        <Container maxWidth="md">
                            <div className="intro-heading1">தமிழ் சமூகத்தின் மிகப்பெரிய பேறுகளான கலை கல்வி மற்றும் கலாச்சாரம் ஆகியவற்றின் இன்றைய விருத்திக்கும் நாளைய இருப்பிற்கும் தூணாய் நிற்க முனையும் எம் மொறட்டுவை பல்கலைகழக தமிழ் மன்றம் வருடந்தோறும் தலைநகரில் இலட்சக்கணக்கானோர் முன்னிலையில் பிரம்மாண்டத்தின் உச்சமாக நடைபெறும் கலை நிகழ்வு "தமிழருவி" ஆகும்</div>
                        </Container>
                    </Grid>
                    <Grid item sm='5'>
                        <br /><br />
                        <div className="intro-heading2">தமிழருவி !!</div>
                        <p className="intro-heading2"></p>

                    </Grid>

                </Grid>
            </Container>
            {/* </div> */}
        </>
    );
}

export default PongalIntro