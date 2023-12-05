import { Typography } from "@mui/material";
import classNames from "classnames";
import Image from "next/image";
import React, { useState } from "react";
import { Card, Col, Modal, Row } from "react-bootstrap";
import { ProgressBar } from "react-step-progress-bar";
import CoinsOverviewChart from "../../components/Coins/CoinsOverviewChart";
import useSettings from "../../hooks/useSettings";

export default function CurrenciesCard({ currency }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { themeMode } = useSettings();
  const isDark = themeMode === "dark";

  return (
    <>
      <Card className={`CurrenciesCard ${themeMode === "dark" && "dark"}`}>
        <div className="currency-icon">
          <Image
            src={currency.logo_url || `${themeMode === "dark" ? "/card-currency.svg" : "/currencies-icon-001.png"}`}
            width="120"
            height="120"
            alt="Fundamental Secrets"
          />
        </div>
        <Card.Body className="d-flex p-0 justify-content-center">
          <Row className="w-100 align-items-center pt-3  font-monospace">
            <Col xs={12} xl={4}>
              <Typography className="rank-title" variant="h5">
                {currency.rank}.
              </Typography>
              <p className="text-muted small mb-0 currency-name">{currency.name}</p>
              <p className="currency fw-600 ps-5">
                {new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
                  parseFloat(currency.price).toFixed(3)
                )}
                <small className="name pl-3">{currency.symbol}</small>
              </p>
              <small className="text-muted d-block ps-5">$ 4,500 USD</small>
            </Col>
            <Col xs={12} xl={2} className="d-flex justify-content-center">
              <ul className="timeline timeline-centered">
                <li className="timeline-item">
                  <div className="timeline-info">
                    <span>1H</span>
                  </div>
                  <div className="timeline-content">
                    <h3
                      className={classNames("timeline-title small", {
                        "text-danger": currency["1h"]?.volume_change_pct < 0,
                        "text-success": currency["1h"]?.volume_change_pct > 0,
                      })}
                    >
                      {(currency["1h"]?.price_change_pct * 10).toFixed(3)}%
                    </h3>
                  </div>
                </li>
                <li className="timeline-item">
                  <div className="timeline-info">
                    <span>24H</span>
                  </div>
                  <div className="timeline-content">
                    <h3
                      className={classNames("timeline-title small", {
                        "text-danger": currency["1d"]?.volume_change_pct < 0,
                        "text-success": currency["1d"]?.volume_change_pct > 0,
                      })}
                    >
                      {(currency["1d"]?.price_change_pct * 10).toFixed(3)}%
                    </h3>
                  </div>
                </li>
                <li className="timeline-item">
                  <div className="timeline-info">
                    <span>7D</span>
                  </div>
                  <div className="timeline-content">
                    <h3
                      className={classNames("timeline-title small", {
                        "text-danger": currency["7d"]?.volume_change_pct < 0,
                        "text-success": currency["7d"]?.volume_change_pct > 0,
                      })}
                    >
                      {(currency["7d"].price_change_pct * 10).toFixed(3)}%
                    </h3>
                  </div>
                </li>
                <li className="timeline-item">
                  <div className="timeline-info">
                    <span>30D</span>
                  </div>
                  <div className="timeline-content">
                    <h3
                      className={classNames("timeline-title small", {
                        "text-danger": currency["30d"]?.volume_change_pct < 0,
                        "text-success": currency["30d"]?.volume_change_pct > 0,
                      })}
                    >
                      {(currency["30d"]?.price_change_pct * 10).toFixed(3)}%
                    </h3>
                  </div>
                </li>
              </ul>
            </Col>
            <Col xs={12} xl={3} className="text-center text-xl-start px-5">
              <span className="text-muted small d-block">24hrs. volume</span>
              <span className="text-muted fw-light">%</span>
              <span className="mb-2 d-inline-block fw-600">{currency["7d"].volume_change_pct}</span>
              {currency.market_cap && (
                <>
                  <span className="text-muted small d-block">Market Cap</span>
                  <span className="text-muted fw-light">%</span>
                  <span className="fw-600">{currency["7d"].market_cap_change_pct}</span>
                </>
              )}
            </Col>
            <Col xs={12} xl={3}>
              <span className="text-muted small d-block">Last 7 Days</span>
              <CoinsOverviewChart width={750} />
              <div className="progress-bar progress-gradient-danger" />
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Currency Overview Modal */}

      <Modal centered contentClassName={themeMode === "dark" && "bg-dark"} size="xl" show={show} onHide={handleClose}>
        <Modal.Header closeButton className="border-0">
          <Modal.Title>{` `}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={4}>
              <div className="d-flex align-items-baseline">
                <div className={`d-block title-xl ${isDark ? "text-light" : "text-dark"} fw-light fw-500 lg-1 me-2`}>
                  Bitcoin
                </div>
                <div className={`d-block fs-3 ${isDark ? "text-light" : "text-dark"} fw-light fw-500 lg-1 me-2`}>
                  {currency.currency_id}
                </div>
              </div>
            </Col>
            <Col>
              <Row>
                <Col md={3} className="border-end border-1 border-light">
                  <div className="d-flex flex-column">
                    <div className={`d-block fs-6 ${!isDark ? "text-dark" : "text-light"} fw-light fw-500 lg-1`}>
                      Market Cap
                    </div>
                    <div className={`d-block fs-6 ${!isDark ? "text-dark" : "text-light"} fw-light fw-500 lg-1`}>
                      $12,889,908,164
                    </div>
                  </div>
                </Col>
                <Col md={4} className="border-end border-1 border-light">
                  <div className="d-flex flex-column">
                    <div className="d-flex flex-column">
                      <div className={`d-block fs-6 ${!isDark ? "text-dark" : "text-light"} fw-light fw-500 lg-1`}>
                        Market Cap
                      </div>
                      <div className={`d-block fs-6 ${!isDark ? "text-dark" : "text-light"} fw-light fw-500 lg-1`}>
                        $12,889,908,164
                      </div>
                    </div>
                    <div className="d-flex flex-column mt-4">
                      <div className={`d-block fs-6 ${!isDark ? "text-dark" : "text-light"} fw-light fw-500 lg-1`}>
                        Market Cap
                      </div>
                      <div className={`d-block fs-6 ${!isDark ? "text-dark" : "text-light"} fw-light fw-500 lg-1`}>
                        $12,889,908,164
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={5}>
                  <Row>
                    <Col md={7}>
                      <div className="d-flex h-100 justify-content-center w-100 flex-column">
                        <div className="d-flex flex-column mb-1">
                          <div className="d-block fs-6 text-light fw-light fw-500 lg-1">Total Supply</div>
                          <div className="d-block fs-6 text-light fw-light fw-500 lg-1">18,842,518</div>
                        </div>
                        <ProgressBar
                          height={5}
                          width="100%"
                          percent={55}
                          filledBackground="linear-gradient(90deg, #F7931A 0%, #F3BA2F 77.08%)"
                        />
                      </div>
                    </Col>
                    <Col md={5}>
                      <div className="d-flex flex-column">
                        <div className="d-flex flex-column">
                          <div className="d-block fs-6 text-light fw-light fw-500 lg-1">Max Supply</div>
                          <div className="d-block fs-6 text-light fw-light fw-500 lg-1">21,000,000</div>
                        </div>
                        <div className="d-flex flex-column mt-4">
                          <div className="d-block fs-6 text-light fw-light fw-500 lg-1">Total Supply</div>
                          <div className="d-block fs-6 text-light fw-light fw-500 lg-1">18,842,518</div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="d-flex flex-column">
                <div className="d-flex align-items-baseline">
                  <div className={`d-block title-xl ${isDark ? "text-light" : "text-dark"} fw-light fw-500 lg-1`}>
                    $41.727,50
                  </div>
                  <div className="d-block fs-6 text-danger fw-light fw-500 lg-1 me-2">- 0.47%</div>
                </div>
                <div className="d-flex align-items-baseline">
                  <div className={`d-block fs-6 ${isDark ? "text-light" : "text-dark"} fw-light fw-500 lg-1 me-2`}>
                    0.007203 BTC
                  </div>
                  <div className={`d-block fs-6 ${isDark ? "text-light" : "text-dark"} fw-light fw-500 lg-1`}>
                    - 4.21%
                  </div>
                </div>
                <div className="d-flex align-items-baseline">
                  <div className={`d-block fs-6 ${isDark ? "text-light" : "text-dark"} fw-light fw-500 lg-1 me-2`}>
                    0.1162 ETH
                  </div>
                  <div className="d-block fs-6 text-danger fw-light fw-500 lg-1">-1.41%</div>
                </div>
              </div>
            </Col>
            <Col>
              <div className="over-progress mt-4">
                <div className="d-flex align-items-end justify-content-between mb-2">
                  <div className="d-flex flex-column">
                    <div className={`d-block fs-6 ${!isDark ? "text-dark" : "text-light"} fw-light fw-500 lg-1`}>
                      $401.22
                    </div>
                    <div className={`d-block fs-6 ${!isDark ? "text-dark" : "text-light"} fw-light fw-500 lg-1`}>
                      Low
                    </div>
                  </div>
                  <div className={`d-block fs-6 ${!isDark ? "text-dark" : "text-light"} fw-light fw-500 lg-1`}>Low</div>
                  <div className="d-flex flex-column align-items-end">
                    <div className={`d-block fs-6 ${!isDark ? "text-dark" : "text-light"} fw-light fw-500 lg-1`}>
                      $401.22
                    </div>
                    <div className={`d-block fs-6 ${!isDark ? "text-dark" : "text-light"} fw-light fw-500 lg-1`}>
                      Low
                    </div>
                  </div>
                </div>
                <ProgressBar percent={60} filledBackground="linear-gradient(90deg, #F7931A 0%, #F3BA2F 77.08%)" />
              </div>
            </Col>
            <Col></Col>
          </Row>
          <CoinsOverviewChart width={1000} />
        </Modal.Body>
      </Modal>
    </>
  );
}
