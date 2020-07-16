import React, { useState } from "react";
import { Grid, Button, Box, makeStyles } from "@material-ui/core";
import "./horizontalList.css";
import image1 from "./3.jpg";
import image2 from "./14.jpg";
import image3 from "./5.jpg";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import Carousel, { consts } from "react-elastic-carousel";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import CarouselItem from "./CarouselItem";
const data = [
  {
    image: image1,
    title: "T-Bone Steak & Eggs",
    categories: [
      {
        title: "Salad",
        link: "/",
        isMain: true
      },
      {
        title: "American",
        link: "/"
      },
      {
        title: "Appetizer",
        link: "/"
      }
    ],
    time: "4-6",
    price: "13.48",
    freeDelivery: true
  },
  {
    image: image2,
    title: "Quarter Dark and Leg",
    categories: [
      {
        title: "FastFood",
        link: "/",
        isMain: true
      },
      {
        title: "American",
        link: "/"
      },
      {
        title: "Main Coures",
        link: "/"
      }
    ],
    time: "40-60",
    price: "16.67",
    freeDelivery: true
  },
  {
    image: image3,
    title: "My Hammy & Cheese Omelette",
    categories: [
      {
        title: "Omelette",
        link: "/",
        isMain: true
      },
      {
        title: "American",
        link: "/"
      },
      {
        title: "Main Coures",
        link: "/"
      }
    ],
    time: "15-22",
    price: "10.99",
    freeDelivery: true
  },
  {
    image: image1,
    title: "T-Bone Steak & Eggs",
    categories: [
      {
        title: "Salad",
        link: "/",
        isMain: true
      },
      {
        title: "American",
        link: "/"
      },
      {
        title: "Appetizer",
        link: "/"
      }
    ],
    time: "4-6",
    price: "13.48",
    freeDelivery: true
  },
  {
    image: image2,
    title: "Quarter Dark and Leg",
    categories: [
      {
        title: "FastFood",
        link: "/",
        isMain: true
      },
      {
        title: "American",
        link: "/"
      },
      {
        title: "Main Coures",
        link: "/"
      }
    ],
    time: "40-60",
    price: "16.67",
    freeDelivery: true
  },
  {
    image: image3,
    title: "My Hammy & Cheese Omelette",
    categories: [
      {
        title: "Omelette",
        link: "/",
        isMain: true
      },
      {
        title: "American",
        link: "/"
      },
      {
        title: "Main Coures",
        link: "/"
      }
    ],
    time: "15-22",
    price: "10.99",
    freeDelivery: true
  },
  {
    image: image1,
    title: "T-Bone Steak & Eggs",
    categories: [
      {
        title: "Salad",
        link: "/",
        isMain: true
      },
      {
        title: "American",
        link: "/"
      },
      {
        title: "Appetizer",
        link: "/"
      }
    ],
    time: "4-6",
    price: "13.48",
    freeDelivery: true
  },
  {
    image: image2,
    title: "Quarter Dark and Leg",
    categories: [
      {
        title: "FastFood",
        link: "/",
        isMain: true
      },
      {
        title: "American",
        link: "/"
      },
      {
        title: "Main Coures",
        link: "/"
      }
    ],
    time: "40-60",
    price: "16.67",
    freeDelivery: true
  },
  {
    image: image3,
    title: "My Hammy & Cheese Omelette",
    categories: [
      {
        title: "Omelette",
        link: "/",
        isMain: true
      },
      {
        title: "American",
        link: "/"
      },
      {
        title: "Main Coures",
        link: "/"
      }
    ],
    time: "15-22",
    price: "10.99",
    freeDelivery: true
  }
];
export default function ProductCarousel(props) {
  const [topbar, setTopbar] = useState();
  const [showController, setShowController] = useState();
  function calcPercent(v, t) {
    let cal = 0;
    if (v > 1) {
      cal = ((v / t) * 100).toFixed(2);
    }

    return cal;
  }
  const arrow = function ({ type, onClick, isEdge }) {
    const pointer = type === consts.PREV ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon />;
    return (
      <div className={"control-container " + (type === consts.PREV ? "prev" : "next")}>
        <Button onClick={onClick} disabled={isEdge} className={"control " + (isEdge || !showController ? "hide" : "show")}>
          {pointer}
        </Button>
      </div>
    );
  };
  const renderPaginate = function ({ pages, activePage, onClick }) {
    const cal = calcPercent(activePage + 1, pages.length);

    setTopbar(cal);

    return <></>;
  };
  const breakPoints = [
    { width: 550, itemsToShow: 1, itemsToScroll: 1 },
    { width: 850, itemsToShow: 3, itemsToScroll: 3 }
  ];
  const { header } = props;
  const theme = useTheme();

  return (
    <>
      <Grid className="container" container direction="row" item justify="space-between" alignItems="center" xs={11}>
        <div className="horizontal-list horizontal-list-container" onMouseEnter={() => setShowController(true)} onMouseLeave={() => setShowController(false)}>
          <div className="horizontal-list__header">
            <div className="horizontal-list__title">{header}</div>
          </div>

          <div className="horizontal-list__scroll-bar scroll-bar">
            <div className="horizontal-list__scroll-bar__bar">
              <div className="horizontal-list__scroll-bar__cursor" style={{ left: `${topbar}%` }}></div>
            </div>
          </div>
          <div className="horizontal-list__list">
            <div className="horizontal-list__container" style={{ paddingRight: "40px" }}>
              <Grid className="horizontal-list__scroll" container direction="row" alignItems="center">
                <Carousel itemsToShow={3} breakPoints={breakPoints} itemsToScroll={3} renderPagination={renderPaginate} easing="cubic-bezier(.74,0,.35,.96)" transitionMs={500} renderArrow={arrow}>
                  {data.map((item, index) => {
                    return <CarouselItem item={item} index={index} />;
                  })}
                </Carousel>
              </Grid>
            </div>
          </div>
        </div>
      </Grid>
    </>
  );
}
