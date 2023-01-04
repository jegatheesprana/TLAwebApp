import React from "react";
import {
    Grid, Container
} from '@mui/material'
import './sponsors.css'
import img from '../../../../images/Events/Card Illustration/ani1.png'
import img2 from '../../../../images/Events/Card Illustration/ani2.png'
import img3 from '../../../../images/Events/Card Illustration/ani3.png'
import img4 from '../../../../images/Events/Card Illustration/ani4.png'
import img5 from '../../../../images/Events/Card Illustration/ani5.png'
import img6 from '../../../../images/Events/Card Illustration/ani6.png'
import Heading from "../../../../shared/Heading";

const sponsorsDetails = [
    {
        title: 'Sponsor 1',
        img: img,
        descriiption: 'Sponsor 1 details'
    },
    {
        title: 'Sponsor 2',
        img: img2,
        descriiption: 'Sponsor 2 details'
    },
    {
        title: 'Sponsor 3',
        img: img3,
        descriiption: 'Sponsor 3 details'
    },
]

function Sponsors() {
    return (
        <div className="sponsors-container-div">
            <Container maxWidth='lg' className="sponsors-container" sx={{ pb: 4 }}>
                <Heading>Sponsors</Heading>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-around"
                    alignItems="center"
                    spacing={4}
                >
                    {sponsorsDetails.map((sponsor, index) => <>

                        <Grid item xl='4' lg='4' md='4' sm='6' xs='12'   >
                            <div className="sponsors-card">
                                <div className="sponsors-card-top">
                                    <div className="sponsors-card-title"> {sponsor.title}</div>
                                    <div><img src={sponsor.img} alt="" className="sponsors-img" /></div>
                                </div>
                                <div className="sponsors-heading1">{sponsor.descriiption}</div>
                            </div>
                        </Grid>
                    </>
                    )}

                </Grid>
            </Container>
        </div>
    );
}

export default Sponsors