import GitHub from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Mail from "@mui/icons-material/Mail";
import {
  Link,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import React from "react";

export default function NavbarMenuSm({ open, anchorEl, close }) {
  const handleClose = () => {
    close(null);
  };

  return (
    <div>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem>
          <ListItemIcon>
            <Link
              href="https://github.com/AnikS0498"
              target="_blank"
              color="inherit"
            >
              <GitHub />
            </Link>
          </ListItemIcon>
          <ListItemText>Github</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Link
              href="https://www.linkedin.com/in/aniks0498"
              target="_blank"
              color="inherit"
            >
              <LinkedIn />
            </Link>
          </ListItemIcon>
          <ListItemText>LinkedIn</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Link>
              <Mail href="mailto:anikeshsinha041198@gmail.com"/>
            </Link>
          </ListItemIcon>
          <ListItemText>Email</ListItemText>
        </MenuItem>
      </Menu>
    </div>
  );
}
