import { CardContent, Typography } from "@mui/material";
import React  from "react";

function WelcomeCardContent() {
  return (
    <CardContent>
      <Typography variant="h6" color="text.primary">
        {" "}
        Welcome..!!{" "}
      </Typography>
      <Typography variant="p" color="text.secondary">
        <div style={{ paddingLeft: "2%" }} className="my-3">
          <div>
            Hi, I am Anikesh, a software engineer by profession. A tech
            enthusiast, always looking to grow professionally and have fun.
            Being a backend java developer, I have keen interest on frontend as
            well. So, let's have a small overview of my skillset.
          </div>
        </div>
      </Typography>
    </CardContent>
  );
}

export default WelcomeCardContent;
