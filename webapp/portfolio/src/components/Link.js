import React from "react"

import {Link as MuiLink} from '@mui/material';
import {Link as RouterLink} from "react-router-dom";

const Link = ({text, href}) => {
    return (
        <RouterLink to={href}><MuiLink>{text}</MuiLink></RouterLink>
    )
}

export default Link