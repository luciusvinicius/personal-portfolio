import React from "react"
import {Container, Typography} from "@mui/material";

import {URLS} from "../constants/URLS";
import Link from "../components/Link";



const HomePage = () => {
    return (
        <Container>
            <br/>
            <Typography variant={"h3"}> Home </Typography>
            <br/>
            <Typography>Hello, my name is <Link href={URLS.ABOUT} text={"Lucius Vinicius Rocha Machado Filho"}/> and
                I am graduated at Software Engineer.</Typography>
            <br/>
            <Typography>This website was created using the ReactJS library.</Typography>
        </Container>
    )
}

export default HomePage