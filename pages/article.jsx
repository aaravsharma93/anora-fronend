import * as React from "react";
import NewsCard from "../components/Cards/NewsCard";
import ArticalCard from "../components/Cards/ArticalCard";
import CarouserCard from "../components/Cards/CarouselCard";
import CarouselCard2 from "../components/Cards/CarouselCard2";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {makeStyles} from '@material-ui/core/styles';
import useSettings from "../hooks/useSettings";
import SubscribeNow from "../components/SubscribeNow";

export default function Article() {
    const classes = useStyles();
    const {themeMode} = useSettings();

    function NextArrow(props) {
        const {className, style, onClick} = props;

        return (
            <div
                className={className}
                style={{
                    ...style,
                    display: "block",
                    fontSize: 16,
                    color: "448CFD",
                    background: "#448CFD",
                    borderRadius: 50,
                    marginRight: 25,
                    zIndex: 99,
                    '@media(min-width:900)': {
                        marginRight: 60,


                    }
                }}
                onClick={onClick}
            />
        );
    }

    function PrevArrow(props) {
        const {className, style, onClick} = props;
        return (
            <div
                className={className}
                style={{
                    ...style,
                    display: "block",
                    fontSize: 16,
                    color: "448CFD",
                    background: "#448CFD",
                    borderRadius: 50,
                    marginLeft: 22,
                    zIndex: 99
                }}
                onClick={onClick}
            />
        );
    }

    var settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        color: "black",
        arrows: true,
        autoplaySpeed: 500,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 300,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <Box
                sx={{flexGrow: 1}}
                className={classes.box}
            >
                <Grid container spacing={2}>
                    <Grid item xs={12} md={9}>
                        <ArticalCard/>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <NewsCard/>
                        <NewsCard/>
                        <NewsCard/>
                        <NewsCard/>
                    </Grid>
                </Grid>
                <Grid item xs={12} style={{paddingTop: 40}}>
                    <h1 style={{fontFamily: "Poppins", color: themeMode === 'dark' ? '#fff' : '#000'}}>You might
                        like</h1>
                    <Slider {...settings}>
                        <div>
                            {" "}
                            <CarouserCard/>
                        </div>
                        <div>
                            {" "}
                            <CarouselCard2/>
                        </div>
                        <div>
                            {" "}
                            <CarouserCard/>
                        </div>
                        <div>
                            {" "}
                            <CarouselCard2/>
                        </div>
                    </Slider>
                </Grid>
            </Box>
            <SubscribeNow/>
        </>
    );
}
const useStyles = makeStyles((theme) => ({
    box: {
        paddingLeft: 21,
        paddingRight: 20,
        paddingTop: 40,
        [theme.breakpoints.up('md')]: {
            paddingLeft: 40
        }
    }
}))
