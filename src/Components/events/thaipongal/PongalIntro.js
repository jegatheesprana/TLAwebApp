import React from "react";
import {
    Grid, Container
} from '@mui/material'
import Heading from "../../../shared/Heading";
import './intro.css'

function PongalIntro() {
    return (
        <>
            <div className="pongal-landing-container-div">
                <Container maxWidth='' className="pongal-landing-container">
                    <div className="pongal-landing-heading1"><span className="pongal-landing-heading-letter">தை</span>ப்பொங்கல்</div>
                </Container>
            </div>
            <div className="intro-container-div">
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
                                <div className="intro-heading1">மதபேதமின்றி சூரியனுக்கும் விளைச்சலுக்கும் உதவிய கால்நடைகளுக்கு நன்றி கூறும் முகமாக தைமாதம் பல்கலைகழக வளாகத்தினுள் பாரம்பரியத்தை பறைசாற்றும் வகையில் பொங்கல் பொங்கி பாரம்பரிய கலாச்சார உடையில் தீப்பண்டங்களை விருந்தோம்பல் செய்து பாரம்பரிய தமிழர் விளையாட்டுக்களுடன் விழாக்கோலம் கானும்.</div>

                            </Container>
                        </Grid>
                        <Grid item sm='5'>
                            <br /><br />
                            <div className="intro-heading2">தைப்பொங்கல் !!</div>
                            <p className="intro-heading2"></p>

                        </Grid>

                    </Grid>
                </Container>
            </div>
        </>
    );
}

export default PongalIntro