import { CardContent, Typography } from "@mui/material";
import React, { Component } from "react";

class WelcomeCardContent extends Component {
  render() {
    return (
      <CardContent>
        <Typography variant="h6" color="text.primary">
          {" "}
          Welcome..!!{" "}
        </Typography>
        <Typography variant="p" color="text.secondary">
          <div style={{ paddingLeft: "2%" }}>
            Hi, I am Anikesh, a software engineer by profession. A tech
            enthusiast always looking to grow professionally and have fun in
            life. So, let us now have a look at my skills
          </div>
        </Typography>
      </CardContent>
    );
  }
}

export default WelcomeCardContent;
