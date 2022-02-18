import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "..";
import { ListGroup } from "react-bootstrap";
import Col from "react-bootstrap/Col";

const TypeBar = observer(() => {
  const { toy } = useContext(Context);

  return (
    <ListGroup>
      {toy.types.map((type) => (
        <ListGroup.Item
          key={type.id}
          onClick={() => toy.setSelectedType(type)}
          active={type.id === toy.selectedType.id}
					style={{cursor:'pointer'}}
        >
          {type.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
});

export default TypeBar;
