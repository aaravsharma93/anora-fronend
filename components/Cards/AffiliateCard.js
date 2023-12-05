import Image from "next/image";
import React, { useState, useEffect } from "react";
import { ProgressBar } from "react-step-progress-bar";
import { Card, Row, Col, Modal, Button, Form, InputGroup, FormControl } from "react-bootstrap";
import useSettings from "../../hooks/useSettings";
import CoinsOverviewChart from "../Coins/CoinsOverviewChart";
import toast from 'react-hot-toast';
import { inviteAffiliate } from '../../api/user';

const validateEmail = (email) => {
  email = email || "";
  // eslint-disable-next-line no-control-regex
  let re = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  return re.test(email.toLowerCase().trim());
}

export default function AffiliateCard() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState(null);
  const { themeMode } = useSettings();
  const isDark = themeMode === "dark";



  const sendInvite = () => {
    setLoading(true)
    if (validateEmail(email)) {
      inviteAffiliate(email)
        .then(function (response) {
          console.log(response);
          if (response.data.success) {
            toast.success(response.data.message)
            setShow(false)
          } else {
            toast.error(response.data.message)
          }
          setLoading(false)
        }).catch(err=>{
          setLoading(false)
        })
    } else {
      toast.error("Please  enter a valid email!")
      setLoading(false)
    }
  }

  return (
    <>
      <Row className="w-100 align-items-center">
        <Col
          xs={12}
          xl={4}
          className="mb-2"
        >
          <Card className={`CurrenciesCard px-2 py-3 ${themeMode === "dark" && "dark"}`}>
            <Card.Body className="">
              <h6 className="text-uppercase mb-3">
                Affiliate
              </h6>
              <p className="currency mb-2">
                <span className=" fw-medium text-blue">450</span>
              </p>
              <small className="text-muted d-block pl-1"><span className="text-white">2</span> affiliates signed up this week</small>
              <small className="text-muted d-block pl-1"><span className="text-white">No new</span> affiliates signed up this day</small>
              <button className="btn btn-primary mt-3 px-4 py-2"
                onClick={handleShow}
              >Invite a new affiliate</button>
            </Card.Body>
          </Card>
        </Col>
        <Col
          xs={12}
          xl={8}
          className="mb-2"
        >
          <Card className={`CurrenciesCard px-2 py-2 ${themeMode === "dark" && "dark"}`}>
            <Card.Body>
              <h6 className="text-uppercase mb-3">
                Top Affiliate
              </h6>
              <Row className="w-100 align-items-center">
                <Col
                  xs={12}
                  xl={4}
                  className=""
                >
                  <img className="affiliate-thumb" src="/BTC.png" />
                </Col>
                <Col
                  xs={12}
                  xl={4}
                  className=""
                >
                  <div className="d-flex justify-content-center">
                    <p className="text-uppercase text-success mx-2">Revenue</p>
                    <p className="text-uppercase"><span className="text-muted">$</span>41,727,50</p>
                  </div>
                  <div className="d-flex justify-content-center">
                    <p className="text-uppercase text-primary mx-2">Orders</p>
                    <p className="text-uppercase">340</p>
                  </div>
                </Col>
                <Col
                  xs={12}
                  xl={4}
                  className=""
                >
                  <div className="d-flex justify-content-center">
                    <p className="text-uppercase text-warning mx-2">Clicks</p>
                    <p className="text-uppercase">727</p>
                  </div>
                  <div className="d-flex justify-content-center">
                    <p className="text-uppercase text-danger mx-2">Views</p>
                    <p className="text-uppercase">727</p>
                  </div>
                </Col>
              </Row>
              <div className="d-flex delete-affiliate">
                <i className="far fa-trash-alt"></i>
                <p className="text-uppercase mx-2">Delete Affiliate</p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Currency Overview Modal */}

      <Modal
        centered
        contentClassName={themeMode === "dark" && "bg-dark"}
        size="md"
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton className="border-0">
          <Modal.Title>{` `}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="pb-5">
          <Form>
            <h4 className="text-center mb-5">Invite a new affiliate</h4>
            <div className={"d-flex"}>
              <InputGroup className="mb-2">
                <i className="far fa-envelope invite-icon text-gray"></i>
                <FormControl id="inlineFormInputGroup" className={"px-5 bg-transparent"} placeholder="Email" style={{}} onChange={(e) => setEmail(e.target.value)} />
              </InputGroup>
              <Button disabled={loading} className="btn btn-primary invite-popup-submit-btn px-4" onClick={sendInvite}>
                {loading && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>}
                {!loading && "Invite"}</Button>
              {/* <div className="form-group">
                <select className="form-control invite-select" id="exampleFormControlSelect1">
                  <option value="read">can view</option>
                  <option value="write">can edit</option>
                </select>
                <i className="fas fa-angle-down invite-select-arrow text-muted"></i>
              </div> */}
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <div className="d-flex justify-content-start w-100">
            <p className="text-primary mx-3 cursor-pointer">http:/landing...</p>
            <i className="far fa-clone mt-1 text-muted cursor-pointer mx-5"></i>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}
