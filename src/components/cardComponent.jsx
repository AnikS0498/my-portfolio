import React, { Component } from "react";
import Container from "@mui/material/Container";
import "../styles/cardComponent.css";
import CardHeader from "./cardHeader";
import WelcomeCardContent from "./WelcomeCardContent";
import SkillsCardContent from "./SkillsCardContent";
import { Card, createTheme } from "@mui/material";
// import ContactMe from "./ContactMe"; 
import Navbar from "./Navbar";
import { ThemeProvider } from "@mui/system";
import { green, orange } from "@mui/material/colors";
import Footer from "./Footer";

class cardComponent extends Component {
  render() {
    const theme = createTheme({
      typography: {
        h1: {
          /* this will change the font size for h1, we can also do 
            it for others, */
          fontSize: "3rem",
        },
      },
      palette: {
        /* this is used to turn the background dark, but we have 
            to use Paper for this inOrder to use it. */
        type: "dark",
        primary: {
          // main: colorName[hue],
          // we have to import the color first to use it
          main: green[600],
        },
        secondary: {
          main: orange[400],
        },
      },
    });

    return (
      <div>
        <ThemeProvider theme={theme}>
          <Navbar />
        </ThemeProvider>

        <Container maxWidth="md" className="container" sx={{ borderRadius: 4, mt: 15, mb: 10, p: 2 }}>
          <Card variant="">
            <CardHeader />

            <WelcomeCardContent />

            <SkillsCardContent />

            {/* <ContactMe /> */}
          </Card>
        </Container>
        <Footer/>
      </div>
    );
  }
}

export default cardComponent;
