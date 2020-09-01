import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import "./style.css";
import SearchBar from "../searchBar"

const useStyles = makeStyles((theme) => ({
  grid: {
    width: "100%",
    margin: "0px",
  },
  search: {
    flexDirection: "column",
    display: "flex",
    width: "50ch",
  },
  input: {
    marginLeft: theme.spacing(2),
    flex: 1,
    fontSize: "large",
  },
  logo: {
    color: "#ffffff",
  },
  searchContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "50%",
    width: "100%",
  }
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
         <SearchBar />
        </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default HomePage;
