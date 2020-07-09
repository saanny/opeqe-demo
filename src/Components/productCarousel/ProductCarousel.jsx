import React from "react";
import { Grid, Button, Box, makeStyles } from "@material-ui/core";
import "./horizontalList.css";
import image1 from "./3.jpg";
import image2 from "./14.jpg";
import image3 from "./5.jpg";
import { Link as RouterLink } from "react-router-dom";
import { MemoryRouter as Router } from "react-router";
import TimerIcon from "@material-ui/icons/Timer";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
export default function ProductCarousel(props) {
  const { header } = props;
  const theme = useTheme();
  const mdBreakPoint = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <>
      <Grid className="container" container direction="row" item justify="space-between" alignItems="center" xs={11}>
        <div className="horizontal-list horizontal-list-container">
          <div className="horizontal-list__header">
            <div className="horizontal-list__title">{header}</div>
          </div>
          <div className="horizontal-list__scroll-bar scroll-bar">
            <div className="horizontal-list__scroll-bar__bar">
              <div className="horizontal-list__scroll-bar__cursor"></div>
            </div>
          </div>
          <div className="horizontal-list__list">
            <div className="horizontal-list__container" style={{ paddingRight: mdBreakPoint ? "0px" : "0px" }}>
              <Grid className="horizontal-list__scroll" container direction="row" alignItems="center">
                <Grid item xs={mdBreakPoint ? 4 : 12}>
                  <div>
                    <div className="horizontal-list__card-container">
                      <Grid className="horizontal-list__food-card" container direction="row" alignItems="center">
                        <div className="horizontal-list__image" style={{ height: " 220px", borderRadius: "5px" }}>
                          <Router>
                            <RouterLink to="/order-history">
                              <img src={image1} alt="" />
                            </RouterLink>
                          </Router>
                          <span className="horizontal-list__item-label">Chief Special</span>
                        </div>
                        <Grid className="horizontral-list__item-info-card" container direction="column" item justify="space-between">
                          <div className="horizontal-list__item-info-list__title">T-Bone Steak & Eggs</div>
                          <div className="horizontal-list__item-sub-title">
                            <Router>
                              <RouterLink to="/order-history" className="horizontal-list__item-sub-title-main">
                                Salad
                              </RouterLink>
                              <RouterLink to="/order-history" className="horizontal-list__item-sub-title-sub">
                                American
                              </RouterLink>
                              <RouterLink to="/order-history" className="horizontal-list__item-sub-title-sub">
                                Appetizer
                              </RouterLink>
                            </Router>
                          </div>
                          <Grid className="horizontral-list__item-info-extra" container justify="space-between">
                            <span>
                              <span class="horizontral-list__item-info-tag horizontral-list__item-info-light">
                                <TimerIcon style={{ fontSize: "14px" }} />
                                4-6 Mins
                              </span>
                              <span className="horizontral-list__item-info-tag horizontral-list__item-info-dark">$12.50</span>
                            </span>
                            <span className="horizontral-list__item-info-tag horizontral-list__item-info-green horizontral-list__item-info-light">Free Delivery</span>
                          </Grid>
                        </Grid>
                      </Grid>
                    </div>
                  </div>
                </Grid>

                <Grid item xs={mdBreakPoint ? 4 : 12}>
                  <div>
                    <div className="horizontal-list__card-container">
                      <Grid className="horizontal-list__food-card" container direction="row" alignItems="center">
                        <div className="horizontal-list__image" style={{ height: " 220px", borderRadius: "5px" }}>
                          <Router>
                            <RouterLink to="/order-history">
                              <img src={image2} alt="" />
                            </RouterLink>
                          </Router>
                          <span className="horizontal-list__item-label">Chief Special</span>
                        </div>
                        <Grid className="horizontral-list__item-info-card" container direction="column" item justify="space-between">
                          <div className="horizontal-list__item-info-list__title">T-Bone Steak & Eggs</div>
                          <div className="horizontal-list__item-sub-title">
                            <Router>
                              <RouterLink to="/order-history" className="horizontal-list__item-sub-title-main">
                                Salad
                              </RouterLink>
                              <RouterLink to="/order-history" className="horizontal-list__item-sub-title-sub">
                                American
                              </RouterLink>
                              <RouterLink to="/order-history" className="horizontal-list__item-sub-title-sub">
                                Appetizer
                              </RouterLink>
                            </Router>
                          </div>
                          <Grid className="horizontral-list__item-info-extra" container justify="space-between">
                            <span>
                              <span class="horizontral-list__item-info-tag horizontral-list__item-info-light">
                                <TimerIcon style={{ fontSize: "14px" }} />
                                4-6 Mins
                              </span>
                              <span className="horizontral-list__item-info-tag horizontral-list__item-info-dark">$12.50</span>
                            </span>
                            <span className="horizontral-list__item-info-tag horizontral-list__item-info-green horizontral-list__item-info-light">Free Delivery</span>
                          </Grid>
                        </Grid>
                      </Grid>
                    </div>
                  </div>
                </Grid>

                <Grid item xs={mdBreakPoint ? 4 : 12}>
                  <div>
                    <div className="horizontal-list__card-container">
                      <Grid className="horizontal-list__food-card" container direction="row" alignItems="center">
                        <div className="horizontal-list__image" style={{ height: " 220px", borderRadius: "5px" }}>
                          <Router>
                            <RouterLink to="/order-history">
                              <img src={image3} alt="" />
                            </RouterLink>
                          </Router>
                          <span className="horizontal-list__item-label">Chief Special</span>
                        </div>
                        <Grid className="horizontral-list__item-info-card" container direction="column" item justify="space-between">
                          <div className="horizontal-list__item-info-list__title">T-Bone Steak & Eggs</div>
                          <div className="horizontal-list__item-sub-title">
                            <Router>
                              <RouterLink to="/order-history" className="horizontal-list__item-sub-title-main">
                                Salad
                              </RouterLink>
                              <RouterLink to="/order-history" className="horizontal-list__item-sub-title-sub">
                                American
                              </RouterLink>
                              <RouterLink to="/order-history" className="horizontal-list__item-sub-title-sub">
                                Appetizer
                              </RouterLink>
                            </Router>
                          </div>
                          <Grid className="horizontral-list__item-info-extra" container justify="space-between">
                            <span>
                              <span class="horizontral-list__item-info-tag horizontral-list__item-info-light">
                                <TimerIcon style={{ fontSize: "14px" }} />
                                4-6 Mins
                              </span>
                              <span className="horizontral-list__item-info-tag horizontral-list__item-info-dark">$12.50</span>
                            </span>
                            <span className="horizontral-list__item-info-tag horizontral-list__item-info-green horizontral-list__item-info-light">Free Delivery</span>
                          </Grid>
                        </Grid>
                      </Grid>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </Grid>
    </>
  );
}
