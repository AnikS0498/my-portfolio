import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/system";

function Navbar(props) {
  const [anchor, setAnchor] = React.useState(null);
  const open = Boolean(anchor);

  const handleMenu = (event) => {
    setAnchor(event.currentTarget);
  };

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <div>
      {/* <Box sx={{ display: { xs }></Box> */}
      <AppBar position="fixed" color="">
        <Toolbar>
          {isMobile ? (
            <IconButton>
              <MenuIcon />
            </IconButton>
          ) : null}
          <Typography variant="h6">Portfolio</Typography>
          {!isMobile ? (
            <IconButton color="inherit" sx={{ marginLeft: "80%" }}>
              <GitHubIcon />
            </IconButton>
          ) : null}
          {!isMobile ? (
            <IconButton color="inherit" sx={{ marginLeft: "2%" }}>
              <LinkedInIcon />
            </IconButton>
          ) : null}
          {!isMobile ? (
            <IconButton color="inherit" sx={{ marginLeft: "2%" }}>
              <MailIcon />
            </IconButton>
          ) : null}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
