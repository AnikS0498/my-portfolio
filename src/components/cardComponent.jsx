import React, { useState } from "react";
import Container from "@mui/material/Container";
import "../styles/cardComponent.css";
import CardHeader from "./cardHeader";
import WelcomeCardContent from "./WelcomeCardContent";
import SkillsCardContent from "./SkillsCardContent";
import { Card, createTheme } from "@mui/material";
import Navbar from "./Navbar";
import { ThemeProvider } from "@mui/system";
import { green, orange } from "@mui/material/colors";
import Footer from "./Footer";
import ArrowDownButton from "./ArrowDownButton";
import ProjectComponent from "./ProjectComponent";
import ArrowUpButton from "./ArrowUpButton";

function CardComponent() {
  const [arrowDown, setArrowDown] = useState(false);
  const [arrowUp, setArrowUp] = useState(false);

  const handleArrowDownButton = () => {
    setArrowDown(!arrowDown);
    setArrowUp(false);
  };

  const handleArrowUpButton = () => {
    setArrowUp(!arrowUp);
    setArrowDown(false);
  };

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

      <Container maxWidth="md" className="mt-28 mb-5 p-2">
        <Card
          variant=""
          className="p-4 hover:shadow-xl "
          sx={{ borderRadius: 4 }}
        >
          <CardHeader />

          <WelcomeCardContent />

          <SkillsCardContent />
        </Card>
      </Container>
      <div className="flex justify-center">
        {!arrowDown ? (
          <button onClick={handleArrowDownButton}>
            <ArrowDownButton arrowDownClicked={arrowDown} />
          </button>
        ) : (
          <button onClick={handleArrowUpButton}>
            <ArrowUpButton />
          </button>
        )}
      </div>

      {arrowDown && !arrowUp && <ProjectComponent />}

      <Footer />
    </div>
  );
}

export default CardComponent;
