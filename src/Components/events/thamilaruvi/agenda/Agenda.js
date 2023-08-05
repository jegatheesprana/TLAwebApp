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
                    <a data-flickr-embed="true" href="https://www.flickr.com/photos/197413649@N04/53094737194/in/album-72177720310264996/" title="Pink Diwali festival rangoli vector Indian frame">
                        <img src="https://live.staticflickr.com/65535/53094737194_b86ec2f7f9_k.jpg" width="470" height="795" alt="Pink Diwali festival rangoli vector Indian frame" />
                    </a>
                    <script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>
                    <a data-flickr-embed="true" href="https://www.flickr.com/photos/197413649@N04/53093994607/in/album-72177720310264996/" title="agenda">
                        <img src="https://live.staticflickr.com/65535/53093994607_5e101ac6c9_b.jpg" width="470" height="795" alt="agenda" />
                    </a>
                    <script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>
                </Grid>
            </Container>
        </div>
    );
}

export default Agenda