import React from "react";
import { Row, Form, InputGroup, FormControl, Button } from "react-bootstrap";
import useSettings from "../hooks/useSettings";
export default function SubscribeNow() {
  const { themeMode } = useSettings();
  return (
    <>
      <Row
        className={`justify-content-center subscription-form ${
          themeMode === "dark" ? "text-light dark" : ""
        }`}
      >
        <div className={`col-lg-5 col-md-7 pb-md-4 text-center`}>
          <h4 className="fs-1 fw-medium text-uppercase">fundamental secrets</h4>
          <h5 className="fs-5 fw-medium text-uppercase pt-2">
            <span className="text-primary pe-3">newsletter</span>
            <span>starter kit</span>
          </h5>
          <small className="px-5 mx-5 py-4 text-center d-block">
            Get free key content and insights into cryptocurrency investing.
          </small>
          <Form className=" pt-3">
            <InputGroup>
              <FormControl
                id="inlineFormInputGroupUsername"
                placeholder="Email address"
                type="email"
              />
              <Button variant="primary" type="submit">
                Subscribe now
              </Button>
            </InputGroup>
          </Form>
        </div>
      </Row>
    </>
  );
}
