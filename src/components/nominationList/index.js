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
    width: "auto",
    margin: "0px",
    justifyContent: "center",
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
    height: "100%",
    width: "100%",
  },
}));

const NominationList = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.grid}>
      <Grid item xs={12} md={12} lg={12}>
        <div className="backgroundImage">
          <div className={classes.listContainer}>
            <Grid container className={classes.listGrid}>
              <Grid item xs={12} md={12} lg={12}>
            <Typography className={classes.title}>
              Nomination List
            </Typography>
                <div className={classes.demo}>
                  <List dense="true">
                    <ListItem>
                      <ListItemText
                        primary="Movie Title"
                        secondary={"Release Date"}
                      />
                      <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete">
                          <DeleteIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  </List>
                </div>
                <div className={classes.demo}>
                  <List dense="true">
                    <ListItem>
                      <ListItemText
                        primary="Movie Title"
                        secondary={"Release Date"}
                      />
                      <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete">
                          <DeleteIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  </List>
                </div>
                <div className={classes.demo}>
                  <List dense="true">
                    <ListItem>
                      <ListItemText
                        primary="Movie Title"
                        secondary={"Release Date"}
                      />
                      <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete">
                          <DeleteIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  </List>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default NominationList;
