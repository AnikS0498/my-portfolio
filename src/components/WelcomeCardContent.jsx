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
            enthusiast, always looking to grow professionally and have fun. I
            always had an interest in developing UIs so now, I am exploring
            ReactJs (no hate for Angular, even though I do have limited
            knowledge😅, but would love to explore it as well).
            {readMore &&
              `Isn't that great?. Yes, I have my interest in frontend field but
            that doesn't mean I have no knowledge in backend. Let's have a 
            overview of my skillset.`}
            <Button variant="text" onClick={() => setReadMore(!readMore)}>
              {!readMore ? `Read More...` : `Read less`}
            </Button>
          </div>
        </div>
      </Typography>
    </CardContent>
  );
}

export default WelcomeCardContent;
