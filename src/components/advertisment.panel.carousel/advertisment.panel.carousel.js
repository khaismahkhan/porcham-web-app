import './advertisment.panel.carousel.scss'
import React from 'react'
import Slider from "react-slick";
import AdvertismentPanel from '../advertisment.panel/advertisment.panel';
import IconButton from '@mui/material/IconButton'
const AdvertismentPanelCarousel = () => {

    function NextArrow(props) {
        const { className, onClick } = props;

        return (
            <div
                className={className}
                onClick={onClick}>
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
            <div className='w-100' style={{height:'30vh'}}>
                <Slider {...settings} style={{height:'30vh'}} >
                    <div>
                        <AdvertismentPanel
                            image={`${process.env.PUBLIC_URL}/assets/images/1.jpg`}
                            // titleHeading="new collection"
                            // title="find your new favourite clothing"
                            // description="Here to bring your life style to the next level."
                        />
                    </div>
                    <div>
                        <AdvertismentPanel
                           image={`${process.env.PUBLIC_URL}/assets/images/2.jpg`}
                            // textAlignment="right"
                            // titleHeading="new arrivals"
                            // title="find your new brand clothes On Discount"
                            // description="Here to bring your life style to the next step."
                            // buttonTitle="shop now"
                        />
                    </div>
                    <div>
                        <AdvertismentPanel
                            image={`${process.env.PUBLIC_URL}/assets/images/3.jpg`}
                            // textAlignment="center"
                            // titleHeading="For mens"
                            // title="50% sale on Eid "
                            // description="let come and shop with us."
                            // buttonTitle="Buy now"
                            // textColor="#a442a4"
                            // bannerHeight="80vh"
                        />
                    </div>

                </Slider>
            </div>

        </div>
    )
}

export default AdvertismentPanelCarousel
