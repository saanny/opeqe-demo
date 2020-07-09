import React, { useState, useEffect, useContext } from "react";
import { MemoryRouter as Router } from "react-router";
import { Grid, Button, Box, makeStyles } from "@material-ui/core";
import "./searchbar.css";
import { Link as RouterLink } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import Rellax from "rellax";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
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
export default function SearchBar() {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);
  const classes = useStyles();

  const [textItem, setTextItem] = useState();
  const [menuList, setMenuList] = useState(false);
  const theme = useTheme();
  const mdBreakPoint = useMediaQuery(theme.breakpoints.up("md"));
  const changeTypeToDelivery = () => {
    appDispatch({ type: "changeTypeToDelivery" });
  };
  const changeTypeToPickup = () => {
    appDispatch({ type: "changeTypeToPickup" });
  };
  const menuListHandler = () => {
    setMenuList(!menuList);
  };
  const listItemHandler = item => {
    setTextItem(`item ${item}`);
  };
  useEffect(() => {
    let rellax = new Rellax(".rellax");
  }, []);
  return (
    <>
      <Grid container justify="center" className="home__search-bar" style={{ height: mdBreakPoint ? "70px" : "200px" }}>
        <Grid className="container" container direction={!mdBreakPoint ? "column" : "row"} item justify={!mdBreakPoint ? "center" : "space-between"} alignItems="center" xs={11}>
          <Router>
            <RouterLink to="/order-history" className="home__search-bar__options" style={{ marginBottom: mdBreakPoint ? "0px" : "10px" }}>
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
          {mdBreakPoint && <div class="home__search-bar__divider"></div>}

          <div className="home__search-bar__search" style={{ margin: mdBreakPoint ? "0 1.5rem" : "20px 0px 0px 0px" }}>
            <div className="home__search-bar__product-search">
              <Button className={classes.searchBarButton} onClick={menuListHandler}>
                {textItem ? textItem : "All"}
              </Button>
              <List style={{ opacity: menuList ? 1 : 0, visibility: menuList ? "visible" : "hidden" }} className={classes.list} subheader={<li />}>
                {[0, 1, 2, 3, 4].map(sectionId => (
                  <li key={`section-${sectionId}`} className={classes.listSection}>
                    <ul className={classes.ul}>
                      <ListSubheader className={classes.subheader}>{`I'm sticky ${sectionId}`}</ListSubheader>
                      {[0, 1, 2].map(item => (
                        <ListItem
                          key={`item-${sectionId}-${item}`}
                          className={classes.menulistspan}
                          onClick={() => {
                            listItemHandler(item);
                          }}
                        >
                          <ListItemText primary={`Item ${item}`} />
                        </ListItem>
                      ))}
                    </ul>
                  </li>
                ))}
              </List>
              <div className="home__search-bar__input-wrapper">
                <input class="input" placeholder="Looking for something?" id="use-autocomplete-demo" aria-autocomplete="both" aria-controls="use-autocomplete-demo-popup" autocomplete="off" autocapitalize="none" spellcheck="false" />
                <Router>
                  <RouterLink component={RouterLink} to="/sign-up">
                    <SearchIcon className="search-icon" style={{ fontSize: "30px" }} />
                  </RouterLink>
                </Router>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
