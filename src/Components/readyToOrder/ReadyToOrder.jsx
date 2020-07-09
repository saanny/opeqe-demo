import React, { useState, useContext } from "react";
import "./readytoorder.css";
import { MemoryRouter as Router } from "react-router";
import { Link as RouterLink } from "react-router-dom";
import { Grid, Button, Box, makeStyles } from "@material-ui/core";
import StateContext from "../../StateContext";
import DispatchContext from "../../DispatchContext";
const useStyles = makeStyles(theme => ({
  headerButtonLogin: {
    background: "#000",
    color: "#fff",
    fontSize: "11px",
    borderRadius: "30px",
    margin: "0px 20px",
    padding: "6px 6px",
    textTransform: "initial",
    "&:hover": {
      background: "#000"
    }
  },
  searchBarButton: {
    background: "#000",
    color: "#fff",
    fontSize: "17px",
    borderRadius: "30px 0 0 30px",
    margin: "0px 1px",
    padding: "6px 6px",
    textTransform: "initial",
    minWidth: "100px",
    height: "45px",
    "&:hover": {
      background: "#000"
    }
  },
  subheader: {
    backgroundColor: "#bcbcbc",
    color: "#000!important",
    fontWeight: "500",
    lineHeight: "30px",
    borderRadius: "5px"
  },
  ul: {
    backgroundColor: "inherit",
    padding: 0,
    transition: "opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"
  },
  list: {
    width: "100%",
    maxHeight: "50vh",
    width: "300px",
    backgroundColor: "#FFF",
    position: "absolute!important",
    overflow: "auto",
    top: "50px"
  },
  menulistspan: {
    cursor: "pointer",
    padding: " 1px 15px",
    marginBottom: "8px",
    borderRadius: "3px",
    "&:hover": {
      background: "#80808036"
    }
  }
}));
export default function ReadyToOrder() {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);
  const changeTypeToDelivery = () => {
    appDispatch({ type: "changeTypeToDelivery" });
  };
  const changeTypeToPickup = () => {
    appDispatch({ type: "changeTypeToPickup" });
  };
  const classes = useStyles();
  return (
    <>
      <div className="ready-to-order__title">Ready to order?</div>
      <div className="ready-to-order__subtitle">Browse our menu for dine-in, delivery or pickup and catering</div>
      <Grid container justify="center" className="ready-to-order__option-bar">
        <Grid className="container" container direction="row" item justify="center" alignItems="center" xs={11}>
          <Router>
            <RouterLink to="/order-history" className="home__search-bar__options">
              <div className="home__search-bar__options-mode">ASAP {appState.type ? "Delivery" : "Pickup"}</div>

              {!appState.type && <div className="home__search-bar__options-sub">Beverly Hills - 1008 Elden Way</div>}
              {appState.type && <div class="home__search-bar__no-address">What's Your Address ?</div>}
            </RouterLink>
            <Button component={RouterLink} to="/log-in" size="small" className={classes.headerButtonLogin}>
              change
            </Button>
          </Router>

          <div className="home__search-bar__type-select">
            <div className="home__search-bar__type-select-marker" style={{ width: "47px", transform: !appState.type ? "translateX(85px)" : "translateX(0px)" }}></div>

            <div className="home__search-bar__type-select-item" onClick={changeTypeToDelivery}>
              Delivery
            </div>
            <span className="home__search-bar__type-select-seperator">or</span>
            <div className="home__search-bar__type-select-item" onClick={changeTypeToPickup}>
              Pickup
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
