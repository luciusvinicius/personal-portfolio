import React from "react"
import {Container, Typography} from "@mui/material";

import {URLS} from "../constants/URLS";
import Link from "../components/Link";



const HomePage = () => {
    return (
        <Container>
            <Typography variant={"h3"}> Home </Typography>
            <Typography>Hello, my name is <Link href={URLS.ABOUT} text={"Lucius Vinicius Rocha Machado Filho"}/> </Typography>
        </Container>
    )
}

export default HomePage