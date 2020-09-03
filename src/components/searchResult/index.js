import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Button,
  fade,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  backgroundContainer: {
    backgroundColor: fade(theme.palette.common.white, 0.65),
    borderRadius: "10px",
  },
  title: {
    display: "flex",
    justifyContent: "center",
    color: "#000000",
    fontWeight: "600",
    fontSize: "xx-large",
    lineHeight: "2",
    letterSpacing: "2px",
    textShadow: "4px 4px 4px #FFFFFF",
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: "10px",
    marginBottom: "10px",
  },
  listContainer: {
    height: "400px",
    overflowY: "auto",
  },
  listText: {
    wordBreak: "break-word",
    width: "80%",
  },
}));

const SearchResult = ({ movieResults }) => {
  const classes = useStyles();

  return (
    <div className={classes.backgroundContainer}>
      <Typography className={classes.title}>Result List</Typography>
      <div className={classes.listContainer}>
        {movieResults.map((movie) => {
          return (
            <div className={classes.demo}>
              <List dense="true">
                <ListItem>
                  <ListItemText
                    className={classes.listText}
                    primary={movie.Title}
                    secondary={movie.Year}
                  />
                  <Button variant="contained" color="secondary">
                    Nominate
                  </Button>
                </ListItem>
              </List>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchResult;
