import Image from "next/image";
import React, { useState, useEffect } from "react";
import { ProgressBar } from "react-step-progress-bar";
import { Card, Row, Col, Modal, Button, Form, InputGroup, FormControl } from "react-bootstrap";
import useSettings from "../../hooks/useSettings";
import { Player } from 'video-react';
import Head from 'next/head';
import { saveDetails } from '../../api/user';
import { useRouter } from 'next/router'
import toast from 'react-hot-toast';
import StatisticCard from "../../components/Cards/StatisticCard"
import SubscribeNow from "../../components/SubscribeNow";

export default function AffiliateDetailsCard() {
    const router = useRouter();
    const { affiliateId } = router.query

    const { themeMode } = useSettings();
    const isDark = themeMode === "dark";

    const [loading, setLoading] = useState(false);
    const [uniqueurl, setUniqueurl] = useState(null);

    const [videoSrc, setVideoSrc] = useState("");
    const [videoTitle, seVideoTitle] = useState(null);
    const [videoDescription, seVideoDescription] = useState(null);

    useEffect(() => {
        console.log("affiliateId: ", affiliateId)
    }, [])

    return (
        <>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://video-react.github.io/assets/video-react.css"
                />
            </Head>
            <section className="SummaryCardWrap">
                <StatisticCard />
            </section>
            <div className="my-5">
                <Row>
                    <Col
                        xs={12}
                        xl={6}
                        className=""
                    >
                        <div className="px-4">
                            <Player
                                playsInline
                                src={videoSrc}
                                fluid={false}
                                width={"90%"}
                                height={300}
                            />
                        </div>
                    </Col>
                    <Col
                        xs={12}
                        xl={6}
                        className=""
                    >
                        <div className="">
                            <h2 style={{ marginRight: 20 }} className={`text-uppercase ${themeMode === "dark" && "text-white"}`}>Manage, Track, And Find Information About Crypto All in <span>one place</span>.</h2>
                            <p style={{ marginRight: 20 }} className={`my-2 ${themeMode === "dark" && "text-white"}`}>Lorem ipsum dolor sit, Lorem ipsum dolor sit Lorem ipsum dolor sit, Lorem ipsum dolor sit Lorem ipsum dolor sit,
                                Lorem ipsum dolor sit Lorem ipsum dolor sit, Lorem ipsum dolor sit Lorem ipsum dolor sit, Lorem ipsum dolor sit
                                Lorem ipsum dolor sit, Lorem ipsum dolor sit Lorem ipsum dolor sit, Lorem ipsum dolor sit Lorem ipsum dolor sit, Lorem ipsum dolor sit </p>
                            <div className="d-flex mt-3">
                                <button className="btn btn-primary mx-2 px-4">Sign up now</button>
                                <button className={`btn btn-outline-primary mx-2 px-5 ${themeMode != "dark" && "bg-light"}`}>Login</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="" style={{ marginTop: 150 }}>
                <Row>
                    <Col
                        xs={12}
                        xl={4}
                        className="px-5"
                    >
                        <Card className={`${themeMode === "dark" && "bg-dark"}`}>
                            <div className={`position-absolute translate-middle affiliate-count-icon ${themeMode === "dark" ? "btn-dark affiliate-count-icon-dark" : "btn-count-light"}`}>
                                <i className="far fa-envelope text-primary"></i>
                            </div>
                            <Card.Body className="">
                                <h5 className={`fw-medium ${themeMode === "dark" && "text-white"}`}>Portfoloi tracking</h5>
                                <p className={`fw-normal ${themeMode === "dark" && "text-white"}`}>Track your portfolio across multiple blockchains such as Ethereum, Binance Smart Chain, and Matic network.</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col
                        xs={12}
                        xl={4}
                        className="px-5"
                    >
                        <Card className={`${themeMode === "dark" && "bg-dark"}`}>
                            <div className={`position-absolute translate-middle affiliate-count-icon ${themeMode === "dark" ? "btn-dark affiliate-count-icon-dark" : "btn-count-light"}`}>
                                <i className="fas fa-coins text-primary"></i>
                            </div>
                            <Card.Body className="">
                                <h5 className={`fw-medium ${themeMode === "dark" && "text-white"}`}>Over 10,000 cryptrocurrencies</h5>
                                <p className={`fw-normal ${themeMode === "dark" && "text-white"}`}>Search and find trading information on over 10,000 different cryptos and counting</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col
                        xs={12}
                        xl={4}
                        className="px-5"
                    >
                        <Card className={`${themeMode === "dark" && "bg-dark"}`}>
                            <div className={`position-absolute translate-middle affiliate-count-icon ${themeMode === "dark" ? "btn-dark affiliate-count-icon-dark" : "btn-count-light"}`}>
                                <i className="fab fa-btc text-primary"></i>
                            </div>
                            <Card.Body className="">
                                <h5 className={`fw-medium ${themeMode === "dark" && "text-white"}`}>Over 10,000 cryptrocurrencies</h5>
                                <p className={`fw-normal ${themeMode === "dark" && "text-white"}`}>Search and find trading information on over 10,000 different cryptos and counting</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
            <div className="mb-5" style={{marginTop: 100}}>
                <h1 className={`fw-high text-center my-2 mb-5 w-100 ${themeMode === "dark" && "text-white"}`}>Get to know about</h1>
                <div>
                    <Row style={{height: 250}}>
                        <Col
                            xs={12}
                            xl={3}
                            className="px-4 py-3 mt-2"
                        >
                            <Card className={`px-3 h-100 py-3 ${themeMode === "dark" && "bg-dark"}`}>
                                <Card.Body className="">
                                    <h4 className={`fw-high ${themeMode === "dark" && "text-white"}`}>Predict</h4>
                                    <h4 className={`fw-medium ${themeMode === "dark" && "text-white"}`}>pricing</h4>

                                    <p className={`fw-normal ${themeMode === "dark" && "text-white"}`}>Use our neural network machine learning models to predict and plan accordingly the price of a cryptocurrency token/coin</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col
                            xs={12}
                            xl={3}
                            className="px-4 py-3 mt-2"
                        >
                            <Card className={`px-3 h-100 py-3 ${themeMode === "dark" && "bg-dark"}`}>
                                <Card.Body className="">
                                    <h4 className={`fw-high ${themeMode === "dark" && "text-white"}`}>Proprietary</h4>
                                    <h4 className={`fw-medium ${themeMode === "dark" && "text-white"}`}>grades</h4>

                                    <p className={`fw-normal ${themeMode === "dark" && "text-white"}`}>Use our neural network machine learning models to predict and plan accordingly the price of a cryptocurrency token/coin</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col
                            xs={12}
                            xl={3}
                            className="px-4 py-3 mt-2"
                        >
                            <Card className={`px-3 h-100 py-3 ${themeMode === "dark" && "bg-dark"}`}>
                                <Card.Body className="">
                                    <h4 className={`fw-high ${themeMode === "dark" && "text-white"}`}>Grading</h4>
                                    <h4 className={`fw-medium ${themeMode === "dark" && "text-white"}`}>system</h4>

                                    <p className={`fw-normal ${themeMode === "dark" && "text-white"}`}>Multiple Machine Learning
                                        Neural Network Models
                                        customly built for
                                        Cryptocurrency markets,
                                        technical analysis, and
                                        fundamental analysis.</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col
                            xs={12}
                            xl={3}
                            className="px-4 py-3 mt-2"
                        >
                            <Card className={`px-3 h-100 py-3 ${themeMode === "dark" && "bg-dark"}`}>
                                <Card.Body className="">
                                    <h4 className={`fw-high ${themeMode === "dark" && "text-white"}`}>Universe</h4>
                                    <h4 className={`fw-medium ${themeMode === "dark" && "text-white"}`}>of contents</h4>

                                    <p className={`fw-normal ${themeMode === "dark" && "text-white"}`}>Use our neural network machine learning models to predict and plan accordingly the price of a cryptocurrency token/coin</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>

            <div>
                <SubscribeNow />
            </div>
        </>
    );
}
