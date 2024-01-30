import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import vegetables from '../../../assets/images/vegetables.png'
import fruit from '../../../assets/images/fruit.png'
import meat from '../../../assets/images/meat.png'
import fish from '../../../assets/images/fish.png'


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      arrows : true,
      dots: true,
      infinite: true,
      speed: 600,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay : true,
    };
    return (
      <div className="container w-4/5 m-auto pb-20 text-center">
        
        <Slider {...settings}>
      <div className="bg-pink rounded-sm">
        <div className="flex flex-col p-7 h-[250px]">
        <h3 className="text-dark-green text-2xl font-semibold pb-3">Vegetables</h3>
        <img className="text-center" src={vegetables}/>
        </div>
      </div>

      <div className="bg-gray rounded-sm">
        <div className="flex flex-col p-7 h-[250px]">
        <h3 className="text-dark-green text-2xl font-semibold pb-3">Fruit</h3>
        <img className="text-center" src={fruit}/>
        </div>
      </div>

      <div className="bg-pink rounded-sm">
        <div className="flex flex-col p-7 h-[250px]">
        <h3 className="text-dark-green text-2xl font-semibold pb-3">Meat</h3>
        <img className="text-center" src={meat}/>
        </div>
      </div>

      <div className="bg-gray rounded-sm">
        <div className="flex flex-col p-7 h-[250px]">
        <h3 className="text-dark-green text-2xl font-semibold pb-3">Fish</h3>
        <img className="text-center" src={fish}/>
        </div>
      </div>
      
    </Slider>
         
      </div>
    );
  }
}