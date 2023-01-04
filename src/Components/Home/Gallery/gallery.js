import React from "react";
import {
    Grid, Container
} from '@mui/material'
import Heading from "../../shared/Heading";
import './gallery.css'
import img from '../../../images/Events/Card Illustration/ani1.png'
import img2 from '../../../images/Events/Card Illustration/ani2.png'
import img3 from '../../../images/Events/Card Illustration/ani3.png'
import img4 from '../../../images/Events/Card Illustration/ani4.png'
import img5 from '../../../images/Events/Card Illustration/ani5.png'
import img6 from '../../../images/Events/Card Illustration/ani6.png'

const gallery = [
    {
        img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    },
    {
        img: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg",
    },
    {
        img: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
    },
    {
        img: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80',
    },
    {
        img: "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg",
    },
    {
        img: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg",
    },
    {
        img: "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
    },
    {
        img: "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
    },
    {
        img: "https://images.unsplash.com/photo-1471879832106-c7ab9e0cee23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
    },
    {
        img: "https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=",
    },
]





function Gallery() {
    return (
        <div className="gallery-container-div" id="gallery">
            <Container maxWidth='lg' className="gallery-container">
                <Heading >கலை காட்சி கூடம்</Heading>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-around"
                    alignItems="center"
                    spacing={4}
                >
                    {gallery.map((gallery, index) => <>

                        <Grid item xl='4' lg='4' md='6' sm='12' xs='12'   >
                            <div className="gallery-card">
                                <div className="gallery-card-top">
                                    {/* <div className="gallery-card-title"> {gallery.title}</div> */}
                                    <div className="gallery-img-cont"><img src={gallery.img} alt="" className="gallery-img" /></div>
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