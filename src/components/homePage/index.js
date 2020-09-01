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
  container: {
    position: "absolute",
    display: "flex",
    justifyContent: "flex-end",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 1),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.85),
    },
    width: "50ch",
    top: "45%",
    height: "48px",
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
    position: "absolute",
    top: "35%",
    color: "#ffffff",
  }
}));

const HomePage = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.grid}>
      <Grid item xs={6} md={12} lg={12}>
      <img
        id="image"
        src='https://wallpaperaccess.com/full/1597777.jpg'
      />
         <div className="search-container">
         <Typography className={classes.logo} component="div">
          <Box fontWeight="fontWeightBold" fontSize="h3.fontSize">
            THE SHOPPIES
          </Box>
        </Typography>
         <SearchBar />
        </div>

      </Grid>
    </Grid>
  );
};

export default HomePage;
