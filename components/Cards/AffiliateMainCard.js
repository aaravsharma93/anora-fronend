import Image from "next/image";
import React, { useState } from "react";
import { ProgressBar } from "react-step-progress-bar";
import { Card, Row, Col, Modal, Button } from "react-bootstrap";
import useSettings from "../../hooks/useSettings";
import CoinsOverviewChart from "../Coins/CoinsOverviewChart";

export default function AffiliateMainCard({ texClass, count }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { themeMode } = useSettings();
  const isDark = themeMode === "dark";

  function _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  return (
    <>
      <Card className={`CurrenciesCard affiliateCard ${themeMode === "dark" && "dark"}`}>
        <div className={`position-absolute translate-middle affiliate-count-icon ${themeMode === "dark" ? "btn-dark affiliate-count-icon-dark" : "btn-count-light"}`}>
          <p className={texClass}>{count}</p>
        </div>
        <Card.Body className="d-flex">
          <Row className="w-100 align-items-center">
            {/* <Col
              xs={12}
              xl={1}
              className="my-4 my-xl-0 d-flex justify-content-end order-xl-4"
            ></Col> */}
            <Col
              xs={12}
              xl={3}
              className=""
            >
              <img className="affiliate-thumb-main mx-3" src="/images/affiliate-thumb.JPG" />
              {/* <YouTube videoId="2g811Eo7K8U" opts={{
                height: '100',
                width: '150',
                playerVars: {
                  autoplay: 1,
                },
              }} onReady={_onReady} /> */}
            </Col>
            <Col
              xs={12}
              xl={9}
              className=""
            >
              <div className="d-flex">
                <p className="text-muted">Link on the landing:  </p>
                <p className="text-primary mx-3 cursor-pointer">http:/landing...</p>
                <i className="far fa-clone mt-1 text-muted cursor-pointer"></i>
              </div>
              <Row>
                <Col
                  xs={6}
                  xl={4}
                  className=""
                >
                  <p className="text-uppercase text-success mb-0">Revenue</p>
                  <p className="fs-4"><span className="text-muted">$</span>41,727,50</p>
                </Col>
                <Col
                  xs={6}
                  xl={2}
                  className=""
                >
                  <p className="text-uppercase text-primary mb-0">Orders</p>
                  <p className="fs-4">340</p>
                </Col>
                <Col
                  xs={6}
                  xl={2}
                  className=""
                >
                  <p className="text-uppercase text-warning mb-0">Clicks</p>
                  <p className="fs-4">590</p>
                </Col>
                <Col
                  xs={6}
                  xl={2}
                  className=""
                >
                  <p className="text-uppercase text-danger mb-0">views</p>
                  <p className="fs-4">590</p>
                </Col>
                <Col
                  xs={6}
                  xl={2}
                  className="d-flex justify-content-end"
                >
                  <div className={`affiliate-delete-btn ${themeMode === "dark" ? "btn-dark" : "btn-light"}`}>
                    <i className="far fa-trash-alt"></i>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Currency Overview Modal */}

      <Modal
        centered
        contentClassName={themeMode === "dark" && "bg-dark"}
        size="xl"
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton className="border-0">
          <Modal.Title>{` `}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
         
        </Modal.Body>
      </Modal>
    </>
  );
}
