import React,{useContext} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {AnimatePresence, motion} from 'framer-motion'

import { userContext } from "../../context/userContext";

export default function ListItem(props) {
  const {user} = useContext(userContext);
  
  // console.log(props);
  const listItemVariants = {
    hidden:{
        y: "-100vh",
        opacity: 0
    },
    visible:{
        y:0,
        opacity:1
    },
    hover:{
        scale: 1.1,
        transition:{
            ease: "easeInOut"
        },
        boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"
    },
    exit:{
        y: "-100vh"
    }
}
  return (
    <Container>
      <Row>
      <AnimatePresence>
        <motion.div 
          className={props.darkMode ? "dark-info-container":"info-container"}
          variants={listItemVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          exit="exit"
        >
          <div className="name-container">

            {!user.user ? (
              <>
                <span className="material-symbols-outlined">person</span>
                <span className="retailer-name">{props.Name}</span>
              </>
            ) : (
              <>
                <span className="material-symbols-outlined">store</span>
                <span className="inventory-item">{props.name}</span>

              </>
            )}

          </div>

          <div className="extra-info-container">

            {!user.user ? (
              <>
                <span className="material-symbols-outlined">Call</span>
                <span className="retailer-phone">{props.Contact}</span>
              </>
            ) : (
                <span className="inventory-quantity">{props.quantity}</span>
            )}

          </div>
        </motion.div>
      </AnimatePresence>

      </Row>
    </Container>
  );
}
