import React from "react";
import {Card, Container, Row} from "react-bootstrap";
import useSettings from "../../hooks/useSettings";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export default function StatisticCard() {
    const {themeMode} = useSettings();

    return (
        <>
            <Container fluid className="p-0">
                <Row className="row g-0">
                    <div className="col-xl-3 col-md-6 col-12">
                        <Card className={`StatisticCard  ${themeMode === "dark" && "dark"}`}>

                            <Card.Body>
                                <Card.Text className="text-muted mb-2">Market Cap</Card.Text>
                                <Card.Title>
                                    <span className="text-muted fw-light me-2">$</span>
                                    <span className="fw-medium price">2,345,187,152,163</span>
                                </Card.Title>
                                <div className="d-flex justify-content-between align-items-center">
                                    <span className="fs-6 text-danger"><ArrowDownwardIcon style={{width:"15px",height:"15px"}} />11.87%</span>
                                    <div className="custom-progress progress-gradient-danger"></div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-xl-3 col-md-6 col-12">
                        <Card className={`StatisticCard  ${themeMode === "dark" && "dark"}`}>

                            <Card.Body>
                                <Card.Text className="text-muted mb-2">24h Vol</Card.Text>
                                <Card.Title>
                                    <span className="text-muted fw-light me-2">$</span>
                                    <span className="fw-medium price">2,345,187,152,163</span>
                                </Card.Title>
                                <div className="d-flex justify-content-between align-items-center">
                                    <span className="fs-6 text-success"><ArrowUpwardIcon style={{width:"15px",height:"15px"}} />11.87%</span>
                                    <div className="custom-progress progress-gradient-success"></div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-xl-3 col-md-6 col-12">
                        <Card className={`StatisticCard  ${themeMode === "dark" && "dark"}`}>

                            <Card.Body>
                                <Card.Text className="text-muted mb-2">Dominance</Card.Text>
                                <Card.Title>
                                    <span className="text-muted fw-light me-2">BTC</span>
                                    <span className="fw-medium price">46.0% ETH: 18.1%</span>
                                </Card.Title>
                                <div className="d-flex justify-content-between align-items-center">
                                    <span className="fs-6 text-danger" style={{minHeight:"24px"}}></span>
                                    <div></div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-xl-3 col-md-6 col-12">
                        <Card className={`StatisticCard  ${themeMode === "dark" && "dark"}`}>

                            <Card.Body>
                                <Card.Text className="text-muted mb-2">ETH Gas Fes</Card.Text>
                                <Card.Title>
                                    <span className="text-muted fw-light me-2">87</span>
                                    <span className="fw-medium price">gwei <ExpandMoreIcon /></span>
                                </Card.Title>
                                <div className="d-flex justify-content-between align-items-center">
                                    <span className="fs-6 text-danger" style={{minHeight:"24px"}}></span>
                                    {/*<div className="custom-progress progress-gradient-danger"></div>*/}
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </Row>
            </Container>
        </>
    );
}
