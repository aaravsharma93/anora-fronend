import React from "react";
import { Card } from "react-bootstrap";
import Image from "next/image";
import useSettings from "../../hooks/useSettings";
import { useState } from "react";

export default function SummaryCard() {
  const [isOpen, setIsOpen] = useState(false);
  const { themeMode } = useSettings();

  return (
      <>
        <Card
            className={`SummaryCard py-3 shadow-light-lg ${
                themeMode === "dark" && "dark"
            }`}
        >
          <Card.Body>
            <div className="align-items-center row">
              <div className="col-lg-4 col-sm-12">
                <Card.Title className="text-uppercase">
                  {`today's`} summary <br /> of cryptocurrency
                </Card.Title>
              </div>
              <div className="ms-n2 col">
                <Card.Text className="fs-6 text-muted mb-1 card-text" style={{lineHeight:"38px !important"}}>
                  <span className="d-block font-monospace">14 ago</span>
                  The global market cap is $2.1T. A decrease of{" "}
                  <span className="text-danger">-11.70%</span> over the last day.
                </Card.Text>
              </div>
              <div className="col-auto">
                <button
                    type="button"
                    className="d-flex justify-content-center aligin-items-center btn btn-gradient-primary btn-lg py-4 px-4"
                    onClick={() => setIsOpen(!isOpen)}
                >
                  <Image
                      src={"/down-arrow.svg"}
                      width="13"
                      height="20"
                      alt="Fundamental Secrets"
                  />
                </button>
              </div>
            </div>
            {isOpen && (
                <p className="mt-5">
                  Use our neural network machine learning models to predict and plan
                  accordingly the price of a cryptocurrency token/coin!
                </p>
            )}
          </Card.Body>
        </Card>
      </>
  );
}
