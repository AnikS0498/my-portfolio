import React, { Component } from "react";
import { CardHeader } from "@mui/material";
import { Avatar } from "@mui/material";
import { IconButton } from "@mui/material";
import avatar from "../static/images/dp.png";

class cardHeader extends Component {
  render() {
    return (
      <CardHeader
        avatar={
          <Avatar
            src={avatar}
            sx={{ width: 80, height: 80 }}
            aria-label="display-picture"
          >
            {/* AS */}
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
