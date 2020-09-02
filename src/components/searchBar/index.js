import React from "react";
import Axios from "axios"
import { fade, makeStyles } from "@material-ui/core/styles";
import { IconButton, InputBase } from "@material-ui/core";

import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "flex-end",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 1),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.85),
    },
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
}));

const SearchBar = ({setResults}) => {
  const [movie, setMovie] = React.useState("");
  console.log(movie, 'THIS IS MOVIE')

  const classes = useStyles();

  const handleChange = (event) => {
    setMovie(event.target.value);
  };

  const handleClick = async() => {
    try {
      let movieTitle = movie.split(" ").join("+")
      const results = await Axios.get(`http://www.omdbapi.com/?s=${movieTitle}&apikey=${process.env.REACT_APP_OMD_API}`);
      console.log(results, "IM RESULT");
      // console.log(results.data.Title, "IM Title");
      // console.log(results.data.Year, "IM Year");
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.search}>
        <InputBase
          onChange={handleChange}
          placeholder="Search movie"
          className={classes.input}
          inputProps={{ "aria-label": "search" }}
        />
      </div>
      <div className={classes.button}>
        <IconButton
        onClick={handleClick}
        type="submit" aria-label="search">
          <SearchIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default SearchBar;
