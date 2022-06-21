import React,{useContext} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {motion} from 'framer-motion'

import { GlobalContext } from '../../context/GlobalState';

export default function ListItem(props) {
  const { login } = useContext(GlobalContext);
  const listItemVariants = {
    // hidden:{
    //     y: -1000,
    //     opacity: 0
    // },
    // visible:{
    //     y:0,
    //     opacity:1
    // },
    hover:{
        scale: 1.1,
        transition:{
            ease: "easeInOut"
        },
        boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"
    }
}
  return (
    <Container>
      <Row>
      <motion.div className="info-container"
        variants={listItemVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      >
        <div className="name-container">

          {!login ? (
            <>
              <span className="material-symbols-outlined">person</span>
              <span className="retailer-name">{props.retailerName}</span>
            </>
          ) : (
            <>
              <span className="material-symbols-outlined">store</span>
              <span className="inventory-item">{props.Item}</span>

            </>
          )}

        </div>

        <div className="extra-info-container">

          {!login ? (
            <>
              <span className="material-symbols-outlined">Call</span>
              <span className="retailer-phone">{props.phone}</span>
            </>
          ) : (
              <span className="inventory-quantity">{props.Quantity}</span>
          )}

        </div>

      </motion.div>

      </Row>
    </Container>
  );
}
