import {
  CardContent,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse,
} from "@mui/material";
import React, { Component } from "react";
import { Typography } from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

class SkillsCardContent extends Component {
  constructor() {
    super();
    this.state = {
      databaseSkillDropdown: false,
      frameworkDropdown: false,
      libraryDropdown: false,
    };
  }

  render() {
    const handleDatabaseButtonClick = () => {
      this.setState({
        databaseSkillDropdown: !this.state.databaseSkillDropdown,
      });
      // console.log(this.state.databaseSkillDropdown);
    };

    const handleFrameworkDropdownClick = () => {
      this.setState({
        frameworkDropdown: !this.state.frameworkDropdown,
      });
    };

    const handleLibraryDropdownClick = () => {
      this.setState({
        libraryDropdown: !this.state.libraryDropdown,
      });
    };
    return (
      <CardContent>
        <Typography variant="h6" color="text.primary">
          Skills
        </Typography>
        <List>
          <ListItem>
            <ListItemText secondary="JEE Fullstack developer" />
          </ListItem>
          <ListItem>
            <ListItemText secondary="Salesforce Certified Platform Developer I" />
          </ListItem>
          <ListItemButton onClick={handleDatabaseButtonClick}>
            <ListItemText secondary="Databases" />
            {this.state.databaseSkillDropdown ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={this.state.databaseSkillDropdown}>
            <ListItem sx={{ pl: 4 }}>
              <ListItemText secondary="Oracle" />
            </ListItem>
            <ListItem sx={{ pl: 4 }}>
              <ListItemText secondary="MySql" />
            </ListItem>
            <ListItem sx={{ pl: 4 }}>
              <ListItemText secondary="MongoDB" />
            </ListItem>
          </Collapse>
          <ListItemButton onClick={handleFrameworkDropdownClick}>
            <ListItemText secondary="Framework" />
            {this.state.frameworkDropdown ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={this.state.frameworkDropdown}>
            <ListItem sx={{ pl: 4 }}>
              <ListItemText secondary="Spring" />
            </ListItem>
            <ListItem sx={{ pl: 4 }}>
              <ListItemText secondary="Angular" />
            </ListItem>
          </Collapse>
          <ListItemButton onClick={handleLibraryDropdownClick}>
            <ListItemText secondary="Library" />
            {this.state.libraryDropdown ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={this.state.libraryDropdown}>
            <ListItem sx={{ pl: 4 }}>
              <ListItemText secondary="ReactJS" />
            </ListItem>
          </Collapse>
        </List>
      </CardContent>
    );
  }
}

export default SkillsCardContent;
