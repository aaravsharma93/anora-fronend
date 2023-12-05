import React from "react";
import Image from "next/image";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import { Button, Col, Container, Row } from "react-bootstrap";
import SemiChart from "../SemiChart/SemiChart";
import NewsSummaryCard from "../News/NewsSummaryCard";
import NewsCard from "../News/NewsCard";
import Slider from "react-slick";
import styles from "./CoinsTrending.module.scss";
import { Typography } from "@mui/material";
import useSettings from "../../hooks/useSettings";

const MOCK_NEWS_SUMMARIES = [
  {
    id: 1,
    author: "Name",
    title: "Which networks is this token on?",
    content:
      "Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque.",
    imageURL: "/images/analysis/network.png",
  },
  {
    id: 2,
    author: "Name",
    title: "What  ecosystem is the coin?",
    content:
      "Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque.",
    imageURL: "/images/analysis/ecosystem.png",
  },
  {
    id: 3,
    author: "Name",
    title: "What is the main website url link?",
    content:
      "Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque.",
    imageURL: "/images/analysis/website-url.png",
  },
  {
    id: 4,
    author: "Name",
    title: "Other comments about social media following or marketing?",
    content:
      "Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque.",
    imageURL: "/images/analysis/social-media.png",
  },
];

const MOCK_NEWS = [
  {
    id: 1,
    author: "Coinpage",
    title: "Lorem ipsum dolor sit ame...",
    content:
      "Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Rhoncus aenean vel elit scelerisque. Dictum fusce ut placerat orci nulla pellentesque dignissim enim sit. Adipiscing commodo elit at imperdiet. Lectus magna fringilla urna porttitor rhoncus dolor purus. ",
    imageURL: "/images/news/news-1.png",
  },
  {
    id: 2,
    author: "Coinpage",
    title: "Lorem ipsum dolor sit ame...",
    content:
      "Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Rhoncus aenean vel elit scelerisque. Dictum fusce ut placerat orci nulla pellentesque dignissim enim sit. Adipiscing commodo elit at imperdiet. Lectus magna fringilla urna porttitor rhoncus dolor purus. ",
    imageURL: "/images/news/news-2.png",
  },
  {
    id: 3,
    author: "Coinpage",
    title: "Lorem ipsum dolor sit ame...",
    content:
      "Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Rhoncus aenean vel elit scelerisque. Dictum fusce ut placerat orci nulla pellentesque dignissim enim sit. Adipiscing commodo elit at imperdiet. Lectus magna fringilla urna porttitor rhoncus dolor purus. ",
    imageURL: "/images/news/news-3.png",
  },
];

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        fontSize: 16,
        color: "448CFD",
        background: "#448CFD",
        borderRadius: 25,
        marginRight: -20,
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
        display: "flex",
        fontSize: 16,
        color: "448CFD",
        background: "#448CFD",
        borderRadius: 25,
        marginLeft: -50,
      }}
      onClick={onClick}
    />
  );
}

const CoinsTrending = () => {
  const { themeMode } = useSettings();

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    ...(themeMode === "light" ? { nextArrow: <NextArrow /> } : null),
    ...(themeMode === "light" ? { prevArrow: <PrevArrow /> } : null),
  };

  return (
    <>
      <div className="d-flex flex-column">
        <Typography variant="h5"> Twitter </Typography>
        <div className={styles.darkCard}>
          <Slider {...settings}>
            {MOCK_NEWS_SUMMARIES.map((summary) => (
              <div className="mt-2" key={summary.id}>
                <NewsSummaryCard
                  author={summary.author}
                  title={summary.title}
                  content={summary.content}
                  imageURL={summary.imageURL}
                />
              </div>
            ))}
          </Slider>
        </div>
        <p className="fs-5 text-light mt-5">Latest News </p>
        <Row className="gx-5">
          {MOCK_NEWS.map((news) => (
            <Col md={4} key={news.id}>
              <NewsCard
                author={news.author}
                title={news.title}
                content={news.content}
                imageURL={news.imageURL}
              />
            </Col>
          ))}
        </Row>
        <div className="mt-4 d-flex justify-content-center">
          <Button variant="dark">Load More</Button>
        </div>
      </div>
    </>
  );
};

export default CoinsTrending;
