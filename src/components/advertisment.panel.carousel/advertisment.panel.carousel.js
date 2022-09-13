import "./advertisment.panel.carousel.scss";
import React from "react";
import Slider from "react-slick";
import AdvertismentPanel from "../advertisment.panel/advertisment.panel";
import IconButton from "@mui/material/IconButton";
const AdvertismentPanelCarousel = () => {
  function NextArrow(props) {
    const { className, onClick } = props;

    return (
      <div className={className} onClick={onClick}>
        <IconButton variant="contained" className="bg-white carousel1 ml-n5">
          <i className="fa fa-arrow-right p-1" id="arrow_icon_carousel1"></i>
        </IconButton>
      </div>
    );
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // nextArrow: <NextArrow/>,
    // nextArrow:true
  };

  return (
    <div id="advertisment-panel-carousel">
      <div className="w-100">
        <Slider {...settings} >
          <div>
            <AdvertismentPanel
              image={`${process.env.PUBLIC_URL}/assets/images/1.jpg`}
              titleHeading="Collection 1"
              title="Custom Tailored Menswear"
            />
          </div>
          <div>
            <AdvertismentPanel
              image={`${process.env.PUBLIC_URL}/assets/images/2.jpg`}
              titleHeading="Collection 2"
              title="Made to measure"
              description="24 / 7 free delivery across Pakistan"
            />
          </div>
          <div>
            <AdvertismentPanel
              image={`${process.env.PUBLIC_URL}/assets/images/3.jpg`}
              titleHeading="Exclusive Cufflinks"
              title="Graceful & Elegant"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default AdvertismentPanelCarousel;
