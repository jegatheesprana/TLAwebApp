import React from "react"
import { Container, Grid } from '@mui/material'
import './contact.css'

function Contact() {
    return (
        <div className="contact-container-div">
            <Container maxWidth='xl' className="contact-container-div">
                {/* <div style={{ height: '10vh' }}></div> */}

                <div className="contact-heading">
                    தொடர்புகள்
                </div>
                <div style={{ height: '5vh' }}></div>

                <div className="contact-container">
                    <Grid
                        container spacing={4}
                        direction="column"
                        justifyContent="space-around"
                        alignItems="stretch"
                    >
                        <Grid item>
                            <div className="contact-row">NAME</div>
                            <div className="contact-icon-div">
                                <input className="contact-input"></input> <span class=" contact-icon material-symbols-outlined">
                                    person
                                </span>
                            </div>
                        </Grid>
                        <Grid item>
                            <div className="contact-row">EMAIL</div>
                            <div className="contact-icon-div">
                                <input className="contact-input"></input> <span class=" contact-icon material-symbols-outlined">
                                    mail
                                </span>
                            </div>                        </Grid>
                        <Grid item>
                            <div className="contact-row">YOUR MESSAGE</div>
                            <div className="contact-icon-div">
                                <input className="contact-input"></input>
                            </div>                          </Grid>
                        <Grid item>
                            <button className="contact-send-button">Send Message</button>
                        </Grid>
                    </Grid>
                   

                </div>
            </Container>
        </div>
    );
}
export default Contact
