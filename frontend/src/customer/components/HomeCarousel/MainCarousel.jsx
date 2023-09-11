import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { mainCarouselData } from "./MainCarouselData";

const Main_Carousel = () => {
  const items = mainCarouselData.map((item) => (
    <img
      className="cursor-pointer"
      src={item.image}
      alt=""
      role="presentation"
    />
  ));
  return (
    <AliceCarousel
      items={items}
      autoPlay
      infinite
      autoPlayInterval={2000}
      disableButtonsControls
    />
  );
};
export default Main_Carousel;
