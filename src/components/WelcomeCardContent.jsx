import { CardContent, Typography, Button } from "@mui/material";
import React, { useState } from "react";

function WelcomeCardContent() {
  const [readMore, setReadMore] = useState(false);

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
            Being a backend java developer, I have keen interest on frontend as well.
            So, let's have a small overview of my skillset.
            {/* <Button variant="text" onClick={() => setReadMore(!readMore)}>
              {!readMore ? `Read More...` : `Read less`}
            </Button> */}
          </div>
        </div>
      </Typography>
    </CardContent>
  );
}

export default WelcomeCardContent;
