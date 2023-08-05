import React from "react";
import {
    Container
} from '@mui/material'
import Heading from "../../../../shared/Heading";
import ImageGallery from "../../../../shared/imageGallery/ImageGallery";
import './thamilaruviGallery.css'
const images = [{
    img: "https://live.staticflickr.com/65535/53094790989_4e08b29e95_o.jpg",
    thumbnail: 'https://live.staticflickr.com/65535/53094790989_31f8e4fc7a_w.jpg',
},
{
    img: "https://live.staticflickr.com/65535/53095011135_542337fa84_o.jpg",
    thumbnail: 'https://live.staticflickr.com/65535/53095011135_dab2a9ba99_w.jpg',
},
{
    img: "https://live.staticflickr.com/65535/53094048587_3c588f93bc_o.jpg",
    thumbnail: "https://live.staticflickr.com/65535/53094048587_29bb371b18_w.jpg"

},
{
    img: "https://live.staticflickr.com/65535/53095011130_b7e391510d_o.jpg",
    thumbnail: "https://live.staticflickr.com/65535/53095011130_088fedddf1_w.jpg"

},
{
    img: "https://live.staticflickr.com/65535/53094048602_9b9c7529bf_o.jpg",
    thumbnail: "https://live.staticflickr.com/65535/53094048602_2ff91ea1c9_w.jpg"

},
{
    img: "https://live.staticflickr.com/65535/53094048612_471bd04360_o.jpg",
    thumbnail: "https://live.staticflickr.com/65535/53094048612_d41983a81b_w.jpg"

},
{
    img: "https://live.staticflickr.com/65535/53095011145_9d7b0461db_o.jpg",
    thumbnail: "https://live.staticflickr.com/65535/53095011145_5b37c7d37f_w.jpg"

},
{
    img: "https://live.staticflickr.com/65535/53094616811_f1972e90b7_o.jpg",
    thumbnail: "https://live.staticflickr.com/65535/53094616811_f6710796c6_w.jpg"

}
]




function ThamilaruviGallery() {
    return (
        <div className="gallery-container-div">
            <Container maxWidth='lg' className="gallery-container">
                <Heading >கலை காட்சி கூடம்</Heading>
                <ImageGallery images={images} />
            </Container>
        </div>
    );
}

export default ThamilaruviGallery