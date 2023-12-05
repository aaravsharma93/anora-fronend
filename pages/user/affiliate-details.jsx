import React, { useState, useEffect } from "react";
import { Card, Row, Col, Modal, Button, Form, InputGroup, FormControl } from "react-bootstrap";
import useSettings from "../../hooks/useSettings";
import AffiliateDetailsCard from "../../components/Cards/AffiliateDetailsCard";

export default function AffiliateDetails() {
    const { themeMode } = useSettings();

    return (
        <>
            {/* <div className="container"> */}
                <div
                    className={`ms-lg-5 CurrenciesContainer p-4 ${themeMode === "dark" && "bg-dark"
                        }`}
                >
                    <div className="head px-4 mt-2">
                        <Row>
                            <Col
                                xs={12}
                                xl={6}
                                className=""
                            >
                                <h4 className="fs-3 d-block text-uppercase m-0 w-100">Affiliate Dashboard</h4>
                            </Col>

                            <Col
                                xs={12}
                                xl={6}
                                className="affiliate-btns"
                            >
                                <ul className={`list-unstyled list-style-3`}>
                                    <li className="mx-2">
                                        <a href="#!" className={`text-decoration-none ${themeMode === "dark" && "text-white"}`}>Overview</a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            <Button className={`btn ${themeMode === "dark" && "btn-dark text-primary"}`}>Manage Video</Button>
                                        </a>
                                    </li>
                                </ul>
                            </Col>
                        </Row>

                        <div className="CurrenciesContainer-Offset">
                            <AffiliateDetailsCard />
                        </div>
                    </div>
                </div>
            {/* </div> */}
        </>
    );
}