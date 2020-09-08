import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, fade } from "@material-ui/core";

import "./style.css";
import SearchBar from "../searchBar";
import SearchResult from "../searchResult";

const useStyles = makeStyles((theme) => ({
  grid: {
    width: "100%",
    height: "100%",
    margin: "0px",
  },
  searchGrid: {
    width: "auto",
    marginBottom: "10px",
    justifyContent: "center",
  },
  titleContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "10px"
  },
  title: {
    color: "#ffffff",
    fontWeight: "600",
    fontSize: "xxx-large",
    lineHeight: "2",
    letterSpacing: "2px",
    textShadow: "4px 4px 4px #36454F",
  },
  subTitle: {
    color: "#ffffff",
    fontWeight: "600",
    fontSize: "large",
    textShadow: "4px 4px 4px #000000",
  },
  searchContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "50%",
    width: "100%",
    marginTop: "10px"
  },
  resultContainer: {
    display: "flex",
    justifyContent: "center",
    width: "90%",
  },
}));

const HomePage = () => {
  const [results, setResults] = React.useState([]);

  const movieResults = results;

  const classes = useStyles();

  return (
    <Grid container className={classes.grid}>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <div className="backgroundImage">
          <div className={classes.searchContainer}>
            <div className={classes.titleContainer}>
            <Typography className={classes.title}>THE SHOPPIES</Typography>
            <Typography className={classes.subTitle}>Pick your top 5 nominations!</Typography>
            </div>
            <Grid container className={classes.searchGrid}>
              <Grid item xs={6} md={12} lg={12}>
                <SearchBar setState={setResults} />
              </Grid>
            </Grid>
          </div>
          <Grid container className={classes.resultContainer}>
            <Grid item xs={9} md={8} lg={6}>
              {!!results.length && <SearchResult movieResults={movieResults} />}
            </Grid>
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
};

export default HomePage;
