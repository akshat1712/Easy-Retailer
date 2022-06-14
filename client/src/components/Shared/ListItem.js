import React from "react";

export default function ListItem(props) {
    console.log(props);
  return (
    <div className="info-container">
      <div className="name-container">

        {!props.login ? (
          <>
            <span className="material-symbols-outlined">person</span>
            <span className="retailer-name">{props.retailerName}</span>
          </>
        ) : (
            <span className="inventory-item">{props.Item}</span>
        )}

      </div>

      <div className="extra-info-container">

        {!props.login ? (
          <>
            <span className="material-symbols-outlined">Call</span>
            <span className="retailer-phone">{props.phone}</span>
          </>
        ) : (
            <span className="inventory-quantity">{props.Quantity}</span>
        )}

      </div>

    </div>
  );
}
