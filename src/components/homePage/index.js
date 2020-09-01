import React from "react";
import { makeStyles } from "@material-ui/core/styles"
import InputBase from '@material-ui/core/InputBase';
import { Grid } from "@material-ui/core"

import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  grid: {
    width: '100%',
    margin: '0px'
  },
  inputRoot: {
    color: 'inherit',
  },
}))

const HomePage = () => {
  const classes = useStyles

  return (
      <Grid container className={classes.grid}>
        <Grid item>
        <InputBase
              placeholder="Enter Movie Title..."
              classes={{
                root: classes.inputRoot,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />

        </Grid>

      </Grid>
  )
}

export default HomePage
