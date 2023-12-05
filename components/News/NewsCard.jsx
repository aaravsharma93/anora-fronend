import React from "react";
import Image from "next/image";
import styles from "./NewsCard.module.scss";
import { Button, Card } from "react-bootstrap";

const NewsCard = ({ author, title, content, imageURL }) => {
  return (
    <div className={`d-flex flex-column ${styles.card}`}>
      <div
        style={{
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
          overflow: "hidden",
          width: "100%",
          height: "260px",
        }}
      >
        <Image
          alt="Mountains"
          src={imageURL}
          width="100%"
          height="100%"
          objectFit="cover"
          layout="responsive"
          quality={100}
          style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}
        />
      </div>
      <Card.Body>
        <div className="d-flex align-items-center">
          <span className="text-light fs-6">{author}</span>
          <span className="text-secondary fs-7 fw-600 ms-2"> Oct 25, 2021</span>
        </div>
        <p className="text-primary fw-600 fs-5 mt-2">{title}</p>
        <p className="text-secondary fs-7 mt-2">{content}</p>
        <Button variant="outline-primary">Read</Button>
      </Card.Body>
    </div>
  );
};

export default NewsCard;
