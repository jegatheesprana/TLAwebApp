import React from "react";
import {
    Grid, Container
} from '@mui/material'
import './agenda.css'
import Heading from "../../../../shared/Heading";

function Agenda() {
    return (
        <div className="agenda-container-div">
            <Container maxWidth='lg' className="agenda-container" sx={{ pb: 4 }}>
                <Heading>நிகழ்ச்சி நிரல்</Heading>

                <Grid
                    container
                    direction="row"
                    justifyContent="space-around"
                    alignItems="center"
                    spacing={0.001}
                    cols={2}
                >
                    {/* <Grid item xl='2' lg='4' md='4' sm='6' xs='12'   >
                        <div className="agenda-card">
                            <div className="agenda-setup">
                            <div className="agenda-title"> மொறட்டுவை பல்கலைக்கழக தமிழ் இலக்கிய மன்றம் பெருமையுடன் வழங்கும்</div>
                            <div className="agenda-text-title"> பொங்கல் விழா 2023</div>
                            <div className="event-detail"> <p>திகதி - 08.01.2023</p>
                            <p>நேரம் - காலை 07:30</p>
                            <p>இடம் - பல்கலைக்கழக வளாகம்</p></div>
                            </div>

                        </div>
                    </Grid>
                    <Grid item xl='4' lg='4' md='4' sm='6' xs='12'   >
                        <div className="agenda-card2">
                            <div className="agenda-card-title"> பொங்கல் விழா 2023</div>
                            <Grid item xl='4' lg='4' md='4' sm='6' xs='8'   >
                            <div className="agenda-card22">
                            <div className="agenda-title2"> நிகழ்ச்சி நிரல்</div>
                            <div className="agenda-list">
                                 பொங்கல் பூஜை
                                <p> தமிழ்த்தாய் வாழ்த்து</p>
                                <p>வரவேற்புரை</p>
                                <p>நடனம்</p>
                                <p>வாய்ப்பாட்டு</p>
                                <p>பிரதம விருந்தினர் உரை</p>
                                <p>வில்லுப்பாட்டு</p>
                                <p>வாய்ப்பாட்டு</p>
                                <p>சிறப்பு விருந்தினர் உரை</p>
                                <p>பட்டிமன்றம்</p>
                                <p>நடனம்</p>
                                <p>நன்றி உரை</p>
                                <p>பாரம்பரிய விளையாட்டு</p></div>
                                </div>
                                </Grid>
                        </div>
                      
                    </Grid> */}
                    <a data-flickr-embed="true" data-context="true" href="https://www.flickr.com/photos/197344750@N07/52611130808/in/dateposted-public/">
                        <img src="https://live.staticflickr.com/65535/52611130808_25e5808b4c_c.jpg" width="470" height="795" alt="Screenshot (635) - Copy" ></img></a>
                    <script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>
                    <a data-flickr-embed="true" data-context="true" href="https://www.flickr.com/photos/197344750@N07/52611130403/in/dateposted-public/">
                        <img src="https://live.staticflickr.com/65535/52611130403_0972d04503_c.jpg" width="463" height="799" alt="agenda"></img></a>
                    <script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>
                </Grid>
            </Container>
        </div>
    );
}

export default Agenda