import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";

const Header = () => {
  return (
    <div>
      <AppBar position="static">
        <Typography variant="h2">vCard</Typography>
      </AppBar>
    </div>
  );
};

export default Header;
