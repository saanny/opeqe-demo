import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { MemoryRouter as Router } from "react-router";
import TimerIcon from "@material-ui/icons/Timer";
import { Grid, Button, Box, makeStyles } from "@material-ui/core";
export default function CarouselItem({ item, index }) {
  return (
    <Grid item xs={12}>
      <div>
        <div className="horizontal-list__card-container">
          <Grid className="horizontal-list__food-card" container direction="row" alignItems="center">
            <div className="horizontal-list__image" style={{ height: " 220px", borderRadius: "5px" }}>
              <Router>
                <RouterLink to="/order-history">
                  <img src={item.image} alt="" />
                </RouterLink>
              </Router>
              <span className="horizontal-list__item-label">Chief Special</span>
            </div>
            <Grid className="horizontral-list__item-info-card" container direction="column" item justify="space-between">
              <div className="horizontal-list__item-info-list__title">{item.title}</div>
              <div className="horizontal-list__item-sub-title">
                <Router>
                  {item.categories.map((cat, index) => {
                    return (
                      <RouterLink key={index} to={cat.link} className={cat.isMain ? "horizontal-list__item-sub-title-main" : "horizontal-list__item-sub-title-sub"}>
                        {cat.title}
                      </RouterLink>
                    );
                  })}
                </Router>
              </div>
              <Grid className="horizontral-list__item-info-extra" container justify="space-between">
                <span>
                  <span class="horizontral-list__item-info-tag horizontral-list__item-info-light">
                    <TimerIcon style={{ fontSize: "14px" }} />
                    {item.time}
                  </span>
                  <span className="horizontral-list__item-info-tag horizontral-list__item-info-dark">${item.price}</span>
                </span>
                {item.freeDelivery && <span className="horizontral-list__item-info-tag horizontral-list__item-info-green horizontral-list__item-info-light">Free Delivery</span>}
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </Grid>
  );
}
