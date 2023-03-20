import React, { useState } from "react";
import spent from "../../assets/spent.svg";
import balance from "../../assets/Balance.svg";
import "./overview.scss";

import Modal from "../Modal/Modal";

const Overview = () => {
  const [modal, setModal] = useState(false);

  const handleToggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="overview">
      <div className="overview-text">
        <h2>Overview</h2>
        <button onClick={handleToggleModal}>Fund wallet</button>

        {modal && <Modal />}
      </div>

      <div className="account-balance">
        <div className="account-info">
          <div style={{ marginBottom: "10px" }}>
            <span>Account balance</span>
            <img src={balance} alt="" />
          </div>
          <strong>$3,000,000</strong>
        </div>

        <div className="account-info">
          <div style={{ marginBottom: "10px" }}>
            <span>Amount spent so far</span>
            <img src={spent} alt="" />
          </div>
          <strong>$3,000,000</strong>
        </div>
      </div>
    </div>
  );
};

export default Overview;
