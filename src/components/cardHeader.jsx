import React, { Component } from "react";
import { CardHeader } from "@mui/material";
import { Avatar } from "@mui/material";
import { IconButton } from "@mui/material";
import { deepOrange } from "@mui/material/colors";

class cardHeader extends Component {
  render() {
    return (
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: deepOrange[500] }}
            aria-label="display-picture"
          >
            AS
          </Avatar>
        }
        action={<IconButton aria-label=""></IconButton>}
        title="ANIKESH SINHA"
        subheader="Software Engineer"
      />
    );
  }
}

export default cardHeader;
