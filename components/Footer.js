import React from "react";
import { Container } from "react-bootstrap";
import Image from "next/image";
import useSettings from "../hooks/useSettings";

export default function Footer() {
  const { themeMode } = useSettings();

  return (
    <>
      <footer className={`${themeMode === "dark" ? "dark" : "light"}`}>
        <Container>
          <div className="row">
            <div className="col-12 col-md-4 col-lg-3 ">
              <div className="default-logo">
                <Image
                  src={themeMode === "dark" ? "/dark-logo.png" : `/logo.png`}
                  width="200"
                  height="40"
                  alt="Fundamental Secrets"
                />
              </div>
              <p className="fs-4 mt-4 pe-xl-5 me-xl-5 lh-sm">
                Your gateway to the universe investments.
              </p>
            </div>
            <div className="col-6 col-md-4 col-lg-2 ">
              <h6 className="fw-normal text-uppercase mb-4">Products</h6>

              <ul className="list-unstyled footer-nav-link">
                <li className="mb-1">
                  <a href="#!" className="text-reset">
                    Course
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#!" className="text-reset">
                    Live Classes
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#!" className="text-reset">
                    Crypto Indices
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <h6 className="fw-normal text-uppercase  mb-4">Services</h6>

              <ul className="list-unstyled footer-nav-link">
                <li className="mb-1">
                  <a href="#!" className="text-reset">
                    Company
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#!" className="text-reset">
                    About US
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#!" className="text-reset">
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-reset">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-reset">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-4 offset-md-4 col-lg-2 offset-lg-0">
              <h6 className="fw-normal text-uppercase  mb-4">Support</h6>

              <ul className="list-unstyled footer-nav-link">
                <li className="mb-1">
                  <a href="#!" className="text-reset">
                    FAQ
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#!" className="text-reset">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-4 col-lg-3">
              <h6 className="fw-normal text-uppercase  mb-4">Follow Us</h6>

              <ul className="list-unstyled list-inline list-social mb-6 mb-md-0">
                <li className="list-inline-item  me-3">
                  <a href="#!" className="text-decoration-none">
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
                <li className="list-inline-item  me-3">
                  <a href="#!" className="text-decoration-none">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="list-inline-item  me-3">
                  <a href="#!" className="text-decoration-none">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li className="list-inline-item me-3">
                  <a href="#!" className="text-decoration-none">
                    <i className="fas fa-paper-plane"></i>
                  </a>
                </li>
                <li className="list-inline-item  me-3">
                  <a href="#!" className="text-decoration-none">
                    <i className="fab fa-pinterest-p"></i>
                  </a>
                </li>
                <li className="list-inline-item  me-3">
                  <a href="#!" className="text-decoration-none">
                    <i className="fab fa-discord"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-top mt-5 pt-4">
            <div className="small  pt-2">
              © 2021. Fundamental Secrets LLC. All rights reserved.
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
}
