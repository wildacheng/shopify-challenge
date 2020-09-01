import React from "react";
import { Link as RouterLink } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import { Link } from "@material-ui/core";

const Navbar = () => {
  return (
    <div>
      <AppBar position="static">
        <Link
          color="inherit"
          component={RouterLink}
          to="/nomination"
          underline="none"
        >
          Nomation
        </Link>
      </AppBar>
    </div>
  );
};

export default Navbar;
