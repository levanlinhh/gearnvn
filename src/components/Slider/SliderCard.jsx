
import React from "react";
import Sliderdata from "../../assets/data/Sliderdata";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlideCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "12px" }}>{dots}</ul>
    },
  }
  return (
    <section className="slider_home">
        <Slider {...settings}>
            {Sliderdata.map((value, index) => {
            return (
                <div className='slider_card' key={index}>
                    <div className='img'>
                    <img src={value.images} alt='' />
                    </div>
                </div>
            )
            })}
        </Slider>
    </section>
  )
}

export default SlideCard;
