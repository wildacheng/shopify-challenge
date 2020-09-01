import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import { IconButton, InputBase } from "@material-ui/core";

import SearchIcon from "@material-ui/icons/Search";

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
}));

const SearchBar = () => {
  const classes = useStyles();

  return (
        <div className={classes.container}>
          <div className={classes.search}>
            <InputBase
              placeholder="Search movie title"
              className={classes.input}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div className={classes.button}>
            <IconButton type="submit" aria-label="search">
              <SearchIcon />
            </IconButton>
          </div>
        </div>
  );
};

export default SearchBar;
