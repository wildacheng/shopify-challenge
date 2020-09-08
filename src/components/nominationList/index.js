import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Grid,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
  grid: {
    width: "100%",
    height: "100%",
    margin: "0px",
  },
  listGrid: {
    display: "flex",
    justifyContent: "center",
    width: "90%",
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: "10px",
    marginBottom: "20px",
  },
  title: {
    color: "#ffffff",
    fontWeight: "600",
    fontSize: "xxx-large",
    lineHeight: "2",
    letterSpacing: "2px",
    textShadow: "4px 4px 4px #36454F",
  },
  listContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "40%",
    width: "100%",
  },
}));

const NominationList = () => {
  const [storedNomination, setNomination] = React.useState({});

  React.useEffect(() => {
    const nominations = JSON.parse(localStorage.getItem("nomination") || {});
    setNomination(nominations);
  }, []);

  const classes = useStyles();

  const handleClick = (movieTitle) => {
    let list = {
      ...storedNomination,
    };
    delete list[movieTitle];

    setNomination(list);
    localStorage.setItem("nomination", JSON.stringify(list));
  };

  return (
    <Grid container className={classes.grid}>
      <Grid item xs={12} md={12} lg={12}>
        <div className="backgroundImage">
          <div className={classes.listContainer}>
            <Typography className={classes.title}>Nomination List</Typography>
          </div>
          <Grid container className={classes.listGrid}>
            <Grid item xs={9} md={6} lg={4}>
              {Object.values(storedNomination).map((movie) => {
                return (
                  <div className={classes.demo}>
                    <List dense="true">
                      <ListItem>
                        <ListItemText
                          primary={movie.Title}
                          secondary={movie.Year}
                        />
                        <ListItemSecondaryAction>
                          <IconButton
                            onClick={() => handleClick(movie.Title)}
                            edge="end"
                            aria-label="delete"
                          >
                            <DeleteIcon />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                    </List>
                  </div>
                );
              })}
            </Grid>
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
};

export default NominationList;
