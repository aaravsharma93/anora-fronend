import React, { useState } from "react";
import {
  Badge,
  Card,
  Col,
  Row,
  InputGroup,
  DropdownButton,
  Dropdown,
  Modal,
} from "react-bootstrap";
import Image from "next/image";
import { ProgressBar } from "react-step-progress-bar";
import { FaExchangeAlt } from "react-icons/fa";
import { makeStyles } from "@mui/styles";
import styles from "./CoinHeader.module.scss";
import {
  Typography,
  Chip,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import Box from "@mui/material/Box";
import CoinPriceChangeBar from "./CoinPriceChangeBar";
import CoinPriceModal from "./CoinPriceModal";

const useStyles = makeStyles({
  root: {
    color: "#E80000",
  },
});

const CoinHeader = () => {
  const classes = useStyles();
  const [showPriceModal, setShowPriceModal] = useState(false);

  const handleClose = () => setShowPriceModal(false);
  const handleShow = () => setShowPriceModal(true);

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <Row className="g-4 mb-4">
        <Col md={4} className="px-0">
          <div className="d-flex flex-column">
            <div className="d-flex align-items-baseline">
              <Typography variant="h2">Bitcoin</Typography>
              <Typography variant="h4" sx={{ ml: 1 }}>
                BTC
              </Typography>
              <div className="d-flex ms-4">
                <Button
                  variant="light"
                  className="bg-dark d-flex justify-content-center aligin-items-center btn py-2 px-2"
                  onClick={handleShow}
                >
                  <Image
                    src={"/images/icons/bell.svg"}
                    width="25"
                    height="25"
                    alt="Fundamental Secrets"
                  />
                </Button>
              </div>
            </div>
          </div>
          <Chip label="Rank #3" />
          <div className="mt-4">
            <Badge className="bg-light-secondary me-1 mb-1">bitcoin.org</Badge>
            <Badge className="bg-light-secondary me-1 mb-1">Explorers</Badge>
            <Badge className="bg-light-secondary me-1 mb-1">Community</Badge>
            <Badge className="bg-light-secondary me-1 mb-1">Source code</Badge>
            <Badge className="bg-light-secondary me-1 mb-1">Whitepaper</Badge>
          </div>
          <div className="d-flex flex-column mt-2">
            <Typography variant="body2">Tags:</Typography>
            <div className="d-flex flex-wrap">
              <Badge className="bg-light-secondary me-1 mb-1">Mineable</Badge>
              <Badge className="bg-light-secondary me-1 mb-1">PoW</Badge>
              <Badge className="bg-light-secondary me-1 mb-1">SHA-256</Badge>
              <Badge className="bg-light-secondary me-1 mb-1">
                Store of Value
              </Badge>
              <Button
                className="btn bg-light-secondary me-1 mb-1 text-success px-2 py-0"
                size="sm"
              >
                View all
              </Button>
            </div>
          </div>
        </Col>
        <Col md={8}>
          <div className="ps-5">
            <Row>
              <Col md={6}>
                <div className="d-flex flex-column">
                  <div className="d-flex align-items-baseline">
                    <Typography variant="h2">$41.727,50</Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{ ml: 1 }}
                      className={classes.root}
                    >
                      - 0.47%
                    </Typography>
                  </div>
                  <div className="d-flex align-items-baseline">
                    <Typography variant="subtitle2"> 0.007203 BTC</Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{ ml: 1 }}
                      className={classes.root}
                    >
                      - 4.21%
                    </Typography>
                  </div>
                  <div className="d-flex align-items-baseline">
                    <Typography variant="subtitle2"> 0.1162 ETH</Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{ ml: 1 }}
                      className={classes.root}
                    >
                      -1.41%
                    </Typography>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className="over-progress">
                  <div className="d-flex align-items-end justify-content-between mb-2">
                    <div className="d-flex flex-column">
                      <Typography variant="h6">$401.22</Typography>
                      <Typography variant="subtitle2">Low</Typography>
                    </div>
                    <Typography variant="subtitle2">Low</Typography>
                    <div className="d-flex flex-column align-items-end">
                      <Typography variant="h6">$401.22</Typography>
                      <Typography variant="subtitle2">High</Typography>
                    </div>
                  </div>
                  <ProgressBar
                    percent={60}
                    filledBackground="linear-gradient(90deg, #F7931A 0%, #F3BA2F 77.08%)"
                  />
                </div>
              </Col>
            </Row>
            <hr className="bg-light" />
            <Row>
              <Col md={3} className="border-end border-1 border-light">
                <div className="d-flex flex-column">
                  <Typography variant="body2">Market Cap</Typography>
                  <Typography variant="h6">$12,889,908,164</Typography>
                </div>
              </Col>
              <Col md={4} className="border-end border-1 border-light">
                <div className="d-flex flex-column">
                  <div className="d-flex flex-column">
                    <Typography variant="body2">Market Cap</Typography>
                    <Typography variant="h6">$12,889,908,164</Typography>
                  </div>
                  <div className="d-flex flex-column mt-4">
                    <Typography variant="body2">Market Cap</Typography>
                    <Typography variant="h6">$12,889,908,164</Typography>
                  </div>
                </div>
              </Col>
              <Col md={5}>
                <Row>
                  <Col md={7}>
                    <div className="d-flex h-100 justify-content-center w-100 flex-column">
                      <div className="d-flex flex-column mb-1">
                        <div className="d-block fs-6 text-light fw-light fw-500 lg-1"></div>
                        <div className="d-block fs-6 text-light fw-light fw-500 lg-1"></div>
                        <Typography variant="body2">Total Supply</Typography>
                        <Typography variant="h6">18,842,518</Typography>
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
                        <Typography variant="body2"> Max Supply</Typography>
                        <Typography variant="h6">21,000,000</Typography>
                      </div>
                      <div className="d-flex flex-column mt-4">
                        <Typography variant="body2">Total Supply</Typography>
                        <Typography variant="h6">18,842,518</Typography>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-md-center mt-5">
        <Col md={12}>
          <CoinPriceChangeBar />
        </Col>
      </Row>
      <CoinPriceModal isOpen={showPriceModal} handleClose={handleClose} />
    </>
  );
};

export default CoinHeader;
