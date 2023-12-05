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

export default function AffiliateDetailsCard() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { themeMode } = useSettings();
  const isDark = themeMode === "dark";

  const router = useRouter()

  const [loading, setLoading] = useState(false);
  const [uniqueurl, setUniqueurl] = useState(null);

  const [videoSrc, setVideoSrc] = useState("");
  const [videoTitle, seVideoTitle] = useState(null);
  const [videoDescription, seVideoDescription] = useState(null);

  const [file, sefile] = useState(null);

  useEffect(() => {
    setUniqueurl(localStorage.getItem("uniqueurl"))
  })

  function _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  const handleChangeVideo = (event) => {
    let file = event.target.files[0];
    let blobURL = URL.createObjectURL(file);
    sefile(file)
    setVideoSrc(blobURL);
  }

  const submit = () => {
    setLoading(true)
    if (videoTitle && videoDescription && file) {

      var formData = new FormData();
      formData.append("videoTitle", videoTitle);
      formData.append("videoDescription", videoDescription);
      formData.append("file", file);

      console.log("data object: ", videoTitle, videoDescription, file)

      saveDetails(formData)
        .then(function (response) {
          console.log(response.data);
          if (response.data.success) {
            localStorage.setItem("affiliate-details", JSON.stringify({ videoTitle, videoDescription, videoSrc}))
            toast.success(response.data.message)
            router.push(`/af/${uniqueurl}`)
          } else {
            toast.error("Update failed")
          }
          setLoading(false)
        }).catch(error => {
          setLoading(false)
          if (error.response) {
            // Request made and server responded
            console.log("error.response.data", error.response.data)
            if (error.response.data) {
              if (error.response.data.message) {
                toast.error(error.response.data.message)
              } else {
                toast.error(error.response.data)
              }
            }
          }
        })
    } else {
      toast.error("Please add all details.")
      setLoading(false)
    }
  }


  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://video-react.github.io/assets/video-react.css"
        />
      </Head>
      <Card className={`CurrenciesCard affiliateCard ${themeMode === "dark" && "dark"}`}>
        <Card.Body>
          <form className="d-flex">
            <Row className="w-100 align-items-center overflow-hidden">
              {/* <Col
              xs={12}
              xl={1}
              className="my-4 my-xl-0 d-flex justify-content-end order-xl-4"
            ></Col> */}
              <Col
                xs={12}
                xl={4}
                className="mb-2"
              >
                <Card style={{ backgroundColor: themeMode === "dark" ? "#0A0A0A" : "#E5E5E5" }}>
                  <Player
                    playsInline
                    src={videoSrc}
                    fluid={false}
                    width={"100%"}
                    height={300}
                  />
                  <Card.Body className="">
                    <div className="">
                      <span className="text-muted" style={{ fontSize: 12 }}>Link on the landing: </span>
                      <div className="d-flex justify-content-between">
                        <p className="text-primary cursor-pointer">https://www.anora.io/af/{uniqueurl}</p>
                        <i className="far fa-clone mt-1 text-muted cursor-pointer"></i>
                      </div>
                    </div>
                    {/* <YouTube videoId="2g811Eo7K8U" opts={{
                height: '100',
                width: '150',
                playerVars: {
                  autoplay: 1,
                },
              }} onReady={_onReady} /> */}
                  </Card.Body>
                </Card>
              </Col>
              <Col
                xs={12}
                xl={8}
                className="affiliate-form-container-col h-100 mb-2"
              >
                <Card className="h-100" style={{ backgroundColor: themeMode === "dark" ? "#0A0A0A" : "#E5E5E5" }}>
                  <Card.Body className="pt-5">
                    <Row>
                      <Col
                        xs={12}
                        xl={3}
                        className=""
                      >
                        <Form.Label className={`mt-2 ${themeMode === "dark" && "text-white"}`} >Video Name</Form.Label>
                      </Col>
                      <Col
                        xs={12}
                        xl={9}
                        className=""
                      >
                        <InputGroup className="mb-4">
                          <i className="fas fa-user-circle invite-icon text-gray"></i>
                          <FormControl id="inlineFormInputGroup" className={"px-5 bg-transparent"} placeholder="Business Video" style={{}}
                            onChange={(e) => seVideoTitle(e.target.value)}
                          />
                        </InputGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col
                        xs={12}
                        xl={3}
                        className=""
                      >
                        <Form.Label className={`mt-2 ${themeMode === "dark" && "text-white"}`}>Description</Form.Label>
                      </Col>
                      <Col
                        xs={12}
                        xl={9}
                        className=""
                      >
                        <InputGroup className="mb-4">
                          <i className="far fa-envelope invite-icon text-gray"></i>
                          <FormControl as="textarea" rows={3} className={"px-5 bg-transparent"} placeholder="It is about..." style={{}}
                            onChange={(e) => seVideoDescription(e.target.value)}
                          />
                        </InputGroup>
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Col
                        xs={12}
                        xl={3}
                        className=""
                      >
                        <Form.Label className={`mt-2 ${themeMode === "dark" && "text-white"}`}>Choose Minuature</Form.Label>
                      </Col>
                      <Col
                        xs={12}
                        xl={9}
                        className=""
                      >
                        <InputGroup className="mb-4">
                          <FormControl type="file" rows={3} className={"bg-transparent"} style={{}}
                            onChange={(e) => handleChangeVideo(e)}
                          />
                        </InputGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col
                        xs={12}
                        xl={3}
                        className=""
                      >
                      </Col>
                      <Col
                        xs={12}
                        xl={9}
                        className=""
                      >
                        <Button disabled={loading} className="btn btn-primary w-100" onClick={submit}>
                          {loading && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>}
                          {!loading && "Save Changes"}</Button>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>

              </Col>
            </Row>
          </form>

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
