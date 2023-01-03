import React from "react";
import {
    Grid, Container
} from '@mui/material'
import './gallery.css'
import img from '../../../images/Events/Card Illustration/ani1.png'
import img2 from '../../../images/Events/Card Illustration/ani2.png'
import img3 from '../../../images/Events/Card Illustration/ani3.png'
import img4 from '../../../images/Events/Card Illustration/ani4.png'
import img5 from '../../../images/Events/Card Illustration/ani5.png'
import img6 from '../../../images/Events/Card Illustration/ani6.png'

const gallery = [
    {
        img: "https://tlauom.com/images/gallary/1%20(1).jpg",
    },
    {
        img: "	https://tlauom.com/images/gallary/1%20(2).jpg",
    },
    {
        img: "	https://tlauom.com/images/gallary/1%20(3).jpg",
    },
    {
        img: 'https://tlauom.com/images/gallary/1%20(4).jpg',
    }, {
        img: "	https://tlauom.com/images/gallary/1%20(5).jpg",
    },
    {
        img: "	https://tlauom.com/images/gallary/1%20(6).jpg",
    }, {
        img: "https://tlauom.com/images/gallary/1%20(14).jpg",
    },
    {
        img: "https://tlauom.com/images/gallary/1%20(14).jpg",
    },
    {
        img: "https://tlauom.com/images/gallary/1%20(12).jpg",
    },
    {
        img: "",
    },
]





function Gallery() {
    return (
        <div className="gallery-container-div">
            <Container maxWidth='lg' className="gallery-container">
                <div style={{ height: '10vh' }}></div>
                <div className="gallery-heading">கலை காட்சி கூடம்</div>
                <div style={{ height: '10vh' }}></div>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-around"
                    alignItems="center"
                    spacing={4}
                >
                    {gallery.map((gallery, index) => <>

                        <Grid item xl='4'lg='4'md='6'sm='12'xs='12'   >
                            <div className="gallery-card">
                                <div className="gallery-card-top">
                                    {/* <div className="gallery-card-title"> {gallery.title}</div> */}
                                    <div><img src={gallery.img} alt="" className="gallery-img"/></div>
                                </div>

                                {/* <div className="gallery-heading1">{gallery.descriiption}</div> */}

                            </div>
                        </Grid>
                        

                    </>






                    )}

                </Grid>
                <div style={{ height: '10vh' }}></div>

            </Container>
        </div>
    );
}

export default Gallery