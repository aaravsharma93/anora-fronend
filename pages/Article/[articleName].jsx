import * as React from "react";
import StatisticCard from "../../components/Cards/StatisticCard"
import { Container, Row, Col } from "react-bootstrap"
import NewsCard from "../../components/Cards/NewsCard";
import ArticalCard from "../../components/Cards/ArticalCard";
import CarouserCard from "../../components/Cards/CarouselCard";
import CarouselCard2 from "../../components/Cards/CarouselCard2";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SubscribeNow from '../../components/SubscribeNow'
export default function Article() {
  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          fontSize: 16,
          color: "448CFD",
          background: "#448CFD",
          borderRadius: 2,
          marginRight: 8,
        }}
        onClick={onClick}
      />
    );
  }
  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
         
          fontSize: 16,
          color: "448CFD",
          background: "#448CFD",
          borderRadius: 2,
          right: 165,
        }}
        onClick={onClick}
      />
    );
  }

  var settings = {
    className:'center',
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide:2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
         
          infinite: true,
          speed: 1000,
          dots:true
          
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          speed: 1000,
          dots:true,
          
       
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          speed: 1000,
          dots:true,
        
          arrow:false

        }
      }
    ]
  };

  return (
    <div style={{   
      
      margin: "0px",
      padding: "0px",
      overflowX: "hidden"}}>
    <Box style={{borderTop:"1px solid #989797",borderBottom:"1px solid #989797 " }}>

      <Grid container spacing={4}>
        <Grid item xs={12} md={2} lg={3}>
           <StatisticCard/>
        </Grid>
        <Grid item xs={12} md={2} lg={3}>
           <StatisticCard/>
        </Grid>
        <Grid item xs={12} md={2} lg={4}>
           <StatisticCard/>
        </Grid>
        <Grid item xs={12} md={2} lg={2}>
           <StatisticCard/>
        </Grid>

      </Grid>
    </Box>
    <Box
      sx={{ flexGrow: 1 }}
      style={{ paddingLeft: 40, paddingRight: 20, paddingTop: 40 }}
    >
      
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={9}>
          <ArticalCard />
        </Grid>
        <Grid item xs={12} md={12} lg={3} >
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </Grid>
      </Grid>
      <Grid item xs={12} lg={12} style={{ paddingTop: 40, marginLeft:-20 }}>
        <h1 style={{ fontFamily: "Poppins" }}>You might like</h1>
        <Slider {...settings}>
        
          
            <CarouserCard />
       
           
            <CarouselCard2 />
     
            <CarouserCard />
        
           
            <CarouselCard2 />
       
        </Slider>
      </Grid>
    </Box>
    <SubscribeNow/>
    </div>
  );
}
