import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Card, Row } from "react-bootstrap";
import { Context } from "..";

const BrandBar = observer(() => {
  const { toy } = useContext(Context);
  return (
    <Row className="d-flex">
      {toy.brands.map((brand) => (
        <Card
          style={{ cursor: "pointer" }}
          key={brand.id}
          className="p-3"
          onClick={() => toy.setSelectedBrand(brand)}
          border={brand.id == toy.selectedBrand.id ? 'danger' : 'light'}
        >
          {brand.name}
        </Card>
      ))}
    </Row>
  );
});

export default BrandBar;
