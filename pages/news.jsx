import * as React from "react";
import CarouserCard from "../components/Cards/CarouselCard";
import CarouselCard2 from "../components/Cards/CarouselCard2";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BigCard from "../components/Cards/News/BigCard";
import LargeAdCard from "../components/Cards/News/LargeAdCard";
import AdCard from "../components/Cards/News/AdCard";
import SalesCard from "../components/Cards/News/SalesCard";
import SalesNewsCard from "../components/Cards/News/SalesNewsCard";
import SalesMarketNewsCard from "../components/Cards/News/SalesMarketNewsCard";
import SalesAdNewsCard from "../components/Cards/News/SalesAdNewsCard";
import SubscribeNow from "../components/SubscribeNow";
import {Container, Row} from "react-bootstrap";
import StatisticCard from "../components/Cards/StatisticCard";
import useSettings from "../hooks/useSettings";

export default function News() {
    const {themeMode} = useSettings();

    var settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplaySpeed: 500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
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
            <section className="SummaryCardWrap">
                <Container className="p-0">
                    <Row className="row g-0">
                        <StatisticCard/>
                    </Row>
                </Container>
            </section>
            <div className="mt-5" style={{padding: "0 50px"}}>
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <div>
                            <BigCard imageUrl={"/bigCard.png"}/>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3">
                        <div>
                            <LargeAdCard imageUrl={"/largerCard.png"}/>
                            <AdCard/>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3">
                        <div>
                            <AdCard/>
                            <LargeAdCard imageUrl={"/largerCard2.png"}/>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <h2 style={{fontFamily: "Poppins", color: themeMode === 'dark' ? '#fff' : '#000'}}>HOT NEWS</h2>
                    <Slider {...settings} style={{padding: "0 20px 0 35px"}}>
                        <div>
                            <CarouserCard/>
                        </div>
                        <div>
                            <CarouselCard2/>
                        </div>
                        <div>
                            <CarouserCard/>
                        </div>
                        <div>
                            <CarouselCard2/>
                        </div>
                    </Slider>
                </div>

                <div className="row">
                    <div className="col-sm-12 col-md-4">
                        <SalesCard imageUrl={"/coins.png"}/>
                        <SalesMarketNewsCard imageUrl={"/conis2.png"}/>
                        <SalesNewsCard imageUrl={"/charts.png"}/>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <SalesMarketNewsCard imageUrl={"/phone.png"}/>
                        <SalesAdNewsCard/>
                        <SalesAdNewsCard/>
                        <SalesAdNewsCard/>
                        <SalesCard imageUrl={"/phone2.png"}/>
                    </div>

                    <div className="col-sm-12 col-md-4">
                        <SalesNewsCard imageUrl={"/charts.png"}/>
                        <SalesCard imageUrl={"/yah.png"}/>
                        <SalesMarketNewsCard imageUrl={"/wave.png"}/>
                    </div>
                </div>
            </div>
            <SubscribeNow/>
        </>
    )
}
