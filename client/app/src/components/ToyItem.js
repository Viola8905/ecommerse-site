import React from "react";
import { Card, Col, Image } from "react-bootstrap";
import star from '../assets/starRed.png'

const ToyItem = ({ toy }) => {
  return (
    <Col md={3}>
      <Card style={{ width: 150, cursor: "pointer" }} border={"light"}>
        <Image src={toy.img} width={150} height={150} />

        <div className=" text-black-50  d-flex justify-content-between align-items-center mt-1">
          <div className="">Barbi</div>
          <div className="d-flex align-items-center">
            <div>{toy.rating}</div>
            <Image src={star} width={20} height={20} />
          </div>
        </div>
        <div>{toy.name}</div>
      </Card>
    </Col>
  );
};

export default ToyItem;
