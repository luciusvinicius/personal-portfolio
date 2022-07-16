import React from "react"
import {Avatar, Container, Grid, Typography} from "@mui/material";

const imageSize = "100%"


const AboutPage = () => {
    return (
        <Container>
            <br/>
            <Grid container justifyContent={"center"}>
                <Grid item xs={4}>
                    <img
                        src="/images/perfil.jpeg"
                        style={{height: imageSize}}
                    />
                    {/*<Avatar*/}
                    {/*    alt="Lucius Vinicius"*/}
                    {/*    src="/images/perfil.jpeg"*/}
                    {/*    sx={{height: imageSize}}*/}
                    {/*/>*/}
                </Grid>
                <Grid item xs={8} justifyContent={"center"}>
                    <Typography variant={"h3"}>Lucius Vinicius Rocha Machado Filho</Typography>
                    <Typography variant={"h5"}>Computer Science and Engineering Graduated.</Typography>
                </Grid>
            </Grid>
        </Container>
    )
}

export default AboutPage