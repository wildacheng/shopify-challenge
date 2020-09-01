import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Typography, Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
  },
  title: {
    flexGrow: 1,
    textAlign: "left",
    fontWeight: "700",
    fontSize: "1.5rem",
    lineHeight: "1.334",
  },
  toolBar: {
    paddingRight: "15%",
    paddingLeft: "15%"
  }
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolBar}>
          <Typography className={classes.title}>
            <Link
              color="inherit"
              variant="h6"
              component={RouterLink}
              to="/"
              underline="none"
            >
              The Shoppies
            </Link>
          </Typography>
            <Link
              color="inherit"
              variant="h6"
              component={RouterLink}
              to="/nomination"
              underline="none"
            >
              Nomination
            </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
