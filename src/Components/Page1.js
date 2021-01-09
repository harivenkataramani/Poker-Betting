import React from "react";
import { connect } from "react-redux";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import SearchIcon from "@material-ui/icons/Search";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";

import * as actions from "../Redux/Actions/index";
import Table from "../UI/Table";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#86868652",
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    margin: "0px 1rem",
  },
  diceContainer: {
    margin: "0px 0px 2rem",
  },
  dice: {
    padding: "4px",
    border: "4px solid blue",
    width: "50px",
    height: "50px",
    borderRadius: "20%",
    backgroundColor: "white",
    margin: "0px 4rem",
  },
  dicedot: {
    display: "block",
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: "blue",
  },
  onedice: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  margin: {
    margin: theme.spacing(1),
  },
  mainItem: {
    margin: "1rem 0",
  },
}));

const Page1 = (props) => {
  const classes = useStyles();
  //   const [players, setPlayers] = [];

  return (
    <React.Fragment>
      <div className={classes.root}>
        <CssBaseline />
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="left"
        >
          <div className={classes.toolbar} />
          <Grid container className={classes.diceContainer}>
            <Grid container align="center" justify="flex-end">
              <Grid item>
                <div className={clsx(classes.dice, classes.onedice)}>
                  <span className={classes.dicedot}></span>
                </div>
              </Grid>
            </Grid>
            <Grid container justify="flex-start" align="center">
              <Grid item>
                <div className={clsx(classes.dice, classes.onedice)}>
                  <span className={classes.dicedot}></span>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Divider />
          <Grid container direction="column">
            <Grid item style={{ margin: "0.5rem 1rem" }}>
              Playing: {props.selectedPlayers.length}
            </Grid>
            {props.selectedPlayers.map((player) => {
              console.log(player);
              return (
                <Grid item>
                  <Grid
                    container
                    direction="row"
                    key={player.Name}
                    justify="space-around"
                    style={{ margin: "0.5rem 0" }}
                  >
                    <Grid item xs={4} style={{ padding: "0.5rem 1rem" }}>
                      <Avatar variant="rounded" src={player["Profile Image"]} />
                    </Grid>
                    <Grid item xs={4}>
                      <Grid container>
                        <Grid item>
                          <Typography align="left" variant="body1" gutterBottom>
                            {player.Name}
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid container justify="space-evenly">
                        <Grid item>🏆 {player.wins}</Grid>
                        <Grid item>🎯 {player.Bet}</Grid>
                      </Grid>
                    </Grid>
                    <Grid
                      item
                      xs={4}
                      style={{ textAlign: "center", padding: "1rem 0" }}
                    >
                      💰 {player.Price}
                    </Grid>
                  </Grid>
                </Grid>
              );
            })}
            <Grid item style={{ padding: "0 1rem" }}>
              <FormControl fullWidth>
                <Button variant="contained" color="primary">
                  START
                </Button>
              </FormControl>
            </Grid>
          </Grid>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Grid container direction="column" justify="space-evenly">
            <Grid item className={classes.mainItem}>
              <Typography variant="h6" gutterBottom>
                Select Playing 9
              </Typography>
            </Grid>
            <Grid item className={classes.mainItem}>
              <FormControl className={classes.margin}>
                <Input
                  id="input-with-icon-adornment"
                  placeholder="Search Players"
                  startAdornment={
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Grid>
            <Grid item className={classes.mainItem}>
              <Table />
            </Grid>
          </Grid>
        </main>
      </div>
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onfetchPlayers: () => dispatch(actions.fetchPlayers()),
  };
};

const mapStateToProps = (state) => {
  return {
    playersData: state.page1Reducer.players,
    selectedPlayers: state.page1Reducer.selectedPlayers,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page1);
