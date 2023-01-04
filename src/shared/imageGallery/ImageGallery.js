import { Grid } from "@mui/material";
import ViewImage from "./ViewImage";

import './imageGallery.css'
import { useState } from "react";

const ImageGallery = ({ images }) => {
    const [viewImage, setViewImage] = useState(null);

    const handleClose = () => {
        setViewImage(null)
    }

    const handleClick = (id) => {
        setViewImage(id)
    }

    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="center"
                spacing={4}
            >
                {images.map((gallery, index) => <>
                    <Grid item xl='4' lg='4' md='6' sm='12' xs='12' key={index} onClick={() => handleClick(index)} >
                        <div className="img-gallery-card">
                            <div className="img-gallery-card-top">
                                {/* <div className="img-gallery-card-title"> {gallery.title}</div> */}
                                <div className="img-gallery-img-cont"><img src={gallery.thumbnail} alt="" className="img-gallery-img" /></div>
                            </div>
                            {/* <div className="img-gallery-heading1">{gallery.descriiption}</div> */}
                        </div>
                    </Grid>
                </>
                )}
            </Grid>
            <ViewImage open={viewImage !== null} handleClose={handleClose} src={(viewImage !== null) && images[viewImage].img} />
        </>
    );
}

export default ImageGallery;