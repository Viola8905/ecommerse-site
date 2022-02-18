import React from "react";
import { Button, Card, Container, Form, Row } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";
const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  //console.log(location)
  return (
    <Container
      className="d-flex justify-content-center align-items-center "
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto"> { isLogin ?  " Login " : " Registration"} </h2>
        <Form className="d-flex flex-column">
          <Form.Control className="mt-2" placeholder="enter email" />
          <Form.Control className="mt-2" placeholder="enter password " />

          <Row className=" d-flex justify-content-between  mt-3 pl-3 pr-3 ">
            {isLogin ? (
              <div className="">
                Don't have an account?
                <NavLink to={REGISTRATION_ROUTE}>Register!</NavLink>
              </div>
            ) : (
              <div>
                Have an account?
                <NavLink to={LOGIN_ROUTE}>Log in!</NavLink>
              </div>
            )}

            <Button variant={"outline-dark"}>
              {isLogin ? "Enter" : "Registration"}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;
