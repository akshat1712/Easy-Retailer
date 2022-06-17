import React, { useState,useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { GlobalContext } from '../../context/GlobalState';

export const InventoryAdd = () => {

  const { retailerList,changeRetailerlist } = useContext(GlobalContext);

  const [quantity, SetQuantity] = useState(0);
  const [item, SetItem] = useState("");

  const handleItem = (e) => {
    SetItem(e.target.value);
  };

  const handlequantity = (e) => {
    SetQuantity(e.target.value);
  };

  const handleUpdate = (e) => {
    if( item==='' || quantity==0)
      return;
    changeRetailerlist({"Item":item,"Quantity":quantity});
    SetItem("");
    SetQuantity(0);
  };

  return (
    <div className="search-container">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Item</Form.Label>
          <Form.Control
            type="text"
            placeholder="Item"
            value={item}
            onChange={handleItem}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
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
