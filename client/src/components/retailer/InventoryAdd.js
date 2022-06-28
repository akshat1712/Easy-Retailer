import React, { useState,useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { GlobalContext } from '../../context/GlobalState';

export const InventoryAdd = ({darkMode}) => {

  const { changeRetailerlist } = useContext(GlobalContext);

  const [quantity, SetQuantity] = useState(0);
  const [item, SetItem] = useState("");

  const handleItem = (e) => {
    SetItem(e.target.value);
  };

  const handlequantity = (e) => {
    SetQuantity(e.target.value);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if( item==='' || quantity===0)
      return;
    changeRetailerlist({"name":item,"quantity":quantity});
    SetItem("");
    SetQuantity(0);
  };

  return (
    <div className={darkMode ? "dark-search-container": "search-container"}>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={darkMode ? {color: "white"} : {}}>Item</Form.Label>
          <Form.Control
            className={darkMode ? "dark-item":"item"}
            type="text"
            placeholder="Item"
            value={item}
            onChange={handleItem}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label style={darkMode ? {color: "white"} : {}}>Quantity</Form.Label>
          <Form.Control
            className={darkMode ? "dark-quantity":"quantity"}
            type="number"
            placeholder="Quantity"
            value={quantity}
            onChange={handlequantity}
          />
        </Form.Group>

        <Button variant="primary" onClick={handleUpdate}>
          Update
        </Button>
      </Form>
    </div>
  );
};
