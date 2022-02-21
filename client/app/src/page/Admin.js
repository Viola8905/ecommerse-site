import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import CreateBrand from '../components/modals/CreateBrand';
import CreateToy from '../components/modals/CreateToy';
import CreateType from '../components/modals/CreateType';

const Admin = () => {
	const [brandVisible,setBrandVisible]=useState(false)
	const [typeVisible, setTypeVisible] = useState(false);
	const [toyVisible, setToyVisible] = useState(false);
	return (
    <Container className="d-flex flex-column">
      <Button
        variant={"outline-dark"}
        className="mt-2"
        onClick={() => setTypeVisible(true)}
      >
        добавить тип
      </Button>
      <Button
        variant={"outline-dark"}
        className="mt-2"
        onClick={() => setBrandVisible(true)}
      >
        добавить бренд
      </Button>
      <Button
        variant={"outline-dark"}
        className="mt-2"
        onClick={() => setToyVisible(true)}
      >
        добавить игрушку
      </Button>
      <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
      <CreateToy show={toyVisible} onHide={() => setToyVisible(false)} />
      <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
    </Container>
  );
};

export default Admin;
