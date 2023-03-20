import React from "react";
import { GiCancel } from "react-icons/gi";

import {
  cancelbtn,
  iconStyle,
  modalbody,
  modalContent,
  overlay,
  wallet,
  walletBalance,
  walletchoice,
  walletinput,
  walletText,
} from "./ModalStyle";

const Modal = () => {
  return (
    <div style={modalbody}>
      <div style={overlay}></div>
      <div style={modalContent}>
        <p>Fund Wallet</p>

        <div style={wallet}>
          <p style={walletText}>wallet balance</p>
          <p style={walletBalance}>$24,000,000</p>
        </div>

        <div style={walletinput}>
          <input type="checkbox" />
          <label style={walletchoice}>Bank Transfer</label>
          <input type="checkbox" />
          <label>Fund by Card</label>
        </div>

        <button style={cancelbtn}>
          <GiCancel style={iconStyle} />
        </button>
      </div>
    </div>
  );
};

export default Modal;
