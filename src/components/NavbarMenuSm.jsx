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
            <GitHub />
            <Link
              href="https://github.com/AnikS0498"
              target="_blank"
              color="inherit"
              underline="none"
            >
              <ListItemText className="mx-2">Github</ListItemText>
            </Link>
          </ListItemIcon>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <LinkedIn />

            <Link
              href="https://www.linkedin.com/in/aniks0498"
              target="_blank"
              color="inherit"
              underline="none"
            >
              <ListItemText className="mx-2">LinkedIn</ListItemText>
            </Link>
          </ListItemIcon>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Mail />
            <Link
              href="mailto:anikeshsinha041198@gmail.com"
              target="_blank"
              color="inherit"
              underline="none"
            >
              <ListItemText className="mx-2">Email</ListItemText>
            </Link>
          </ListItemIcon>
        </MenuItem>
      </Menu>
    </div>
  );
}
