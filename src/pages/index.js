import React from "react";
import Layout from "../components/Layout/Layout";
import Hero from "../UI/MainComponents/Hero/Hero";
import "../styles/main.scss";
import homeHeroBg from "../images/homebg.jpg";
import MainContent from "../UI/MainComponents/MainContent/MainContent";
import RowSlider from "../UI/MainComponents/RowSlider/RowSlider";
import img1 from "../images/pic2.jpg";
import img2 from "../images/pic3.jpg";
import service1 from "../images/service1.png";
import service2 from "../images/service2.png";
import service3 from "../images/service3.png";
import Map from "../UI/MainComponents/Map/Map";

const index = () => {
  const sliderData = [
    {
      img: service1,
      title: "Cardio Gym",
      desc: "Our cardio area of the gym in Burnham features a great range of gym equipment including treadmills, exercise bikes, air bikes, stair climbers, rowers, cross trainers and more!",
    },
    {
      img: service2,
      title: "Strength & Conditioning",
      desc: "Our strength training equipment includes barbells, kettlebells, dumbbells (1kg-50kg), half rack, 3d smith machine and cable machine. We also have bodyweight fitness equipment and resistance machines for all muscle groups.      ",
    },
    {
      img: service3,
      title: "Fitness Classes",
      desc: "We take pride in our large selection of classes available in our studio and online. We offer Zumba, Pilates, Yoga, Insanity, Body Sculpt, Studio Cycling, Yogalates and more!",
    },
  ];

  return (
    <Layout>
      <Hero
        mainHeading={`GYM IN BURNHAM`}
        subHeading={`Service Driven, Great Value`}
        BG={homeHeroBg}
      />
      <MainContent
        flexDirection={``}
        mainHeading={`Welcome to Active Fitness`}
        desc={`Active Fitness Club Burnham is the most convenient & friendly fitness club and gym in Burnham, Buckinghamshire.`}
        img={img1}
        bgColor={`black`}
      />
      <MainContent
        flexDirection={`row-reverse`}
        mainHeading={`View Our Gallery`}
        desc={`We have a great selection of photos of our fitness club in Burnham. If you would like to view the club before joining please feel free to attend our facilities at any point. `}
        img={img2}
        bgColor={`grey`}
      />
      <RowSlider list={sliderData} bg={`black`} />
      <Map />
    </Layout>
  );
};

export default index;
