import React, { Component } from "react";
import { Button, CardActions, ButtonGroup, Link } from "@mui/material";

class ContactMe extends Component {
  render() {
    return (
      <CardActions>
        <ButtonGroup variant="outlined" color="primary" aria-label="">
          <Button>
            <Link
              color="inherit"
              underline="none"
              href="https://github.com/AnikS0498"
              target="_blank"
            >
              Github
            </Link>{" "}
          </Button>
          <Button>
            <Link
              color="inherit"
              underline="none"
              href="https://linkedin.com"
              target="_blank"
            >
              LinkedIn
            </Link>
          </Button>
          <Button>Email</Button>
        </ButtonGroup>
      </CardActions>
    );
  }
}

export default ContactMe;
