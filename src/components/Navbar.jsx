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
import NavbarMenuSm from "./NavbarMenuSm";

function Navbar(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (value) => {
    // console.log(value);
    setAnchorEl(value);
  };

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <div>
      <AppBar position="fixed" color="">
        <Toolbar>
          {isMobile ? (
            <IconButton onClick={handleMenu}>
              <MenuIcon />
            </IconButton>
          ) : null}
          {open ? (
            <NavbarMenuSm open={open} anchorEl={anchorEl} close={handleClose} />
          ) : null}
          <Typography variant="h6">Portfolio</Typography>
          {!isMobile ? (
            <IconButton color="inherit" sx={{ marginLeft: "80%" }} href="https://github.com/AnikS0498" target="_blank">
              <GitHubIcon />
            </IconButton>
          ) : null}
          {!isMobile ? (
            <IconButton color="inherit" sx={{ marginLeft: "2%" }} href="https://www.linkedin.com/in/aniks0498" target="_blank">
              <LinkedInIcon />
            </IconButton>
          ) : null}
          {!isMobile ? (
            <IconButton color="inherit" sx={{ marginLeft: "2%" }} href="mailto:anikeshsinha041198@gmail.com">
              <MailIcon />
            </IconButton>
          ) : null}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
