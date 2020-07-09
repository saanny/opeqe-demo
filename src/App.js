import React, { useReducer } from "react";
import Header from "./Components/header/Header";
import HomeSlider from "./Components/homeSlider/HomeSlider";
import SearchBar from "./Components/searchBar/SearchBar";
import ProductCarousel from "./Components/productCarousel/ProductCarousel";
import MobilePromotion from "./Components/mobilePromotion/MobilePromotion";
import GiftCardPromotion from "./Components/giftCardPromotion/GiftCardPromotion";
import ReadyToOrder from "./Components/readyToOrder/ReadyToOrder";
import Footer from "./Components/footer/Footer";
import { Grid, Button, Box, makeStyles } from "@material-ui/core";
import StateContext from "./StateContext";
import DispatchContext from "./DispatchContext";

function App() {
  const initialState = {
    type: Boolean(false)
  };

  function appReducer(state, action) {
    switch (action.type) {
      case "changeTypeToDelivery":
        return { type: true };
      case "changeTypeToPickup":
        return { type: false };
    }
  }
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <>
      <StateContext.Provider value={state}>
        <DispatchContext.Provider value={dispatch}>
          <div className="main-menu">
            <Header type={state.type} />
          </div>
          <div className="page-container">
            <div className="main">
              <HomeSlider />
              <div className="content">
                <SearchBar />
                <Grid container justify="center">
                  <ProductCarousel header="Special Offers" />
                  <ProductCarousel header="Salad" />
                  <ProductCarousel header="Appetizer" />
                  <ProductCarousel header="Main Course" />
                </Grid>
                <Grid container justify="center">
                  <Grid className="container mobile-app-promotion" container direction="row" item justify="center" alignItems="center" xs={11}>
                    <MobilePromotion />
                  </Grid>
                </Grid>
                <Grid container justify="center">
                  <ProductCarousel header="American" />
                </Grid>
                <Grid container justify="center">
                  <Grid className="container gift-card-promotion" container direction="row" item justify="space-around" alignItems="center" xs={11}>
                    <GiftCardPromotion />
                  </Grid>
                </Grid>
                <Grid container justify="center">
                  <Grid className="container ready-to-order" container direction="column" item justify="center" alignItems="center" xs={11}>
                    <ReadyToOrder type={state.type} />
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
          <Grid container justify="center" className="footer">
            <Footer />
          </Grid>
        </DispatchContext.Provider>
      </StateContext.Provider>
    </>
  );
}

export default App;
