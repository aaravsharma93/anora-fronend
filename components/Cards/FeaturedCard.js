import React from "react";
import {Card, Row} from "react-bootstrap";
import useSettings from "../../hooks/useSettings";

export default function StatisticCard() {
    const {themeMode} = useSettings();
    return (
        <>
            <Row>
                <div className="col-xl col-md-6 col-12">
                    <Card
                        className={`featured-card p-4 shadow-light-lg ${
                            themeMode === "dark" && "dark"
                        }`}
                        style={{
                            height:"250px"
                        }}
                    >
                        <Card.Body>
                            <Card.Title>
                                <span className="d-block  fw-bold">Predict</span>
                                <span className="d-block  fw-normal">Pricing</span>
                            </Card.Title>
                            <Card.Text className=" mb-2">
                                Use our neural network machine learning models to predict and plan
                                accordingly the price of a cryptocurrency token/coin!
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-xl col-md-6 col-12">
                    <Card
                        className={`featured-card p-4 shadow-light-lg ${
                            themeMode === "dark" && "dark"
                        }`}
                        style={{
                            height:"250px"
                        }}
                    >
                        <Card.Body>
                            <Card.Title>
                                <span className="d-block  fw-bold">Proprietary</span>
                                <span className="d-block  fw-normal">grades</span>
                            </Card.Title>
                            <Card.Text className=" mb-2">
                                Learn more about our Proprietary Grades by clicking here or swiping one over to the
                                right.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-xl col-md-6 col-12">
                    <Card
                        className={`featured-card p-4 shadow-light-lg ${
                            themeMode === "dark" && "dark"
                        }`}
                        style={{
                            height:"250px"
                        }}
                    >
                        <Card.Body>
                            <Card.Title>
                                <span className="d-block  fw-bold">Grading</span>
                                <span className="d-block  fw-normal">system</span>
                            </Card.Title>
                            <Card.Text className=" mb-2">
                                Multiple Machine Learning Neural Network Models customly built for Cryptocurrency
                                markets, technical analysis, and fundamental analysis.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-xl col-md-6 col-12">
                    <Card
                        className={`featured-card p-4 shadow-light-lg ${
                            themeMode === "dark" && "dark"
                        }`}
                        style={{
                            height:"250px"
                        }}
                    >
                        <Card.Body>
                            <Card.Title>
                                <span className="d-block  fw-bold">Universe</span>
                                <span className="d-block  fw-normal">of contents</span>
                            </Card.Title>
                            <Card.Text className=" mb-2">
                                Learn about cryptocurrency, decentralized finance (DeFi), blockchain, and
                                even web 3.0 coding if
                                you choose!
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </Row>
        </>
    );
}
