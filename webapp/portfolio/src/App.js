import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {createTheme, CssBaseline, ThemeProvider, useMediaQuery} from "@mui/material";
import {URLS} from "./constants/URLS";
import TopBar from "./components/TopBar";
import HomePage from "./pages/HomePage";


function App() {
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

    const theme = React.useMemo(() => createTheme({
        palette: {
            mode: prefersDarkMode ? "dark" : "light",
        },
    }), [prefersDarkMode],);


    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <TopBar/>
            {getRoutes()}
        </ThemeProvider>
    );
}

const getRoutes = () => {
    return (
        <Routes>
            <Route path={URLS.HOME} element={<HomePage />}/>
            <Route path={URLS.ABOUT} element={<About />}/>
        </Routes>
    );
};


function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}


export default App;
