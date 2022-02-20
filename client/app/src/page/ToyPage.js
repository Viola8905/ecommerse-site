import React, { useState } from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";

const ToyPage = () => {

	const [toggleState, setToggleState] = useState(1);
	const toggleTab = () => {
		console.log('hello')
	}
  const toy = {
    id: 1,
    name: "Blond Barbie",
    price: 1000,
    rating: 5,
    img: "https://target.scene7.com/is/image/Target/GUEST_d8988f0b-6d17-43e7-81e4-beeb9daf78a9?wid=488&hei=488&fmt=pjpeg",
  };
  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <Image width={500} height={500} src={toy.img} />
        </Col>
        <Col md={6}>
          <div className="" style={{ fontSize: "30px", fontWeight: 700 }}>
            {toy.name}
          </div>
          <br />
          <div
            className=""
            style={{ fontSize: "16px", fontWeight: 500, color: "blue" }}
          >
            Barbie
          </div>
          <br />
          <div className="" style={{ display: "flex" }}>
            <div className="" style={{ flex: "0 0 50%" }}>
              <div>Artikul: fxf25</div>
              <div style={{ fontSize: "16px", fontWeight: 500, color: "blue" }}>
                Is available
              </div>
              <br />
              <div>Order toy by phone number:</div>
              <div style={{ fontSiz: "20px", fontWeight: 500 }}>
                095 99-99-99
              </div>
              <div>SM</div>
            </div>
            <div style={{ flex: "0 0 50%" }}>
              <Card style={{ textAlign: "center" }}>
                <h3 style={{ fontSize: "20px", margin: " 20px 0" }}>
                  {toy.price} hrn
                </h3>

                <div style={{ margin: "0 0 20px 0" }}>
                  <Button size="lg">Buy now!</Button>
                </div>
              </Card>
            </div>
          </div>

					//tabs//
          <div className="bloc-tabs">
            <div className="tabs active-tabs "  onClick={() => toggleTab(1)}>Description</div>
            <div className="tabs ">Delivery</div>
          </div>
          <div className="content-tabs">
            <div className="content active-content">
              <h2>Content1</h2>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                non minus quo sapiente qui explicabo. Ad excepturi consectetur
                vel rem eos id eligendi, impedit, delectus reprehenderit ullam
                repellendus, sint sunt.
              </p>
            </div>
            <div className="content">
              <h2>Content2</h2>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                non minus quo sapiente qui explicabo. Ad excepturi consectetur
                vel rem eos id eligendi, impedit, delectus reprehenderit ullam
                repellendus, sint sunt.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ToyPage;
