import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Box } from "@material-ui/core";
// import SearchIcon from "@material-ui/icons/Search";

import "./style.css";
import SearchBar from "../searchBar";

const useStyles = makeStyles((theme) => ({
  grid: {
    width: "100%",
    margin: "0px",
  },
  searchGrid: {
    width: "auto",
    margin: "0px",
    justifyContent: "center",
  },
  logo: {
    color: "#ffffff",
    textShadow: "4px 4px 4px #36454F"
  },
  searchContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "50%",
    width: "100%",
  },
}));

const HomePage = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.grid}>
      <Grid item xs={12} md={12} lg={12}>
        <div id="image">
          <div className={classes.searchContainer}>
            <Typography className={classes.logo} component="div">
              <Box fontWeight="fontWeightBold" fontSize="h3.fontSize">
                THE SHOPPIES
              </Box>
            </Typography>
            <Grid container className={classes.searchGrid}>
              <Grid item xs={9} md={12} lg={12}>
                <SearchBar />
              </Grid>
            </Grid>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default HomePage;
