import {
  Card,
  CardContent,
  Container,
  Link,
  Button,
  CardActions,
} from "@mui/material";
import React from "react";
import projectDetails from "../projectDetails";

export default function ProjectComponent() {
  return (
    <div>
      <Container maxWidth="sm" className="my-6 p-2">
        <Card variant="outlined" className="p-2 hover:shadow-xl" sx={{ borderRadius: 3 }}>
          <CardContent>
            <div className="flex justify-center">
              <span className="font-semibold text-lg">Projects</span>
            </div>
            <div className="md:flex md:justify-center lg:flex lg:justify-center mt-4">
              {projectDetails.map((project) => {
                return (
                  <Card
                    key={project.projectId}
                    variant="outlined"
                    sx={{ borderRadius: 2 }}
                    className="my-4 mx-5 hover:transition-all hover:shadow-lg hover:scale-110 hover:duration-500"
                  >
                    <CardContent>
                      <p className="font-normal">{project.projectName}</p>
                      <br />
                      <CardActions>
                        <Button variant="outlined" color="success" size="small">
                          <Link
                            href={` ${project.projectUrl} `}
                            underline="none"
                            color="inherit"
                            target="_blank"
                          >
                            Link to the app
                          </Link>
                        </Button>
                      </CardActions>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}
