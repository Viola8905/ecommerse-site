import React, { useContext } from 'react'
import { Button, Dropdown, Form, Modal } from "react-bootstrap";
import { Context } from '../..';
const CreateToy = ({show, onHide}) => {
	const {toy} = useContext(Context)
	return (
    <Modal size="lg" centered show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add a new toy
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>Choose a type</Dropdown.Toggle>
            <Dropdown.Menu>
              {toy.types.map((type) => (
                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>Choose a brand</Dropdown.Toggle>
            <Dropdown.Menu>
              {toy.brands.map((brand) => (
                <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control placeholder="Enter name of the toy" className="mt-3" />
          <Form.Control placeholder="Enter price of the toy" className="mt-3"  type='number'/>
          <Form.Control  className="mt-3" type='file' />
					<hr/>

        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Close
        </Button>
        <Button variant="outline-success" onClick={onHide}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CreateToy