import React from "react";
import { Card, Col, Image } from "react-bootstrap";
import { useNavigate} from "react-router-dom";
import star from '../assets/starRed.png'
import { TOY_ROUTE } from "../utils/consts";

const ToyItem = ({ toy }) => {
	const navigate = useNavigate();
  return (
    <Col md={3} className={'mt-3'} onClick={() => navigate(TOY_ROUTE+'/'+ toy.id) }>
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
